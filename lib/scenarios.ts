import type { Scenario } from '@/lib/types'

export interface TimelinePhase {
  label: string
  duration: string
  description: string
}

export interface ScenarioConfig {
  slug: Scenario
  title: string
  eyebrow: string
  intro: string
  primaryThreat: string
  timeline: TimelinePhase[]
}

export const scenarios: Record<Scenario, ScenarioConfig> = {
  virus: {
    slug: 'virus',
    title: 'Epidemic / Virus Outbreak',
    eyebrow: 'Scenario 01',
    intro: 'Supply chains fracture within days of a declared outbreak. Medical systems saturate before most people realise there is a problem.',
    primaryThreat: 'Supply chain disruption, medical system overload',
    timeline: [
      { label: 'Early signal', duration: 'Week 1–2', description: 'Unusual illness reports. Grocery shelves begin thinning. Pharmacies run short on key medications.' },
      { label: 'Escalation', duration: 'Week 2–4', description: 'Schools and offices close. Supply chain disruption becomes visible. Panic buying begins.' },
      { label: 'Critical', duration: 'Month 1–3', description: 'Medical systems saturated. Movement restrictions possible. Supply chains disrupted for months.' },
      { label: 'Recovery', duration: 'Month 3–12', description: 'Gradual normalisation. Supply chains rebuild slowly. Immunity and treatment pathways established.' },
    ],
  },
  nuclear: {
    slug: 'nuclear',
    title: 'Nuclear Event',
    eyebrow: 'Scenario 02',
    intro: 'The first 72 hours determine survival outcomes. After that, long-term grid failure and contamination are the primary challenges.',
    primaryThreat: 'Blast, fallout (72-hour window), long-term grid-down',
    timeline: [
      { label: 'Early signal', duration: 'Hours 0–1', description: 'Flash, shockwave, or EMP. Immediate shelter-in-place. Communications likely disrupted.' },
      { label: 'Escalation', duration: 'Hours 1–72', description: 'Peak fallout period. Shelter, seal, and monitor radiation levels. Do not go outside.' },
      { label: 'Critical', duration: 'Days 3–14', description: 'Radiation decreases exponentially. Grid likely down. Water and food security become critical.' },
      { label: 'Recovery', duration: 'Weeks–Months', description: 'Gradual return to limited movement. Long-term grid rebuilding. Community coordination essential.' },
    ],
  },
  drone: {
    slug: 'drone',
    title: 'Drone / Infrastructure Attack',
    eyebrow: 'Scenario 03',
    intro: 'A coordinated attack on infrastructure creates cascading failures. Power, communications, and supply chains collapse faster than most people expect.',
    primaryThreat: 'Grid failure, comms disruption, supply chain breakdown',
    timeline: [
      { label: 'Early signal', duration: 'Hours 0–6', description: 'Rolling power outages. Communications degraded. Reports of infrastructure incidents.' },
      { label: 'Escalation', duration: 'Hours 6–48', description: 'Extended grid failure. Mobile networks saturated or down. Fuel supply disrupted.' },
      { label: 'Critical', duration: 'Days 2–14', description: 'Food and fuel supply chains collapse. Water pressure lost in some areas. Social order strained.' },
      { label: 'Recovery', duration: 'Weeks–Months', description: 'Infrastructure repairs begin. Supply chains restart regionally. Slow return to normality.' },
    ],
  },
  general: {
    slug: 'general',
    title: 'General Preparedness',
    eyebrow: 'Baseline',
    intro: 'Natural disasters, prolonged power outages, or supply disruptions can happen anywhere. A baseline kit covers most scenarios.',
    primaryThreat: 'All-purpose baseline kit',
    timeline: [
      { label: 'Early signal', duration: 'Hours 0–24', description: 'Storm warning, grid failure, or local emergency. Time to act — not to shop.' },
      { label: 'Escalation', duration: 'Hours 24–72', description: 'Extended disruption. Essential services strained. Your kit carries you through.' },
      { label: 'Critical', duration: 'Days 3–7', description: 'Extended outage or supply disruption. Self-sufficiency becomes essential.' },
      { label: 'Recovery', duration: 'Week 2+', description: 'Services restore. Community rebuilds. Your kit helped you weather the gap.' },
    ],
  },
  flooding: {
    slug: 'flooding',
    title: 'Massive Flooding',
    eyebrow: 'Scenario 05',
    intro: 'Floodwaters don\'t just damage property — they isolate communities within hours. The people who survive well are the ones who prepared to help, not just themselves.',
    primaryThreat: 'Water isolation, contamination, communication loss, supply cut-off',
    timeline: [
      { label: 'Early warning', duration: 'Hours 0–12', description: 'Flood watches escalate to warnings. Rivers breach banks faster than forecast. Evacuation routes start flooding.' },
      { label: 'Rising water', duration: 'Hours 12–48', description: 'Ground floors inaccessible. Power and road access cut. Those without supplies face immediate crisis.' },
      { label: 'Isolation', duration: 'Days 2–7', description: 'No supply lines. Water contaminated. Communities cut off from emergency services. Self-reliance and mutual aid become survival.' },
      { label: 'Recovery', duration: 'Weeks 2–8', description: 'Water recedes. Infrastructure damage assessed. Rebuilding begins — but the community that helped each other recovers fastest.' },
    ],
  },
}

export const scenarioSlugs = Object.keys(scenarios) as Scenario[]
