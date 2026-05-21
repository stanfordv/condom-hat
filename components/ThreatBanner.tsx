import { getActiveThreatLevel } from '@/lib/threat'

const LEVEL_CONFIG = {
  2: { bg: 'bg-yellow-50 border-yellow-200', text: 'text-yellow-800', label: 'Elevated' },
  3: { bg: 'bg-orange-50 border-orange-200', text: 'text-orange-900', label: 'Heightened' },
  4: { bg: 'bg-red-50 border-red-200', text: 'text-red-900', label: 'Severe — in-stock items only' },
  5: { bg: 'bg-red-900 border-red-900', text: 'text-white', label: 'Critical — shop unavailable' },
} as const

export default async function ThreatBanner() {
  const { level, message } = await getActiveThreatLevel()

  if (level <= 1) return null

  const config = LEVEL_CONFIG[level as keyof typeof LEVEL_CONFIG]
  if (!config) return null

  return (
    <div className={`border-b px-4 py-2.5 text-sm text-center ${config.bg} ${config.text}`}>
      <span className="font-semibold">{config.label}</span>
      {message && <span className="ml-2 opacity-80">{message}</span>}
    </div>
  )
}
