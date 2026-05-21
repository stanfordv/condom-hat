import type { TimelinePhase } from '@/lib/scenarios'

interface ScenarioTimelineProps {
  phases: TimelinePhase[]
}

export default function ScenarioTimeline({ phases }: ScenarioTimelineProps) {
  return (
    <div className="relative pl-8">
      <div className="absolute left-3 top-2 bottom-2 w-px bg-gray-200" />
      <ol className="space-y-8">
        {phases.map((phase, i) => (
          <li key={i} className="relative">
            <div className="absolute -left-5 mt-1.5 h-2.5 w-2.5 rounded-full border-2 border-gray-400 bg-white" />
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-600">{phase.duration}</p>
            <h4 className="mt-0.5 font-semibold text-gray-900">{phase.label}</h4>
            <p className="mt-1 text-sm leading-relaxed text-gray-600">{phase.description}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}
