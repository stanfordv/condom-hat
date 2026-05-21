import Link from 'next/link'
import KitBuilder from '@/components/KitBuilder'
import { getActiveThreatLevel } from '@/lib/threat'
import { scenarios } from '@/lib/scenarios'
import type { Scenario } from '@/lib/types'

const SCENARIO_CARDS: { slug: Scenario; emoji: string }[] = [
  { slug: 'virus', emoji: '🦠' },
  { slug: 'nuclear', emoji: '☢️' },
  { slug: 'drone', emoji: '⚡' },
  { slug: 'general', emoji: '🎒' },
]

export default async function HomePage() {
  const { level } = await getActiveThreatLevel()
  const shopHidden = level >= 5

  return (
    <>
      {/* Hero */}
      <section className="px-6 py-24 text-center">
        <div className="mx-auto max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-400">Premium preparedness</p>
          <h1 className="mt-4 text-5xl font-bold leading-tight tracking-tight text-gray-900">
            Understand the threat.<br />Buy what makes sense.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-500">
            Every product we carry is the single best option in its category.
            No filler. No fear-mongering. Just calm, expert knowledge.
          </p>
          {!shopHidden && (
            <div className="mt-8 flex justify-center gap-4">
              <Link
                href="#kit-builder"
                className="rounded-xl bg-gray-900 px-6 py-3 font-medium text-white hover:bg-gray-700 transition-colors"
              >
                Build your kit
              </Link>
              <Link
                href="/scenario/general"
                className="rounded-xl border border-gray-200 px-6 py-3 font-medium text-gray-700 hover:border-gray-400 transition-colors"
              >
                Browse scenarios
              </Link>
            </div>
          )}
        </div>
      </section>

      {shopHidden ? (
        /* Level 5 — information only */
        <section className="px-6 py-16">
          <div className="mx-auto max-w-2xl rounded-2xl border border-red-200 bg-red-50 p-8 text-center">
            <h2 className="text-xl font-bold text-red-900">Shop temporarily unavailable</h2>
            <p className="mt-3 text-red-700">
              During a critical threat event, we believe information matters more than commerce.
              Browse the scenario guides below — they&apos;re free and always available.
            </p>
          </div>
        </section>
      ) : null}

      {/* Scenario cards */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-2xl font-bold text-gray-900">Choose your scenario</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SCENARIO_CARDS.map(({ slug, emoji }) => {
              const s = scenarios[slug]
              return (
                <Link
                  key={slug}
                  href={`/scenario/${slug}`}
                  className="group rounded-2xl border border-gray-200 bg-white p-6 transition hover:border-gray-900 hover:shadow-md"
                >
                  <span className="text-3xl">{emoji}</span>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-gray-400">{s.eyebrow}</p>
                  <h3 className="mt-2 font-semibold text-gray-900 leading-snug">{s.title}</h3>
                  <p className="mt-1 text-sm text-gray-500 line-clamp-2">{s.primaryThreat}</p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Kit builder */}
      {!shopHidden && (
        <section id="kit-builder" className="px-6 py-20 bg-gray-50">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold text-gray-900">Build your kit</h2>
              <p className="mt-3 text-gray-500">Four questions. A personalised kit. Straight to checkout.</p>
            </div>
            <KitBuilder />
          </div>
        </section>
      )}

      {/* How it works */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-2xl font-bold text-gray-900">How it works</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {[
              { step: '01', title: 'Learn the threat', body: 'Each scenario page explains how an event unfolds in plain language — no jargon, no fear.' },
              { step: '02', title: 'Understand the timeline', body: 'See the phases of an event and what you need at each stage before it happens.' },
              { step: '03', title: 'Buy what you need', body: 'One best-in-class product per category. Organised by scenario. Delivered fast.' },
            ].map(({ step, title, body }) => (
              <div key={step}>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-300">{step}</p>
                <h3 className="mt-2 font-semibold text-gray-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
