import Image from 'next/image'
import Link from 'next/link'
import { CATALOG, CATEGORIES } from '@/lib/product-catalog'

export const metadata = {
  title: 'Products — CondomHat',
  description: 'Every item we carry. One best-in-class option per category.',
}

const SCENARIO_LABELS: Record<string, string> = {
  all: 'All scenarios',
  virus: 'Epidemic',
  nuclear: 'Nuclear',
  drone: 'Infrastructure',
  flooding: 'Flooding',
  general: 'General',
}

export default function ProductsPage() {
  return (
    <div className="min-h-full bg-white">
      <section className="px-6 py-20" style={{ backgroundColor: '#13100A' }}>
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: 'rgba(240,196,0,0.5)' }}>★ Product catalog ★</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight" style={{ color: '#F0C400' }}>Everything we carry</h1>
          <p className="mt-4 text-lg leading-relaxed" style={{ color: 'rgba(245,240,232,0.65)' }}>
            One best-in-class option per category. No filler, no duplicates.
            Each item is chosen for reliability, repairability, and real-world use.
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl space-y-16">
          {CATEGORIES.map((category) => {
            const items = CATALOG.filter((item) => item.category === category)
            return (
              <div key={category}>
                <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-500">
                  {category}
                </h2>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                  {items.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/products/${item.slug}`}
                      className="group rounded-2xl border border-gray-200 bg-white overflow-hidden hover:border-gray-900 hover:shadow-md transition-all"
                    >
                      <div className="relative h-48 bg-gray-50">
                        {item.image ? (
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center text-gray-300 text-sm">
                            No image
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <p className="font-semibold text-gray-900 leading-snug group-hover:text-gray-700">
                          {item.name}
                        </p>
                        <div className="mt-2 flex flex-wrap gap-1">
                          {item.scenarios.map((s) => (
                            <span
                              key={s}
                              className="inline-block rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600"
                            >
                              {SCENARIO_LABELS[s] ?? s}
                            </span>
                          ))}
                        </div>
                        <p className="mt-3 text-xs font-medium text-gray-400 group-hover:text-gray-900 transition-colors">
                          Learn more →
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
