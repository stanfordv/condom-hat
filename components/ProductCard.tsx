import type { Product } from '@/lib/types'

const TIER_BADGE: Record<string, string> = {
  essential: 'bg-gray-100 text-gray-700',
  recommended: 'bg-blue-50 text-blue-700',
  premium: 'bg-amber-50 text-amber-800',
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="flex flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-semibold leading-snug text-gray-900">{product.name}</h3>
        <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${TIER_BADGE[product.tier] ?? ''}`}>
          {product.tier}
        </span>
      </div>
      {product.why && (
        <p className="mt-2 text-sm leading-relaxed text-gray-600">{product.why}</p>
      )}
      <div className="mt-auto flex items-center justify-between pt-4">
        <span className="text-base font-semibold text-gray-900">
          ${(product.price_cents / 100).toFixed(2)}
        </span>
        {!product.in_stock && (
          <span className="text-xs font-medium text-red-600">Out of stock</span>
        )}
      </div>
    </div>
  )
}
