import type { Scenario } from '@/lib/types'

export interface StoryScene {
  duration: string
  headline: string
  narrative: string[]
  gearSlug: string | null
  gearLabel: string | null
  mood: 'normal' | 'tense' | 'critical' | 'hopeful'
  imagePrompt?: string
}

export const storyScenes: Record<Scenario, StoryScene[]> = {
  drone: [
    {
      duration: 'Hour 0',
      headline: 'The grid goes dark.',
      narrative: [
        'You are cooking dinner when every light in the house cuts out. For a second you think it\'s a blown fuse.',
        'Your phone buzzes twice — then nothing. The carrier signal is gone. Through the window, the whole street is black.',
        'On battery, your emergency radio catches a fragment of a broadcast: "coordinated infrastructure attack… multiple cities…"',
      ],
      gearSlug: 'midland-er310',
      gearLabel: 'Midland ER310 Emergency Radio',
      mood: 'tense',
    },
    {
      duration: 'Hours 6–48',
      headline: 'The city empties.',
      narrative: [
        'By morning the supermarket is stripped. Fuel stations have queues six hours long — then dry.',
        'Your daughter asks when the lights are coming back. You tell her soon. You\'re not sure that\'s true.',
        'You clip the Fenix to your head and go through your kit by lamplight. Everything you need is already there.',
      ],
      gearSlug: 'fenix-hm55r',
      gearLabel: 'Fenix HM55R Headlamp',
      mood: 'critical',
    },
    {
      duration: 'Days 3–14',
      headline: 'You hold the line.',
      narrative: [
        'Water pressure drops to nothing on day four. You had eight litres stored. It\'s enough.',
        'Your neighbour knocks — out of food, no plan. You share what you can. You don\'t say anything about how long you planned for this.',
        'Your pack is ready. Your family knows the route. You are not comfortable, but you are in control.',
      ],
      gearSlug: 'mystery-ranch-3day',
      gearLabel: 'Mystery Ranch 3-Day Assault Pack',
      mood: 'critical',
    },
    {
      duration: 'Week 2',
      headline: 'They made it.',
      narrative: [
        'The grid comes back in patches. Your street stays dark three days longer than the next one over.',
        'You had light. Water. A plan. Your family watched you work calmly through every hour of it.',
        'That is what being prepared actually looks like. Not fear. Just readiness.',
      ],
      gearSlug: 'jackery-300-plus',
      gearLabel: 'Jackery Explorer 300 Plus Solar',
      mood: 'hopeful',
    },
  ],

  nuclear: [
    {
      duration: 'Hour 0',
      headline: 'The sky turns white.',
      narrative: [
        'Marcus is at his kitchen table when the flash comes.',
        'Not a bang — just light. He hits the floor before he knows why. His training moves his body before his fear does.',
        'He has seventy-two hours. That number is the only thing that matters now.',
      ],
      gearSlug: 'iosat-ki-tablets',
      gearLabel: 'iOSAT KI Tablets — thyroid protection',
      mood: 'tense',
      imagePrompt: 'rugged man in late 30s lying on modern kitchen floor covering his head, intense white flash of light through windows, dark dramatic interior, photorealistic cinematic',
    },
    {
      duration: 'Hours 1–72',
      headline: 'Shelter. Seal. Survive.',
      narrative: [
        'Marcus seals the basement. Heavy tape over every gap. The poly sheeting goes up in four minutes — he practised.',
        'His daughter sits with her mother. The iOSAT tablets counted out on the table.',
        'They have seventy-two hours. That is enough time if you don\'t panic, and Marcus does not panic.',
      ],
      gearSlug: 'duck-shelter-tape-poly',
      gearLabel: 'Duck Brand Tape + 4-mil Poly Sheeting',
      mood: 'critical',
      imagePrompt: 'rugged handsome man sealing basement door with tape and plastic sheeting, family visible behind him — woman and young child, emergency battery lantern, dramatic shadows, tense determined expression, photorealistic cinematic',
    },
    {
      duration: 'Days 3–14',
      headline: 'The count drops.',
      narrative: [
        'He checks the GMC-800 every four hours. The radiation count is falling. The math is on their side.',
        'He makes coffee on the camp stove and doesn\'t say anything about how good it tastes.',
        'His daughter draws pictures of their house. He keeps them.',
      ],
      gearSlug: 'gq-gmc800-geiger',
      gearLabel: 'GQ GMC-800 Geiger Counter',
      mood: 'critical',
      imagePrompt: 'rugged man examining handheld Geiger counter in dim underground shelter, family sleeping on cots in background, single emergency lantern, focused calm expression, dramatic chiaroscuro lighting, photorealistic cinematic',
    },
    {
      duration: 'Recovery',
      headline: 'First light.',
      narrative: [
        'The basement door opens for the first time in eleven days.',
        'Marcus leads his family into a changed world. His pack is on his back. His daughter holds his hand.',
        'He looks at the sky and breathes.',
      ],
      gearSlug: 'mission-darkness-faraday',
      gearLabel: 'Mission Darkness Faraday Bag',
      mood: 'hopeful',
      imagePrompt: 'rugged handsome man leading wife and young daughter out of storm shelter into morning sunlight, wearing tactical backpack, family looks relieved and determined, dramatic backlit golden hour light, hopeful composition, photorealistic cinematic',
    },
  ],

  virus: [
    {
      duration: 'Week 1',
      headline: 'The shelves go bare.',
      narrative: [
        'It starts with one empty shelf in the pharmacy. Then three. Then the whole row.',
        'The news uses words like "precautionary" and "monitoring". The supply chain uses words like "disruption".',
        'You start counting what you have at home. It isn\'t enough.',
      ],
      gearSlug: 'lifestraw-peak-squeeze',
      gearLabel: 'LifeStraw Peak Squeeze',
      mood: 'tense',
    },
    {
      duration: 'Week 2–4',
      headline: 'Schools close.',
      narrative: [
        'By week three your children are home. Your office is a kitchen table. The grocery delivery window is three weeks out.',
        'The 3M respirator sits on the shelf. You put it on before the post office run. People stare. You don\'t care.',
        'You are not afraid. You are early.',
      ],
      gearSlug: '3m-6502ql-respirator',
      gearLabel: '3M 6502QL Respirator + P100 Filters',
      mood: 'tense',
    },
    {
      duration: 'Month 1–3',
      headline: 'Month two.',
      narrative: [
        'The medical system is saturated. You are not in it. That is by design.',
        'Your IFAK is stocked. Your water is filtered. Your family hasn\'t had to leave for anything essential in six weeks.',
        'Outside, the neighbourhood has learned what you already knew.',
      ],
      gearSlug: 'scherber-ifak',
      gearLabel: 'Scherber Premium IFAK',
      mood: 'critical',
    },
    {
      duration: 'Month 3+',
      headline: 'You didn\'t panic.',
      narrative: [
        'Normality returns slowly. Shops fill up. Offices reopen. The "unusual illness" becomes a footnote.',
        'You rotate your supplies back onto the shelf. Ready for next time — because there is always a next time.',
        'That\'s not pessimism. That\'s pattern recognition.',
      ],
      gearSlug: 'leatherman-wave-plus',
      gearLabel: 'Leatherman Wave+',
      mood: 'hopeful',
    },
  ],

  general: [
    {
      duration: 'Hour 0',
      headline: 'The forecast said three days.',
      narrative: [
        'The storm comes harder than expected. Power goes at midnight. The kids wake up scared.',
        'You are not scared. You have a plan.',
        'The headlamp is on the nightstand. Always.',
      ],
      gearSlug: 'fenix-hm55r',
      gearLabel: 'Fenix HM55R Headlamp',
      mood: 'normal',
    },
    {
      duration: 'Hour 36',
      headline: 'The grid stays down.',
      narrative: [
        'Temperatures drop. The neighbour\'s house goes cold — they have nothing.',
        'You have the Jackery charged. Warm food. The radio gives updates every six hours.',
        'Your family is comfortable. That is not luck.',
      ],
      gearSlug: 'jackery-300-plus',
      gearLabel: 'Jackery Explorer 300 Plus Solar',
      mood: 'tense',
    },
    {
      duration: 'Day 5',
      headline: 'Repair crews are two days out.',
      narrative: [
        'That\'s fine. You\'ve got three more days in you, easily.',
        'Your daughter asks if she can charge her iPad. You say yes.',
        'You smile because you planned for exactly this.',
      ],
      gearSlug: 'midland-er310',
      gearLabel: 'Midland ER310 Emergency Radio',
      mood: 'tense',
    },
    {
      duration: 'Week 2',
      headline: 'The lights come back on.',
      narrative: [
        'The street celebrates. You nod and close the garage where your kit lives.',
        'You rotate the food. Top up the water. Recharge what you used.',
        'You are already ready for the next one.',
      ],
      gearSlug: 'mystery-ranch-3day',
      gearLabel: 'Mystery Ranch 3-Day Assault Pack',
      mood: 'hopeful',
    },
  ],
}
