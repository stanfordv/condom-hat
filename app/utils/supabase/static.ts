import { createClient } from '@supabase/supabase-js'

// Cookie-free client for ISR/static pages. Placeholder values prevent build-time throws
// when env vars aren't available; real queries simply return empty data in that case.
export const supabaseStatic = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co',
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || 'placeholder-key',
)
