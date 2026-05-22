import { type NextRequest } from 'next/server'

const CHARACTER_PREFIX =
  'Cinematic photorealistic photograph, rugged handsome man late 30s short dark beard calm determined expression practical dark clothing, premium quality 4K shallow depth of field, '

function deterministicSeed(str: string): number {
  return Math.abs(str.split('').reduce((acc, c) => acc * 31 + c.charCodeAt(0), 7)) % 2147483647
}

export async function POST(request: NextRequest) {
  const { prompt, sceneId } = await request.json()

  if (!process.env.FAL_KEY) {
    return Response.json({ error: 'FAL_KEY not configured', url: null }, { status: 503 })
  }

  const res = await fetch('https://fal.run/fal-ai/flux/schnell', {
    method: 'POST',
    headers: {
      Authorization: `Key ${process.env.FAL_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      prompt: CHARACTER_PREFIX + prompt,
      image_size: 'landscape_16_9',
      num_inference_steps: 4,
      num_images: 1,
      enable_safety_checker: true,
      seed: deterministicSeed(sceneId),
    }),
  })

  if (!res.ok) {
    const err = await res.text()
    console.error('Fal.ai error:', err)
    return Response.json({ error: 'Generation failed', url: null }, { status: 500 })
  }

  const data = await res.json()
  return Response.json({ url: data.images?.[0]?.url ?? null })
}
