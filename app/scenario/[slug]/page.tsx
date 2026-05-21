import Link from 'next/link'
import { notFound } from 'next/navigation'
import ScenarioTimeline from '@/components/ScenarioTimeline'
import ProductCard from '@/components/ProductCard'
import KitBuilder from '@/components/KitBuilder'
import { scenarios, scenarioSlugs } from '@/lib/scenarios'
import { supabaseStatic } from '@/app/utils/supabase/static'
import type { Product, Scenario } from '@/lib/types'

export const revalidate = 3600

export function generateStaticParams() {
  return scenarioSlugs.map((slug) => ({ slug }))
}

async function getProducts(scenario: Scenario): Promise<Product[]> {
  const { data } = await supabaseStatic
    .from('products')
    .select('*')
    .contains('scenario', [scenario])
    .eq('in_stock', true)
    .order('tier')
  return (data ?? []) as Product[]
}

export default async function ScenarioPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  if (!scenarioSlugs.includes(slug as Scenario)) notFound()

  const scenario = scenarios[slug as Scenario]
  const products = await getProducts(slug as Scenario)

  const essential = products.filter((p) => p.tier === 'essential')
  const recommended = products.filter((p) => p.tier === 'recommended')
  const premium = products.filter((p) => p.tier === 'premium')

  return (
    <div className="min-h-full">
      {/* Nav */}
      <header className="bg-white border-b border-gray-100 px-6 py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/" className="text-lg font-bold tracking-tight text-gray-900">
            CondomHat
          </Link>
          <Link
            href="#kit-builder"
            className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700 transition-colors"
          >
            Build your kit
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-white border-b border-gray-100 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-600">{scenario.eyebrow}</p>
          <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-gray-900">{scenario.title}</h1>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">{scenario.intro}</p>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-xl font-bold text-gray-900">How it unfolds</h2>
          <ScenarioTimeline phases={scenario.timeline} />
        </div>
      </section>

      {/* Products */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-2 text-2xl font-bold text-gray-900">What you need — and why</h2>
          <p className="mb-10 text-gray-600">One best-in-class option per category. No filler.</p>

          {essential.length > 0 && (
            <div className="mb-12">
              <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-gray-600">Essential</h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {essential.map((p) => <ProductCard key={p.id} product={p} />)}
              </div>
            </div>
          )}

          {recommended.length > 0 && (
            <div className="mb-12">
              <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-gray-600">Recommended</h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {recommended.map((p) => <ProductCard key={p.id} product={p} />)}
              </div>
            </div>
          )}

          {premium.length > 0 && (
            <div>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-gray-600">Premium</h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {premium.map((p) => <ProductCard key={p.id} product={p} />)}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Kit builder CTA */}
      <section id="kit-builder" className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-gray-900">Build your {scenario.title.toLowerCase()} kit</h2>
            <p className="mt-3 text-gray-600">Personalised to your household size, prep level, and budget.</p>
          </div>
          <KitBuilder initialScenario={slug as Scenario} />
        </div>
      </section>

      <footer className="bg-white border-t border-gray-100 px-6 py-8 text-center text-xs text-gray-600">
        <p>CondomHat — Anti-fear. Pro-knowledge.</p>
      </footer>
    </div>
  )
}
