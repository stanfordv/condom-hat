'use client'

import { useState } from 'react'
import type { Scenario, BudgetTier, ExistingLevel } from '@/lib/types'

type HouseholdSize = 1 | 2 | 4 | 6

interface KitState {
  scenario: Scenario | null
  householdSize: HouseholdSize | null
  existingLevel: ExistingLevel | null
}

const SCENARIOS: { value: Scenario; label: string; description: string }[] = [
  { value: 'virus', label: 'Epidemic / Virus', description: 'Supply chain disruption, medical system overload' },
  { value: 'nuclear', label: 'Nuclear Event', description: 'Blast, fallout, long-term grid-down' },
  { value: 'drone', label: 'Infrastructure Attack', description: 'Grid failure, comms disruption' },
  { value: 'general', label: 'General Preparedness', description: 'All-purpose baseline kit' },
]

const HOUSEHOLD_SIZES: { value: HouseholdSize; label: string }[] = [
  { value: 1, label: 'Just me' },
  { value: 2, label: '2 people' },
  { value: 4, label: '3–4 people' },
  { value: 6, label: '5+ people' },
]

const EXISTING_LEVELS: { value: ExistingLevel; label: string; description: string }[] = [
  { value: 'none', label: 'Starting from zero', description: "I don't have any prep supplies" },
  { value: 'some', label: 'Some prep', description: 'I have basics but there are gaps' },
  { value: 'good', label: 'Well prepared', description: 'I want to upgrade specific items' },
]

const BUDGET_TIERS: { value: BudgetTier; label: string; range: string }[] = [
  { value: 'starter', label: 'Starter', range: 'Under $300' },
  { value: 'mid', label: 'Mid', range: '$300–$800' },
  { value: 'full', label: 'Full kit', range: 'No limit' },
]

export default function KitBuilder({ initialScenario }: { initialScenario?: Scenario }) {
  const [step, setStep] = useState(initialScenario ? 1 : 0)
  const [kit, setKit] = useState<KitState>({
    scenario: initialScenario ?? null,
    householdSize: null,
    existingLevel: null,
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function submit(budgetTier: BudgetTier) {
    if (!kit.scenario || !kit.householdSize || !kit.existingLevel) return
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/kit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...kit, budgetTier }),
      })
      const data = await res.json()
      if (data.checkoutUrl) {
        window.location.href = data.checkoutUrl
      } else {
        setError('No products matched your criteria. Try a different scenario or budget.')
        setLoading(false)
      }
    } catch {
      setError('Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  const steps = [
    <div key="scenario">
      <h3 className="mb-4 text-lg font-semibold text-gray-900">What are you preparing for?</h3>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {SCENARIOS.map((s) => (
          <button
            key={s.value}
            onClick={() => { setKit((k) => ({ ...k, scenario: s.value })); setStep(1) }}
            className="rounded-xl border-2 border-gray-200 p-4 text-left transition hover:border-gray-900"
          >
            <p className="font-semibold text-gray-900">{s.label}</p>
            <p className="mt-0.5 text-sm text-gray-500">{s.description}</p>
          </button>
        ))}
      </div>
    </div>,

    <div key="household">
      <h3 className="mb-4 text-lg font-semibold text-gray-900">How many people are you prepping for?</h3>
      <div className="grid grid-cols-2 gap-3">
        {HOUSEHOLD_SIZES.map((h) => (
          <button
            key={h.value}
            onClick={() => { setKit((k) => ({ ...k, householdSize: h.value })); setStep(2) }}
            className="rounded-xl border-2 border-gray-200 p-4 font-semibold text-gray-900 transition hover:border-gray-900"
          >
            {h.label}
          </button>
        ))}
      </div>
    </div>,

    <div key="existing">
      <h3 className="mb-4 text-lg font-semibold text-gray-900">What&apos;s your current prep level?</h3>
      <div className="space-y-3">
        {EXISTING_LEVELS.map((e) => (
          <button
            key={e.value}
            onClick={() => { setKit((k) => ({ ...k, existingLevel: e.value })); setStep(3) }}
            className="w-full rounded-xl border-2 border-gray-200 p-4 text-left transition hover:border-gray-900"
          >
            <p className="font-semibold text-gray-900">{e.label}</p>
            <p className="mt-0.5 text-sm text-gray-500">{e.description}</p>
          </button>
        ))}
      </div>
    </div>,

    <div key="budget">
      <h3 className="mb-4 text-lg font-semibold text-gray-900">What&apos;s your budget?</h3>
      <div className="space-y-3">
        {BUDGET_TIERS.map((b) => (
          <button
            key={b.value}
            onClick={() => submit(b.value)}
            className="w-full rounded-xl border-2 border-gray-200 p-4 text-left transition hover:border-gray-900"
          >
            <p className="font-semibold text-gray-900">{b.label}</p>
            <p className="mt-0.5 text-sm text-gray-500">{b.range}</p>
          </button>
        ))}
      </div>
    </div>,
  ]

  return (
    <div className="mx-auto max-w-lg rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex gap-1.5">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={`h-1 flex-1 rounded-full transition-colors ${i <= step ? 'bg-gray-900' : 'bg-gray-200'}`}
          />
        ))}
      </div>

      {loading ? (
        <div className="py-10 text-center text-gray-500">Building your kit…</div>
      ) : (
        <>
          {steps[step]}
          {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
          {step > 0 && (
            <button
              onClick={() => setStep((s) => s - 1)}
              className="mt-5 text-sm text-gray-400 hover:text-gray-700"
            >
              ← Back
            </button>
          )}
        </>
      )}
    </div>
  )
}
