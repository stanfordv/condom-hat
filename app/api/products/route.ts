import { type NextRequest } from 'next/server'
import { supabaseStatic } from '@/app/utils/supabase/static'

export const dynamic = 'force-static'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const scenario = searchParams.get('scenario')
  const tier = searchParams.get('tier')

  let query = supabaseStatic.from('products').select('*').eq('in_stock', true)

  if (scenario) {
    query = query.contains('scenario', [scenario])
  }
  if (tier) {
    query = query.eq('tier', tier)
  }

  const { data, error } = await query

  if (error) {
    return Response.json({ error: 'Failed to fetch products' }, { status: 500 })
  }

  return Response.json(data)
}
