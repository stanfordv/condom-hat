import type { Scenario } from '@/lib/types'

export interface StoryScene {
  duration: string
  headline: string
  narrative: string[]
  gearSlug: string | null
  gearLabel: string | null
  gearImage?: string  // filename in /public/products/
  mood: 'normal' | 'tense' | 'critical' | 'hopeful'
  imagePrompt?: string
}

export const storyScenes: Record<Scenario, StoryScene[]> = {
  drone: [
    {
      duration: 'Hour 0',
      headline: 'Everything stops.',
      narrative: [
        'Ethan is grilling in the backyard when the lights go out. Not just his house. The whole street. The whole suburb.',
        'His phone is dead. The car won\'t turn over. His neighbour\'s car won\'t either.',
        'He goes inside, finds the hand-cranked radio and tunes it. Two words come through before the signal dies: EMP attack.',
      ],
      gearSlug: 'midland-radio',
      gearLabel: 'Midland ER310 Weather Alert Radio',
      gearImage: 'midland-radio.jpg',
      mood: 'tense',
      imagePrompt: 'athletic blonde man in his mid 30s standing at a suburban kitchen window at night, entire neighbourhood pitch black outside, hand-cranked emergency radio on the counter, wife and three young children visible behind him looking anxious, his expression calm and focused, dramatic single candle light, photorealistic cinematic',
    },
    {
      duration: 'Hours 1–6',
      headline: 'Smoke on the horizon.',
      narrative: [
        'By midnight there are three columns of smoke rising to the east. Infrastructure. Substations, probably.',
        'Ethan\'s wife asks if they should leave. He tells her not yet — moving at night without knowing the routes is the wrong call.',
        'He clips the Fenix to his head and starts going through the garage. Everything they need is already there.',
      ],
      gearSlug: 'fenix-headlamp',
      gearLabel: 'Fenix HM55R Headlamp',
      gearImage: 'fenix-headlamp.png',
      mood: 'tense',
      imagePrompt: 'athletic blonde man in his 30s on a suburban back porch at night, wearing a headlamp, looking out at three distant orange smoke columns on the dark horizon, his wife stands behind him with arms crossed looking worried, tense dramatic atmosphere, photorealistic cinematic',
    },
    {
      duration: 'Hours 6–24',
      headline: 'The car won\'t start.',
      narrative: [
        'Every vehicle on the street is dead. EMP takes solid-state electronics — anything with a modern computer.',
        'Ethan pulls the bikes out of the garage. He loads the Mystery Ranch with three days of supplies, documents, the radio.',
        'They are not driving out of this. They are walking — and that is fine, because he planned for exactly this.',
      ],
      gearSlug: 'daypack',
      gearLabel: 'Mystery Ranch 2-Day Assault Pack',
      gearImage: 'daypack.jpg',
      mood: 'critical',
      imagePrompt: 'athletic blonde man in his 30s loading a large tactical backpack in a suburban garage, car hood open uselessly in the background, three bicycles lined up ready, early morning grey light through the garage door, determined focused expression, photorealistic cinematic',
    },
    {
      duration: 'Day 2',
      headline: 'On foot, together.',
      narrative: [
        'The family moves before sunrise. Ethan leads. His wife covers the rear. The two older kids ride bikes. He carries the youngest.',
        'They take the back roads. Quiet. No crowds, no panic, no competition for resources.',
        'He cut this route six months ago on a Sunday drive. His wife thought he was being paranoid. She hasn\'t said that since.',
      ],
      gearSlug: 'rope',
      gearLabel: 'Titan Survivor Cord',
      gearImage: 'rope.jpg',
      mood: 'critical',
      imagePrompt: 'athletic blonde man with a loaded backpack leading his wife and three children along a quiet empty suburban road at dawn, two kids on bikes, he carries a young child, all wearing practical clothing, calm and purposeful, soft dawn light through suburban trees, photorealistic cinematic',
    },
    {
      duration: 'Days 3–7',
      headline: 'Hold the perimeter.',
      narrative: [
        'They shelter at his brother-in-law\'s place two miles out — higher ground, a well, a wood stove.',
        'Ethan rigs the entry points. Survivor cord across the gate. A simple alarm on the back fence. Nothing complicated.',
        'He keeps watch in four-hour shifts. His kids sleep soundly. That is the only thing that matters right now.',
      ],
      gearSlug: 'esee-knife',
      gearLabel: 'ESEE Fixed Blade Knife',
      gearImage: 'esee-knife.jpg',
      mood: 'critical',
      imagePrompt: 'athletic blonde man crouching alert at the corner of a rural house at night, fixed blade knife on his belt, paracord strung across a wooden gate behind him, family silhouettes warm and lit through a window, vigilant protective expression, dramatic low moonlight, photorealistic cinematic',
    },
    {
      duration: 'Week 2',
      headline: 'They stayed together.',
      narrative: [
        'Partial grid restoration starts on day nine. Not their area — but close enough for hope.',
        'The Jackery keeps the radio running. He gets a broadcast: the attack was contained. Recovery is coming.',
        'His youngest draws a picture of their house. Ethan folds it into his jacket pocket and doesn\'t say anything for a while.',
      ],
      gearSlug: 'jackery',
      gearLabel: 'Jackery Explorer 2000 Plus',
      gearImage: 'jackery.jpg',
      mood: 'hopeful',
      imagePrompt: 'athletic blonde man sitting on a porch with his wife and three children at dawn, portable power station glowing beside them charging the radio, family close together under a blanket, quiet relief on his face, warm golden post-storm morning light, photorealistic cinematic',
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

  flooding: [
    {
      duration: 'Hour 0',
      headline: 'The river is rising.',
      narrative: [
        'David has been watching the forecast for three days. When the weather radio cracks to life at 2am, he is already awake.',
        'The river is at flood stage and climbing. His basement holds six weeks of supplies.',
        'He knows something his neighbours don\'t yet: this is going to be bad, and the time to act is right now.',
      ],
      gearSlug: 'midland-radio',
      gearLabel: 'Midland ER310 Weather Alert Radio',
      gearImage: 'midland-radio.jpg',
      mood: 'tense',
      imagePrompt: 'calm weathered man in his 50s, salt-and-pepper hair, sitting at kitchen table at 2am listening to a weather alert radio, rain hammering the window behind him, single lamp light, focused composed expression, photorealistic cinematic',
    },
    {
      duration: 'Hours 12–24',
      headline: 'His neighbours weren\'t ready.',
      narrative: [
        'By morning the street is ankle-deep. He goes door to door with his headlamp, knocking, checking who is still there.',
        'The elderly couple at number twelve have nothing — no food, no plan, no way out.',
        'He tells them to pack one bag each. He will carry the rest.',
      ],
      gearSlug: 'fenix-headlamp',
      gearLabel: 'Fenix HM55R Headlamp',
      gearImage: 'fenix-headlamp.png',
      mood: 'tense',
      imagePrompt: 'weathered man in his 50s wearing a headlamp in rain gear, standing at a neighbours flooded doorstep in predawn darkness, rain-soaked street behind him, concerned but determined expression, dramatic wet street lighting, photorealistic cinematic',
    },
    {
      duration: 'Day 2',
      headline: 'The rope holds.',
      narrative: [
        'The water is waist-deep by midday. The Survivor Cord is tied to a lamp post at one end and his belt at the other.',
        'He guides the couple from their porch to higher ground, one careful step at a time.',
        'Nobody panics. That is his job — to make sure nobody panics.',
      ],
      gearSlug: 'rope',
      gearLabel: 'Titan Survivor Cord',
      gearImage: 'rope.jpg',
      mood: 'critical',
      imagePrompt: 'stocky weathered man in his 50s waist-deep in brown floodwater, one hand gripping a safety rope tied to a lamp post, guiding an elderly woman across, overcast dramatic daylight, determined heroic expression, photorealistic cinematic',
    },
    {
      duration: 'Day 3',
      headline: 'Water for everyone.',
      narrative: [
        'The community has gathered at the old community hall on the hill. Twelve people, three dogs, one generator.',
        'The tap water has been contaminated since yesterday. He passes the LifeStraw along the table.',
        'Nobody goes thirsty. That is also his job.',
      ],
      gearSlug: 'lifestraw',
      gearLabel: 'LifeStraw Personal Water Filter',
      gearImage: 'lifestraw.jpg',
      mood: 'critical',
      imagePrompt: 'weathered man in his 50s at a community hall table, handing a LifeStraw water filter to a young mother, group of neighbours seated around him, overcast light through high windows, calm capable expression, photorealistic cinematic',
    },
    {
      duration: 'Day 4',
      headline: 'Getting word out.',
      narrative: [
        'The EcoFlow powers the weather radio, three phone charges, and a lamp. All at once.',
        'He gets through to emergency services. They know where they are now. Help is coming.',
        'He doesn\'t say "I told you so." He just makes coffee and hands it around.',
      ],
      gearSlug: 'ecoflow',
      gearLabel: 'EcoFlow Delta 3 Max Power Station',
      gearImage: 'ecoflow.jpg',
      mood: 'hopeful',
      imagePrompt: 'weathered man in his 50s at a makeshift command station, EcoFlow power station charging multiple phones, neighbours clustered around, one talking on a phone with relief on her face, dramatic window light, photorealistic cinematic',
    },
    {
      duration: 'Week 2',
      headline: 'He didn\'t wait for help.',
      narrative: [
        'The water has receded. The street looks like a different world — mud, debris, silence.',
        'His neighbours are all accounted for. Twelve people who would have been stranded alone made it through together.',
        'He clips the Leatherman to his belt and gets to work.',
      ],
      gearSlug: 'leatherman',
      gearLabel: 'Leatherman Multi-tool',
      gearImage: 'leatherman.jpg',
      mood: 'hopeful',
      imagePrompt: 'weathered man in his 50s standing on a flood-damaged street in morning sun, neighbours working together clearing debris behind him, small satisfied smile, golden post-storm light, photorealistic cinematic',
    },
  ],

  virus: [
    {
      duration: 'Week 1',
      headline: 'The shelves go bare.',
      narrative: [
        'It starts with one empty shelf in the pharmacy. Then three. Then the whole row.',
        'Sara notices before anyone else does. She\'s been watching the supply chain reports for a week.',
        'She goes home and starts counting. Then she makes a list. Then she acts.',
      ],
      gearSlug: 'lifestraw-peak-squeeze',
      gearLabel: 'LifeStraw Personal Water Filter',
      gearImage: 'lifestraw.jpg',
      mood: 'tense',
      imagePrompt: 'confident composed woman in her early 30s, dark hair, practical clothing, standing in an empty pharmacy aisle studying nearly bare shelves, other customers visible panic-buying in background, calm determined expression, photorealistic cinematic, shallow depth of field',
    },
    {
      duration: 'Week 2–4',
      headline: 'Schools close.',
      narrative: [
        'By week three the schools are shut and her sister\'s kids are at Sara\'s kitchen table doing homework.',
        'She puts on the respirator before the pharmacy run. A neighbour asks where she got it. She orders one for him too.',
        'She is not afraid. She is two weeks ahead.',
      ],
      gearSlug: '3m-6502ql-respirator',
      gearLabel: '3M 6502QL Respirator + P100 Filters',
      mood: 'tense',
      imagePrompt: 'composed young woman in her early 30s wearing a professional respirator mask and practical jacket, walking through a quiet residential street, children visible through a house window behind her, grey overcast daylight, calm and purposeful expression, photorealistic cinematic',
    },
    {
      duration: 'Month 1–3',
      headline: 'Month two.',
      narrative: [
        'The medical system is saturated. Sara\'s household is not in it. That is by design.',
        'The first aid kit is stocked. The water is filtered. Her parents haven\'t needed to leave in five weeks.',
        'Her phone doesn\'t stop. Friends, her sister, her old flatmate. She talks them all through it.',
      ],
      gearSlug: 'scherber-ifak',
      gearLabel: 'First Aid Kit',
      gearImage: 'first-aid-kit.jpg',
      mood: 'critical',
      imagePrompt: 'capable young woman in her 30s at an organised kitchen table, open first aid kit in front of her, on the phone guiding someone, elderly parents and young children visible comfortable in the background, warm interior lamp light, calm in control expression, photorealistic cinematic',
    },
    {
      duration: 'Month 3+',
      headline: 'She didn\'t panic.',
      narrative: [
        'Normality comes back slowly. Shops fill up. Schools reopen. The outbreak becomes a footnote.',
        'Sara rotates her supplies back onto the shelf and updates her list for next time.',
        'There is always a next time. That\'s not fear. That\'s just how she thinks.',
      ],
      gearSlug: 'leatherman-wave-plus',
      gearLabel: 'Leatherman Multi-tool',
      gearImage: 'leatherman.jpg',
      mood: 'hopeful',
      imagePrompt: 'confident relaxed woman in her early 30s restocking an organised pantry, friends and family help in the background, warm natural daylight through a window, quiet satisfied smile, photorealistic cinematic',
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
      gearImage: 'fenix-headlamp.png',
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
      gearImage: 'jackery.jpg',
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
      gearImage: 'midland-radio.jpg',
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
      gearImage: 'daypack.jpg',
      mood: 'hopeful',
    },
  ],
}
