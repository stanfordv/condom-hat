'use client'

import { useState } from 'react'
import Link from 'next/link'

const NAV_LINKS = [
  { href: '/scenario/virus',   label: 'Epidemic' },
  { href: '/scenario/nuclear', label: 'Nuclear' },
  { href: '/scenario/drone',   label: 'Infrastructure' },
  { href: '/scenario/flooding',label: 'Flooding' },
  { href: '/scenario/general', label: 'General' },
  { href: '/products',         label: 'Products' },
  { href: '/about',            label: 'About' },
]

export default function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <div className="sm:hidden">
      <button
        onClick={() => setOpen(o => !o)}
        className="flex flex-col gap-1.5 p-2 rounded"
        aria-label="Toggle menu"
      >
        <span
          className="block h-0.5 w-6 rounded-full transition-all duration-300"
          style={{
            backgroundColor: '#F0C400',
            transform: open ? 'translateY(8px) rotate(45deg)' : 'none',
          }}
        />
        <span
          className="block h-0.5 w-6 rounded-full transition-all duration-300"
          style={{
            backgroundColor: '#F0C400',
            opacity: open ? 0 : 1,
          }}
        />
        <span
          className="block h-0.5 w-6 rounded-full transition-all duration-300"
          style={{
            backgroundColor: '#F0C400',
            transform: open ? 'translateY(-8px) rotate(-45deg)' : 'none',
          }}
        />
      </button>

      {open && (
        <div
          className="absolute left-0 right-0 z-50 px-6 py-4 flex flex-col gap-4 border-t"
          style={{ backgroundColor: '#13100A', borderColor: 'rgba(240,196,0,0.15)' }}
        >
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="text-sm font-bold uppercase tracking-widest"
              style={{ color: 'rgba(245,240,232,0.7)' }}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
