'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { StoryScene } from '@/lib/story-scenes'

const MOOD = {
  normal:   { accent: 'text-blue-400',  dot: 'bg-blue-400',  active: 'bg-blue-400' },
  tense:    { accent: 'text-amber-400', dot: 'bg-amber-400', active: 'bg-amber-400' },
  critical: { accent: 'text-red-400',   dot: 'bg-red-400',   active: 'bg-red-400' },
  hopeful:  { accent: 'text-green-400', dot: 'bg-green-400', active: 'bg-green-400' },
}

interface Props {
  scenes: StoryScene[]
  scenarioSlug: string
  scenarioTitle: string
}

export default function StoryMode({ scenes, scenarioSlug, scenarioTitle }: Props) {
  const [index, setIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(0)
  const [gearVisible, setGearVisible] = useState(false)
  const [fading, setFading] = useState(false)

  const scene = scenes[index]
  const colors = MOOD[scene.mood]
  const allTextVisible = visibleCount >= scene.narrative.length
  const canContinue = scene.gearSlug ? gearVisible : allTextVisible
  const isLast = index === scenes.length - 1

  useEffect(() => {
    setVisibleCount(0)
    setGearVisible(false)

    const timers: ReturnType<typeof setTimeout>[] = []
    scene.narrative.forEach((_, i) => {
      timers.push(setTimeout(() => setVisibleCount(i + 1), (i + 1) * 1400))
    })
    if (scene.gearSlug) {
      timers.push(setTimeout(() => setGearVisible(true), scene.narrative.length * 1400 + 700))
    }
    return () => timers.forEach(clearTimeout)
  }, [index, scene])

  function advance() {
    if (!canContinue || isLast) return
    setFading(true)
    setTimeout(() => {
      setIndex(i => i + 1)
      setFading(false)
    }, 350)
  }

  return (
    <div
      className={`min-h-screen bg-gray-950 text-white flex flex-col transition-opacity duration-300 ${fading ? 'opacity-0' : 'opacity-100'}`}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
        <Link
          href={`/scenario/${scenarioSlug}/intel`}
          className="text-xs font-medium text-white/40 hover:text-white/80 transition-colors tracking-wide"
        >
          ← Intel
        </Link>
        <p className="text-xs font-semibold uppercase tracking-widest text-white/30">{scenarioTitle}</p>
        <div className="flex gap-2">
          {scenes.map((_, i) => (
            <div
              key={i}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === index ? `w-6 ${colors.active}` : i < index ? 'w-1.5 bg-white/30' : 'w-1.5 bg-white/10'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scene content */}
      <div className="flex-1 flex flex-col justify-center px-6 py-16 mx-auto w-full max-w-2xl">
        <p className={`text-xs font-bold uppercase tracking-widest mb-5 ${colors.accent}`}>
          {scene.duration}
        </p>

        <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-white mb-10">
          {scene.headline}
        </h2>

        <div className="space-y-5 overflow-hidden">
          {scene.narrative.map((para, i) => (
            <p
              key={i}
              className={`text-lg leading-relaxed text-gray-300 transition-all duration-700 ${
                i < visibleCount ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
            >
              {para}
            </p>
          ))}
        </div>

        {/* Gear collected */}
        {scene.gearSlug && (
          <div
            className={`mt-12 transition-all duration-700 ${
              gearVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-3">
              Gear collected
            </p>
            <div className="inline-flex items-center gap-4 rounded-xl border border-white/15 bg-white/5 px-4 py-3">
              {scene.gearImage && (
                <div className="relative h-14 w-14 flex-shrink-0 rounded-lg overflow-hidden bg-white/10">
                  <Image
                    src={`/products/${scene.gearImage}`}
                    alt={scene.gearLabel ?? ''}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
              )}
              {!scene.gearImage && <span className={`h-2 w-2 rounded-full flex-shrink-0 ${colors.dot}`} />}
              <div>
                <span className="block text-sm font-semibold text-white">{scene.gearLabel}</span>
                <span className={`text-xs font-medium ${colors.accent}`}>added to kit</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom controls */}
      <div className="px-6 py-6 border-t border-white/10 flex items-center justify-between">
        <p className="text-xs text-white/20">
          {index + 1} / {scenes.length}
        </p>

        {isLast ? (
          <Link
            href={`/scenario/${scenarioSlug}/intel#kit-builder`}
            className={`rounded-xl px-6 py-3 text-sm font-semibold text-gray-950 transition-all duration-700 ${
              canContinue ? `${colors.active} opacity-100` : 'bg-white/20 opacity-0 pointer-events-none'
            }`}
          >
            Build your kit →
          </Link>
        ) : (
          <button
            onClick={advance}
            className={`rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-500 ${
              canContinue
                ? 'bg-white text-gray-950 opacity-100 cursor-pointer'
                : 'bg-white/10 text-white/20 opacity-50 cursor-not-allowed'
            }`}
          >
            Continue →
          </button>
        )}
      </div>
    </div>
  )
}
