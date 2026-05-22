export interface CatalogItem {
  slug: string
  name: string
  category: string
  image: string | null
  url: string
  scenarios: string[]
  description: string
  why: string
}

export const CATALOG: CatalogItem[] = [
  // Water
  {
    slug: 'lifestraw',
    name: 'LifeStraw Personal Filter',
    category: 'Water',
    image: '/products/lifestraw.jpg',
    url: 'https://eu.lifestraw.com/',
    scenarios: ['all'],
    description: 'Filters up to 1,000 litres of contaminated water without chemicals, batteries, or moving parts. Removes 99.999% of bacteria and parasites down to 0.2 microns.',
    why: 'When taps stop working or water sources are compromised, this is the difference between staying put and risking a supply run. Weighs 45g. No expiry date.',
  },
  // Medical
  {
    slug: 'first-aid-kit',
    name: 'First Aid Kit',
    category: 'Medical',
    image: '/products/first-aid-kit.jpg',
    url: 'https://www.faire.com/product/p_ym29hca3b8',
    scenarios: ['all'],
    description: 'Comprehensive trauma and first aid kit covering wound care, burns, fractures, and infection control. Organised into labelled sections for fast access under pressure.',
    why: 'Medical services saturate fast in a crisis. A well-stocked kit means minor injuries stay minor. This is not a plaster-and-paracetamol box — it covers real emergencies.',
  },
  // Light
  {
    slug: 'fenix-headlamp',
    name: 'Fenix HM55R Headlamp',
    category: 'Light',
    image: '/products/fenix-headlamp.png',
    url: 'https://www.fenixlighting.com/products/hm55r-rechargeable-headlamp',
    scenarios: ['all'],
    description: 'Rechargeable headlamp with up to 1,500 lumens output, red night-vision mode, and a 200-hour runtime on low. USB-C rechargeable, IPX6 waterproof.',
    why: 'Hands-free light is non-negotiable at night. The red mode preserves night vision and avoids signalling your position. Rechargeable means no dependency on batteries.',
  },
  {
    slug: 'oil-lamp',
    name: 'Feuerhand Oil Lamp',
    category: 'Light',
    image: '/products/oil-lamp.jpg',
    url: 'https://www.amazon.com/Feuerhand-PM-276-7016-Galvanized-Lantern/dp/B07GSX8PZJ',
    scenarios: ['general', 'drone'],
    description: 'German-made galvanised steel hurricane lantern. Burns standard lamp oil or paraffin for 20+ hours per fill. Wind-resistant to storm force.',
    why: 'No batteries, no charging, no failure modes. If everything electronic is dead, this still works. Has been made the same way since 1902.',
  },
  // Communication
  {
    slug: 'midland-radio',
    name: 'Midland ER310 Weather Alert Radio',
    category: 'Communication',
    image: '/products/midland-radio.jpg',
    url: 'https://www.gunsholstersandgear.com/survival/review-midland-er310-weather-alert-radio/',
    scenarios: ['all'],
    description: 'NOAA weather alert radio with hand crank, solar panel, and USB battery bank. Receives AM/FM and all 7 NOAA weather channels. SOS flashlight built in.',
    why: 'When mobile networks go down, this is how you find out what is happening. Hand crank means it works with zero infrastructure. The battery bank can charge your phone.',
  },
  // Power
  {
    slug: 'jackery',
    name: 'Jackery Explorer 2000 Plus',
    category: 'Power',
    image: '/products/jackery.jpg',
    url: 'https://www.hampshiregenerators.co.uk/generators/portable-power-stations/jackery-explorer-2000-plus-jackery-battery-pack-2000-plus-solarsaga-200w/',
    scenarios: ['general', 'flooding', 'drone'],
    description: '2,042Wh LiFePO4 power station with 3,000W AC output. Charges via solar, wall, or car. Powers fridges, medical devices, laptops, and charging banks simultaneously.',
    why: 'LiFePO4 chemistry lasts 3,000+ charge cycles versus 500 for standard lithium. This is a long-term investment in resilience, not a gadget. Solar input means indefinite runtime off-grid.',
  },
  {
    slug: 'ecoflow',
    name: 'EcoFlow Delta 3 Max Plus',
    category: 'Power',
    image: '/products/ecoflow.jpg',
    url: 'https://www.proshop.dk/Power-Station/EcoFlow-Delta-3-Max-Plus-2048Wh/3419249',
    scenarios: ['flooding', 'drone', 'nuclear'],
    description: '2,048Wh expandable power station with 2,400W AC output and 80% charge in 43 minutes via wall. Expandable to 6,144Wh with add-on batteries. X-Stream fast charging.',
    why: 'The fastest-charging large power station available. If you have a short window of grid access before going dark, 43 minutes gets you to 80%. Expandable capacity future-proofs your setup.',
  },
  // Packs
  {
    slug: 'daypack',
    name: 'Mystery Ranch 2-Day Assault Pack',
    category: 'Packs & Bags',
    image: '/products/daypack.jpg',
    url: 'https://www.opticsplanet.com/mystery-ranch-2-day-assault-backpack.html',
    scenarios: ['all'],
    description: '27L assault pack with MOLLE webbing, YKK zippers, and Mystery Ranch\'s 3-ZIP opening for full access to the main compartment. Made in the USA. Fits 2 days of supplies.',
    why: 'Built to military spec and used by special operations worldwide. The 3-ZIP opening means no digging — everything is accessible in seconds. This pack will outlast you.',
  },
  // Knives & Tools
  {
    slug: 'esee-knife',
    name: 'ESEE Fixed Blade Knife',
    category: 'Knives & Tools',
    image: '/products/esee-knife.jpg',
    url: 'https://northernbush.com/review-esee-4-esee-5-esee-6-knives/',
    scenarios: ['general', 'flooding', 'drone'],
    description: '1095 carbon steel fixed blade with a full tang and micarta handle. Proven in survival schools and carried by instructors. Comes with a lifetime guarantee — no questions asked.',
    why: '1095 carbon steel is easy to sharpen in the field with basic tools. Full tang means the blade and handle are one piece of steel — it will not break at the joint under load.',
  },
  {
    slug: 'leatherman',
    name: 'Leatherman Charge TTi',
    category: 'Knives & Tools',
    image: '/products/leatherman.jpg',
    url: 'https://bladereviews.com/leatherman-charge-tti-review/',
    scenarios: ['all'],
    description: 'Premium titanium-handled multi-tool with 19 tools including a replaceable cutting hook, saw, file, and S30V steel main blade. 25-year Leatherman guarantee.',
    why: 'S30V steel holds an edge longer than any other multi-tool blade on the market. Titanium handles keep weight down without sacrificing strength. This is the last multi-tool you will buy.',
  },
  // Fire
  {
    slug: 'fire-starter',
    name: 'Überleben Zünden Pro Fire Starter',
    category: 'Fire',
    image: '/products/fire-starter.jpg',
    url: 'https://www.uberleben.co/products/zunden-pro',
    scenarios: ['general', 'flooding', 'drone', 'nuclear'],
    description: 'High-carbon ferrocerium rod producing sparks at 3,000°C. Works when wet, in wind, and at altitude. Includes striker and built-in tinder compartment.',
    why: 'Lighters run out of fuel. Matches get wet. Ferrocerium rods work in any condition and last for thousands of strikes. Fire means warmth, water purification, and morale.',
  },
  // Cordage
  {
    slug: 'rope',
    name: 'Titan Survivor Cord',
    category: 'Cordage',
    image: '/products/rope.jpg',
    url: 'https://www.titansurvival.com/products/forest-camo-survivorcord',
    scenarios: ['flooding', 'general', 'drone'],
    description: '103lb paracord with an inner core containing fishing line, fire tinder, and a copper wire strand. 100-foot spool. MIL-C-5040H Type III rated.',
    why: 'Four tools in one cord. Rig a shelter, set a snare, start a fire, or catch a fish — all from the same spool. The copper wire can be used for repairs or improvised traps.',
  },
  // Fuel & Storage
  {
    slug: 'jerry-can',
    name: 'Wavian Steel Jerry Can',
    category: 'Fuel & Storage',
    image: '/products/jerry-can.jpg',
    url: 'https://www.amazon.com/Wavian-Jerry-Steel-Holder-Bundle/dp/B0F7M2CV1R',
    scenarios: ['flooding', 'general', 'drone'],
    description: 'NATO-spec 20L steel fuel can with locking closure and built-in spout. Approved for petrol, diesel, and water storage. Made in Europe to original WWII spec.',
    why: 'Plastic cans degrade with fuel over time and crack under UV. Steel NATO cans are airtight, stackable, and last decades. The original design that every other jerry can copies.',
  },
  // Trapping & Food
  {
    slug: 'snares',
    name: 'Vigilant Trails Pocket Snares',
    category: 'Trapping & Food',
    image: '/products/snares.jpg',
    url: 'https://carbonmasks.com/product/vigilant-trails-pocket-survival-snares/',
    scenarios: ['general', 'drone'],
    description: 'Pack of 12 stainless steel wire snares designed for small game. Preset loops, durable construction, fits in a pocket. Includes instruction card.',
    why: 'Passive food gathering requires no ammunition, no noise, and no active time. Set them at dusk, check at dawn. In a prolonged situation, protein from the land changes the calculus entirely.',
  },
]

export const CATEGORIES = [...new Set(CATALOG.map((item) => item.category))]
