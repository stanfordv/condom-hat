import { type NextRequest } from 'next/server'
import { z } from 'zod'
import { getActiveThreatLevel, setThreatLevel } from '@/lib/threat'

export async function GET() {
  const threatLevel = await getActiveThreatLevel()
  return Response.json(threatLevel)
}

const ThreatInputSchema = z.object({
  level: z.number().int().min(1).max(5),
  message: z.string().nullable().optional(),
  scenario: z.enum(['virus', 'nuclear', 'drone', 'general']).nullable().optional(),
})

export async function POST(request: NextRequest) {
  const authHeader = request.headers.get('authorization')
  if (!authHeader || authHeader !== `Bearer ${process.env.ADMIN_SECRET}`) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await request.json()
  const parsed = ThreatInputSchema.safeParse(body)
  if (!parsed.success) {
    return Response.json({ error: parsed.error.flatten() }, { status: 400 })
  }

  const setBy = request.headers.get('x-admin-email') ?? 'admin'
  const { data, error } = await setThreatLevel({ ...parsed.data, setBy })

  if (error) {
    return Response.json({ error: 'Failed to set threat level' }, { status: 500 })
  }

  return Response.json(data)
}
