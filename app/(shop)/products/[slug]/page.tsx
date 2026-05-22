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
      <div className="border-b border-gray-100 px-6 py-4">
        <div className="mx-auto max-w-5xl">
          <Link href="/products" className="text-xs text-gray-500 hover:text-gray-900 transition-colors">
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
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
              {item.category}
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
              {item.name}
            </h1>

            {/* Scenarios */}
            <div className="mt-4 flex flex-wrap gap-2">
              {item.scenarios.map((s) => (
                <span
                  key={s}
                  className="inline-block rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-600"
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
            <div className="mt-6 rounded-xl bg-gray-50 p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                Why this one
              </p>
              <p className="text-sm leading-relaxed text-gray-700">
                {item.why}
              </p>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-3">
              <button className="w-full rounded-xl bg-gray-900 px-6 py-4 text-sm font-semibold text-white hover:bg-gray-700 transition-colors">
                Add to kit
              </button>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-xl border border-gray-200 px-6 py-4 text-center text-sm font-medium text-gray-600 hover:border-gray-400 hover:text-gray-900 transition-colors"
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
