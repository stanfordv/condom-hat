import { createClient } from '@/app/utils/supabase/server'

const DEFAULT_THREAT = { level: 1 as const, message: null, scenario: null }

// TODO: replace with Vercel Edge Config read for sub-1ms latency:
//   import { get } from '@vercel/edge-config'
//   const level = await get<number>('threat_level')
export async function getActiveThreatLevel() {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL?.startsWith('http')) {
    return DEFAULT_THREAT
  }
  const supabase = await createClient()
  const { data } = await supabase
    .from('threat_levels')
    .select('level, message, scenario')
    .eq('is_active', true)
    .single()
  return (data as typeof DEFAULT_THREAT | null) ?? DEFAULT_THREAT
}

export async function setThreatLevel({
  level,
  setBy,
  message,
  scenario,
}: {
  level: number
  setBy: string
  message?: string | null
  scenario?: string | null
}) {
  const supabase = await createClient()
  await supabase.from('threat_levels').update({ is_active: false }).eq('is_active', true)
  const { data, error } = await supabase
    .from('threat_levels')
    .insert({
      level,
      set_by: setBy,
      message: message ?? null,
      scenario: scenario ?? null,
      is_active: true,
    })
    .select()
    .single()
  // TODO: also push updated level to Vercel Edge Config here
  return { data, error }
}
