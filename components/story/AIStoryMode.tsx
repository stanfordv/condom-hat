'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import type { StoryScene } from '@/lib/story-scenes'
import type { Scenario } from '@/lib/types'

interface SceneImage {
  url: string | null
  loading: boolean
  failed: boolean
}

interface Props {
  scenes: StoryScene[]
  scenario: Scenario
}

export default function AIStoryMode({ scenes, scenario }: Props) {
  const [index, setIndex] = useState(0)
  const [images, setImages] = useState<SceneImage[]>(
    scenes.map(() => ({ url: null, loading: false, failed: false }))
  )
  const [fading, setFading] = useState(false)

  const scene = scenes[index]
  const image = images[index]
  const isLast = index === scenes.length - 1

  const fetchImage = useCallback(async (i: number) => {
    setImages(prev => {
      if (prev[i].url || prev[i].loading) return prev
      return prev.map((img, j) => j === i ? { ...img, loading: true } : img)
    })

    try {
      const res = await fetch('/api/story-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: scenes[i].imagePrompt ?? scenes[i].headline,
          sceneId: `${scenario}-${i}`,
        }),
      })
      const data = await res.json()
      setImages(prev => prev.map((img, j) =>
        j === i ? { url: data.url ?? null, loading: false, failed: !data.url } : img
      ))
    } catch {
      setImages(prev => prev.map((img, j) =>
        j === i ? { ...img, loading: false, failed: true } : img
      ))
    }
  }, [scenes, scenario])

  // Fetch current + pre-fetch next
  useEffect(() => {
    fetchImage(index)
    if (index < scenes.length - 1) fetchImage(index + 1)
  }, [index, fetchImage, scenes.length])

  function advance() {
    if (isLast) return
    setFading(true)
    setTimeout(() => {
      setIndex(i => i + 1)
      setFading(false)
    }, 600)
  }

  return (
    <div className="relative min-h-screen bg-gray-950 flex flex-col overflow-hidden">
      {/* AI background image */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
          image.url && !fading ? 'opacity-100' : 'opacity-0'
        }`}
        style={image.url ? { backgroundImage: `url(${image.url})` } : undefined}
      />

      {/* Cinematic gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-gray-950/10" />

      {/* Loading shimmer */}
      {image.loading && !image.url && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
          <div className="h-8 w-8 rounded-full border-2 border-white/20 border-t-white/80 animate-spin" />
          <p className="text-xs font-medium uppercase tracking-widest text-white/30">
            Generating scene…
          </p>
        </div>
      )}

      {/* Failed fallback — show dark gradient still looks cinematic */}
      {image.failed && !image.url && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black" />
      )}

      {/* Top nav */}
      <div className="relative z-10 flex items-center justify-between px-6 py-5">
        <Link
          href={`/scenario/${scenario}`}
          className="text-xs font-medium tracking-wide text-white/50 hover:text-white transition-colors"
        >
          ← Intel view
        </Link>
        <div className="flex gap-2">
          {scenes.map((_, i) => (
            <div
              key={i}
              className={`h-0.5 rounded-full transition-all duration-500 ${
                i === index ? 'w-6 bg-amber-400' : i < index ? 'w-2 bg-white/40' : 'w-2 bg-white/15'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content — pinned to bottom */}
      <div className="relative z-10 flex-1 flex flex-col justify-end px-6 pb-8 max-w-2xl">
        <p className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3">
          {scene.duration}
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-white mb-6">
          {scene.headline}
        </h2>

        <div className="space-y-3 mb-8">
          {scene.narrative.map((para, i) => (
            <p key={i} className="text-base leading-relaxed text-white/75">
              {para}
            </p>
          ))}
        </div>

        {scene.gearLabel && (
          <div className="inline-flex items-center gap-3 rounded-xl border border-white/15 bg-black/50 backdrop-blur-sm px-4 py-3 mb-8 w-fit">
            <span className="h-2 w-2 rounded-full bg-amber-400 flex-shrink-0" />
            <span className="text-sm font-semibold text-white">{scene.gearLabel}</span>
            <span className="text-xs font-medium text-amber-400">collected</span>
          </div>
        )}

        {isLast ? (
          <Link
            href={`/scenario/${scenario}#kit-builder`}
            className="inline-flex w-fit items-center rounded-xl bg-amber-400 px-6 py-3 text-sm font-semibold text-gray-950"
          >
            Build your kit →
          </Link>
        ) : (
          <button
            onClick={advance}
            className="inline-flex w-fit items-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-gray-950 hover:bg-white/90 transition-colors"
          >
            Continue →
          </button>
        )}
      </div>
    </div>
  )
}
