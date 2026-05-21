import Link from 'next/link'
import ThreatBanner from '@/components/ThreatBanner'
import { getActiveThreatLevel } from '@/lib/threat'
import type { Scenario } from '@/lib/types'

const SCENARIO_NAV: { slug: Scenario; label: string }[] = [
  { slug: 'virus', label: 'Epidemic' },
  { slug: 'nuclear', label: 'Nuclear' },
  { slug: 'drone', label: 'Infrastructure' },
  { slug: 'general', label: 'General' },
]

export default async function ShopLayout({ children }: { children: React.ReactNode }) {
  const { level } = await getActiveThreatLevel()

  return (
    <div className="flex min-h-full flex-col">
      <ThreatBanner />
      <header className="bg-white border-b border-gray-100 px-6 py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/" className="text-lg font-bold tracking-tight text-gray-900">
            CondomHat
          </Link>
          <nav className="hidden gap-6 sm:flex">
            {SCENARIO_NAV.map((s) => (
              <Link
                key={s.slug}
                href={`/scenario/${s.slug}`}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                {s.label}
              </Link>
            ))}
          </nav>
          {level < 5 && (
            <Link
              href="#kit-builder"
              className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700 transition-colors"
            >
              Build your kit
            </Link>
          )}
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t border-gray-100 px-6 py-8 text-center text-xs text-gray-600">
        <p>CondomHat — Anti-fear. Pro-knowledge.</p>
      </footer>
    </div>
  )
}
