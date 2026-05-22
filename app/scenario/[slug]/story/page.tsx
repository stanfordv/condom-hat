import { redirect } from 'next/navigation'
import { scenarioSlugs } from '@/lib/scenarios'
import type { Scenario } from '@/lib/types'

export function generateStaticParams() {
  return scenarioSlugs.map((slug) => ({ slug }))
}

export default async function StoryRedirect({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  redirect(`/scenario/${slug}`)
}
