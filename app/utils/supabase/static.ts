import { createClient } from '@supabase/supabase-js'

// Cookie-free client for use in ISR/static pages.
// Uses anon key — ensure RLS allows public reads on relevant tables.
export const supabaseStatic = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
)
