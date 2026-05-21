import { type NextRequest } from 'next/server'
import { z } from 'zod'
import { createClient } from '@/app/utils/supabase/server'
import { stripe } from '@/lib/stripe'
import type { Product } from '@/lib/types'

const TIERS_BY_BUDGET: Record<string, string[]> = {
  starter: ['essential'],
  mid: ['essential', 'recommended'],
  full: ['essential', 'recommended', 'premium'],
}

const KitInputSchema = z.object({
  scenario: z.enum(['virus', 'nuclear', 'drone', 'general']),
  householdSize: z.union([z.literal(1), z.literal(2), z.literal(4), z.literal(6)]),
  existingLevel: z.enum(['none', 'some', 'good']),
  budgetTier: z.enum(['starter', 'mid', 'full']),
})

export async function POST(request: NextRequest) {
  const body = await request.json()
  const parsed = KitInputSchema.safeParse(body)
  if (!parsed.success) {
    return Response.json({ error: parsed.error.flatten() }, { status: 400 })
  }

  const { scenario, householdSize, existingLevel, budgetTier } = parsed.data
  const allowedTiers = TIERS_BY_BUDGET[budgetTier]
  const supabase = await createClient()

  let query = supabase
    .from('products')
    .select('*')
    .contains('scenario', [scenario])
    .in('tier', allowedTiers)
    .eq('in_stock', true)

  if (existingLevel === 'good') {
    query = query.neq('tier', 'essential')
  }

  const { data: products, error: productsError } = await query

  if (productsError) {
    return Response.json({ error: 'Failed to fetch products' }, { status: 500 })
  }

  const typedProducts = (products ?? []) as Product[]
  const productIds = typedProducts.map((p) => p.id)

  const { data: kitConfig } = await supabase
    .from('kit_configurations')
    .insert({
      scenario,
      household_size: householdSize,
      budget_tier: budgetTier,
      existing_level: existingLevel,
      product_ids: productIds,
    })
    .select()
    .single()

  const quantity = householdSize <= 2 ? 1 : Math.ceil(householdSize / 2)
  const lineItems = typedProducts
    .filter((p) => p.stripe_price_id)
    .map((p) => ({ price: p.stripe_price_id!, quantity }))

  if (lineItems.length === 0) {
    return Response.json({ products: typedProducts, kitConfigId: kitConfig?.id ?? null })
  }

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: lineItems,
    success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/order/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/scenario/${scenario}`,
    metadata: { kit_config_id: kitConfig?.id ?? '' },
  })

  if (kitConfig?.id) {
    await supabase
      .from('kit_configurations')
      .update({ stripe_session_id: session.id })
      .eq('id', kitConfig.id)
  }

  return Response.json({
    checkoutUrl: session.url,
    products: typedProducts,
    kitConfigId: kitConfig?.id ?? null,
  })
}
