import { type NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/app/utils/supabase/middleware'

export async function proxy(request: NextRequest) {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL?.startsWith('http')) {
    return NextResponse.next()
  }
  const { supabaseResponse } = createClient(request)
  return supabaseResponse
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
