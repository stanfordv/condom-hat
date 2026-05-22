import Link from 'next/link'
import Image from 'next/image'
import ThreatBanner from '@/components/ThreatBanner'
import MobileNav from '@/components/MobileNav'
import { getActiveThreatLevel } from '@/lib/threat'
import type { Scenario } from '@/lib/types'

const SCENARIO_NAV: { slug: Scenario; label: string }[] = [
  { slug: 'virus', label: 'Epidemic' },
  { slug: 'nuclear', label: 'Nuclear' },
  { slug: 'drone', label: 'Infrastructure' },
  { slug: 'flooding', label: 'Flooding' },
  { slug: 'general', label: 'General' },
]

export default async function ShopLayout({ children }: { children: React.ReactNode }) {
  const { level } = await getActiveThreatLevel()

  return (
    <div className="flex min-h-full flex-col">
      <ThreatBanner />
      <header className="relative px-6 py-4" style={{ backgroundColor: '#13100A' }}>
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/condomhatdude.png" alt="CondomHat" width={36} height={36} className="rounded" />
            <span className="text-lg font-bold tracking-widest uppercase" style={{ color: '#F0C400' }}>CondomHat</span>
          </Link>
          <nav className="hidden gap-6 sm:flex">
            {SCENARIO_NAV.map((s) => (
              <Link
                key={s.slug}
                href={`/scenario/${s.slug}`}
                className="brand-nav-link text-sm font-medium uppercase tracking-wider"
              >
                {s.label}
              </Link>
            ))}
            <Link href="/products" className="brand-nav-link text-sm font-medium uppercase tracking-wider">
              Products
            </Link>
            <Link href="/about" className="brand-nav-link text-sm font-medium uppercase tracking-wider">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            {level < 5 && (
              <Link
                href="#kit-builder"
                className="hidden sm:block rounded-lg px-4 py-2 text-sm font-bold uppercase tracking-wider text-white transition-opacity hover:opacity-80"
                style={{ backgroundColor: '#8C151A' }}
              >
                Build your kit
              </Link>
            )}
            <MobileNav />
          </div>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="px-6 py-8 text-center" style={{ backgroundColor: '#13100A' }}>
        <p className="text-xs font-bold uppercase tracking-widest" style={{ color: 'rgba(245,240,232,0.4)' }}>CondomHat</p>
        <p className="mt-2 text-xs italic tracking-wider" style={{ color: 'rgba(245,240,232,0.4)' }}>New Zealand · Hawaii · World Wide</p>
      </footer>
    </div>
  )
}
