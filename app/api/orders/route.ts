import { type NextRequest } from 'next/server'
import { getStripe } from '@/lib/stripe'
import { createClient } from '@/app/utils/supabase/server'
import { getActiveThreatLevel } from '@/lib/threat'

export async function POST(request: NextRequest) {
  const sig = request.headers.get('stripe-signature')
  const body = await request.text()

  let event
  try {
    event = getStripe().webhooks.constructEvent(body, sig!, process.env.STRIPE_WEBHOOK_SECRET!)
  } catch {
    return Response.json({ error: 'Webhook signature invalid' }, { status: 400 })
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object
    const supabase = await createClient()
    const { level } = await getActiveThreatLevel()

    await supabase.from('orders').insert({
      stripe_session_id: session.id,
      kit_config_id: session.metadata?.kit_config_id || null,
      email: session.customer_email ?? null,
      status: 'paid',
      total_cents: session.amount_total,
      threat_level_at_order: level,
    })
  }

  return Response.json({ received: true })
}
