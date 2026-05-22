import { notFound } from 'next/navigation'
import { scenarios, scenarioSlugs } from '@/lib/scenarios'
import { storyScenes } from '@/lib/story-scenes'
import StoryMode from '@/components/story/StoryMode'
import AIStoryMode from '@/components/story/AIStoryMode'
import type { Scenario } from '@/lib/types'

export function generateStaticParams() {
  return scenarioSlugs.map(slug => ({ slug }))
}

const AI_SCENARIOS: Scenario[] = ['nuclear', 'flooding']

export default async function StoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  if (!scenarioSlugs.includes(slug as Scenario)) notFound()

  const scenario = scenarios[slug as Scenario]
  const scenes = storyScenes[slug as Scenario]
  const isAI = AI_SCENARIOS.includes(slug as Scenario)

  return isAI ? (
    <AIStoryMode scenes={scenes} scenario={slug as Scenario} />
  ) : (
    <StoryMode
      scenes={scenes}
      scenarioSlug={slug}
      scenarioTitle={scenario.title}
    />
  )
}
