// Generates one story scene video via fal.ai and saves it to public/story/
// Usage: npm run generate:scene

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')

const FAL_KEY = process.env.FAL_KEY
if (!FAL_KEY) {
  console.error('FAL_KEY not set. Run: npm run generate:scene (uses .env.local)')
  process.exit(1)
}

const SCENE = {
  scenario: 'nuclear',
  index: 0,
  outputPath: 'public/story/nuclear/scene-0.mp4',
  prompt: `Cinematic film shot: rugged handsome man in his late 30s with short dark beard, sitting alone at a wooden kitchen table at night reading, suddenly a blinding white flash explodes through the window, he immediately reacts and dives to the floor covering his head with his arms, dramatic slow motion, photorealistic 4K, dark moody interior lighting`,
}

const MODEL = 'fal-ai/kling-video/v1.6/standard/text-to-video'

const RESUME_REQUEST_ID = process.env.RESUME_REQUEST_ID || null

async function run() {
  console.log(`\nGenerating video for: ${SCENE.scenario} scene ${SCENE.index}`)
  console.log(`Prompt: "${SCENE.prompt.slice(0, 80)}…"\n`)

  let request_id = RESUME_REQUEST_ID
  let statusUrl, responseUrl

  if (!request_id) {
    // Submit to queue
    const submitRes = await fetch(`https://queue.fal.run/${MODEL}`, {
      method: 'POST',
      headers: { Authorization: `Key ${FAL_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: SCENE.prompt, duration: '5', aspect_ratio: '16:9' }),
    })

    if (!submitRes.ok) {
      console.error('Submit failed:', await submitRes.text())
      process.exit(1)
    }

    const queued = await submitRes.json()
    request_id = queued.request_id
    statusUrl = queued.status_url
    responseUrl = queued.response_url
    console.log(`Queued. Request ID: ${request_id}`)
  } else {
    console.log(`Resuming request ID: ${request_id}`)
    statusUrl = `https://queue.fal.run/fal-ai/kling-video/requests/${request_id}/status`
    responseUrl = `https://queue.fal.run/fal-ai/kling-video/requests/${request_id}`
  }

  // Poll until done
  let attempts = 0
  while (true) {
    await new Promise(r => setTimeout(r, 6000))
    attempts++
    process.stdout.write(`\rWaiting… ${attempts * 6}s elapsed`)

    const statusRes = await fetch(statusUrl, { headers: { Authorization: `Key ${FAL_KEY}` } })
    if (!statusRes.ok) { process.stdout.write(` (${statusRes.status})`); continue }
    const statusData = await statusRes.json()
    const { status } = statusData

    if (status === 'COMPLETED') break
    if (status === 'FAILED') {
      console.error('\nGeneration failed:', JSON.stringify(statusData))
      process.exit(1)
    }
    process.stdout.write(` [${status}]`)
  }

  // Fetch result
  const resultRes = await fetch(responseUrl, { headers: { Authorization: `Key ${FAL_KEY}` } })
  const result = await resultRes.json()
  const videoUrl = result.video?.url

  if (!videoUrl) {
    console.error('\nNo video URL in response:', JSON.stringify(result))
    process.exit(1)
  }

  console.log(`\nVideo URL: ${videoUrl}`)

  // Download and save
  const videoRes = await fetch(videoUrl)
  const buffer = await videoRes.arrayBuffer()
  const outputPath = path.join(ROOT, SCENE.outputPath)
  fs.writeFileSync(outputPath, Buffer.from(buffer))

  const sizeMB = (buffer.byteLength / 1024 / 1024).toFixed(1)
  console.log(`\nSaved to: ${SCENE.outputPath} (${sizeMB} MB)`)
  console.log(`Preview at: http://localhost:3000/story/nuclear/scene-0.mp4`)
}

run().catch(err => { console.error(err); process.exit(1) })
