import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CATALOG } from '@/lib/product-catalog'

export function generateStaticParams() {
  return CATALOG.map((item) => ({ slug: item.slug }))
}

const SCENARIO_LABELS: Record<string, string> = {
  all: 'All scenarios',
  virus: 'Epidemic',
  nuclear: 'Nuclear',
  drone: 'Infrastructure',
  flooding: 'Flooding',
  general: 'General',
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const item = CATALOG.find((p) => p.slug === slug)
  if (!item) notFound()

  return (
    <div className="min-h-full bg-white">
      {/* Breadcrumb */}
      <div className="px-6 py-4" style={{ backgroundColor: '#13100A', borderBottom: '1px solid rgba(240,196,0,0.12)' }}>
        <div className="mx-auto max-w-5xl">
          <Link href="/products" className="text-xs font-medium uppercase tracking-wider transition-colors" style={{ color: 'rgba(245,240,232,0.5)' }}>
            ← All products
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">

          {/* Image */}
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-50">
            {item.image ? (
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            ) : (
              <div className="flex h-full items-center justify-center text-gray-300">
                No image
              </div>
            )}
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <p className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: '#8C151A' }}>
              {item.category}
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight" style={{ color: '#13100A' }}>
              {item.name}
            </h1>

            {/* Scenarios */}
            <div className="mt-4 flex flex-wrap gap-2">
              {item.scenarios.map((s) => (
                <span
                  key={s}
                  className="inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider"
                  style={{ backgroundColor: '#13100A', color: '#F0C400' }}
                >
                  {SCENARIO_LABELS[s] ?? s}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="mt-6 text-base leading-relaxed text-gray-600">
              {item.description}
            </p>

            {/* Why this */}
            <div className="mt-6 rounded-xl p-5" style={{ backgroundColor: '#F5F0E8', border: '1px solid rgba(19,16,10,0.08)' }}>
              <p className="text-xs font-bold uppercase tracking-[0.25em] mb-2" style={{ color: '#8C151A' }}>
                Why this one
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(19,16,10,0.7)' }}>
                {item.why}
              </p>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-3">
              <button className="w-full rounded-xl px-6 py-4 text-sm font-bold uppercase tracking-wider text-white transition-opacity hover:opacity-80" style={{ backgroundColor: '#8C151A' }}>
                Add to kit
              </button>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-xl px-6 py-4 text-center text-sm font-medium uppercase tracking-wider transition-colors"
                style={{ border: '1px solid rgba(19,16,10,0.15)', color: 'rgba(19,16,10,0.55)' }}
              >
                View manufacturer page ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
