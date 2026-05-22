import Link from 'next/link'
import KitBuilder from '@/components/KitBuilder'
import { getActiveThreatLevel } from '@/lib/threat'
import { scenarios } from '@/lib/scenarios'
import type { Scenario } from '@/lib/types'

const SCENARIO_CARDS: { slug: Scenario; emoji: string }[] = [
  { slug: 'virus', emoji: '🦠' },
  { slug: 'nuclear', emoji: '☢️' },
  { slug: 'drone', emoji: '⚡' },
  { slug: 'flooding', emoji: '🌊' },
  { slug: 'general', emoji: '🎒' },
]

export default async function HomePage() {
  const { level } = await getActiveThreatLevel()
  const shopHidden = level >= 5

  return (
    <>
      {/* Hero */}
      <section className="px-6 py-28 text-center" style={{ backgroundColor: '#13100A' }}>
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.35em]" style={{ color: 'rgba(245,240,232,0.35)' }}>
            ★ Premium Preparedness ★
          </p>
          <h1 className="mt-5 text-5xl font-bold leading-tight tracking-tight" style={{ color: '#F0C400' }}>
            Understand the threat.<br />Buy what makes sense.
          </h1>
          <p className="mt-6 text-lg leading-relaxed" style={{ color: 'rgba(245,240,232,0.55)' }}>
            Every product we carry is the single best option in its category.
            No filler. No fear-mongering. Just calm, expert knowledge.
          </p>
          {!shopHidden && (
            <div className="mt-8 flex justify-center gap-4">
              <Link
                href="#kit-builder"
                className="rounded-xl px-6 py-3 font-bold uppercase tracking-wider text-white transition-opacity hover:opacity-80"
                style={{ backgroundColor: '#8C151A' }}
              >
                Build your kit
              </Link>
              <Link
                href="/scenario/general"
                className="rounded-xl px-6 py-3 font-medium uppercase tracking-wider transition-colors"
                style={{ border: '1px solid rgba(240,196,0,0.35)', color: '#F0C400' }}
              >
                Browse scenarios
              </Link>
            </div>
          )}
          <p className="mt-10 text-sm italic tracking-wider" style={{ color: 'rgba(245,240,232,0.4)' }}>
            Envy of the Apocalypse.
          </p>
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
      <section className="px-6 py-16" style={{ backgroundColor: '#F5F0E8' }}>
        <div className="mx-auto max-w-6xl">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em]" style={{ color: 'rgba(19,16,10,0.4)' }}>★ Scenarios ★</p>
          <h2 className="mb-8 text-2xl font-bold" style={{ color: '#13100A' }}>Choose your scenario</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {SCENARIO_CARDS.map(({ slug, emoji }) => {
              const s = scenarios[slug]
              return (
                <Link
                  key={slug}
                  href={`/scenario/${slug}`}
                  className="group rounded-xl p-6 transition-all hover:shadow-lg"
                  style={{ backgroundColor: '#13100A', border: '2px solid rgba(240,196,0,0.2)' }}
                >
                  <span className="text-3xl">{emoji}</span>
                  <p className="mt-1 text-xs font-bold uppercase tracking-wider" style={{ color: '#F0C400' }}>{s.eyebrow}</p>
                  <h3 className="mt-2 font-semibold leading-snug" style={{ color: '#F5F0E8' }}>{s.title}</h3>
                  <p className="mt-1 text-sm line-clamp-2" style={{ color: 'rgba(245,240,232,0.55)' }}>{s.primaryThreat}</p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Kit builder */}
      {!shopHidden && (
        <section id="kit-builder" className="px-6 py-20" style={{ backgroundColor: '#13100A' }}>
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em]" style={{ color: 'rgba(240,196,0,0.5)' }}>★ Personalised ★</p>
              <h2 className="text-3xl font-bold" style={{ color: '#F0C400' }}>Build your kit</h2>
              <p className="mt-3" style={{ color: 'rgba(245,240,232,0.55)' }}>Four questions. A personalised kit. Straight to checkout.</p>
            </div>
            <KitBuilder />
          </div>
        </section>
      )}

      {/* How it works */}
      <section className="px-6 py-20" style={{ backgroundColor: '#F5F0E8' }}>
        <div className="mx-auto max-w-4xl">
          <p className="mb-2 text-center text-xs font-bold uppercase tracking-[0.3em]" style={{ color: 'rgba(19,16,10,0.35)' }}>★ The process ★</p>
          <h2 className="mb-12 text-center text-2xl font-bold" style={{ color: '#13100A' }}>How it works</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {[
              { step: '01', title: 'Learn the threat', body: 'Each scenario page explains how an event unfolds in plain language — no jargon, no fear.' },
              { step: '02', title: 'Understand the timeline', body: 'See the phases of an event and what you need at each stage before it happens.' },
              { step: '03', title: 'Buy what you need', body: 'One best-in-class product per category. Organised by scenario. Delivered fast.' },
            ].map(({ step, title, body }) => (
              <div key={step} className="rounded-xl p-6" style={{ backgroundColor: 'white', border: '1px solid rgba(19,16,10,0.1)' }}>
                <p className="text-xs font-bold uppercase tracking-widest" style={{ color: '#8C151A' }} aria-hidden="true">{step}</p>
                <h3 className="mt-2 font-semibold" style={{ color: '#13100A' }}>{title}</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: 'rgba(19,16,10,0.6)' }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
