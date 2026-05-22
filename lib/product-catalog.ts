export interface CatalogItem {
  slug: string
  name: string
  category: string
  image: string | null
  url: string
  scenarios: string[]
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
  },
  // Medical
  {
    slug: 'first-aid-kit',
    name: 'First Aid Kit',
    category: 'Medical',
    image: '/products/first-aid-kit.jpg',
    url: 'https://www.faire.com/product/p_ym29hca3b8',
    scenarios: ['all'],
  },
  // Light
  {
    slug: 'fenix-headlamp',
    name: 'Fenix HM55R Headlamp',
    category: 'Light',
    image: '/products/fenix-headlamp.png',
    url: 'https://www.fenixlighting.com/products/hm55r-rechargeable-headlamp',
    scenarios: ['all'],
  },
  // Oil lamp
  {
    slug: 'oil-lamp',
    name: 'Feuerhand Oil Lamp',
    category: 'Light',
    image: '/products/oil-lamp.jpg',
    url: 'https://www.amazon.com/Feuerhand-PM-276-7016-Galvanized-Lantern/dp/B07GSX8PZJ',
    scenarios: ['general', 'drone'],
  },
  // Communication
  {
    slug: 'midland-radio',
    name: 'Midland ER310 Weather Alert Radio',
    category: 'Communication',
    image: '/products/midland-radio.jpg',
    url: 'https://www.gunsholstersandgear.com/survival/review-midland-er310-weather-alert-radio/',
    scenarios: ['all'],
  },
  // Power
  {
    slug: 'jackery',
    name: 'Jackery Explorer 2000 Plus',
    category: 'Power',
    image: '/products/jackery.jpg',
    url: 'https://www.hampshiregenerators.co.uk/generators/portable-power-stations/jackery-explorer-2000-plus-jackery-battery-pack-2000-plus-solarsaga-200w/',
    scenarios: ['general', 'flooding', 'drone'],
  },
  {
    slug: 'ecoflow',
    name: 'EcoFlow Delta 3 Max Plus (2048Wh)',
    category: 'Power',
    image: '/products/ecoflow.jpg',
    url: 'https://www.proshop.dk/Power-Station/EcoFlow-Delta-3-Max-Plus-2048Wh/3419249',
    scenarios: ['flooding', 'drone', 'nuclear'],
  },
  // Packs
  {
    slug: 'daypack',
    name: 'Mystery Ranch 2-Day Assault Pack',
    category: 'Packs & Bags',
    image: '/products/daypack.jpg',
    url: 'https://www.opticsplanet.com/mystery-ranch-2-day-assault-backpack.html',
    scenarios: ['all'],
  },
  // Knives & Tools
  {
    slug: 'esee-knife',
    name: 'ESEE Fixed Blade Knife',
    category: 'Knives & Tools',
    image: '/products/esee-knife.jpg',
    url: 'https://northernbush.com/review-esee-4-esee-5-esee-6-knives/',
    scenarios: ['general', 'flooding', 'drone'],
  },
  {
    slug: 'leatherman',
    name: 'Leatherman Multi-tool',
    category: 'Knives & Tools',
    image: '/products/leatherman.jpg',
    url: 'https://bladereviews.com/leatherman-charge-tti-review/',
    scenarios: ['all'],
  },
  // Fire
  {
    slug: 'fire-starter',
    name: 'Überleben Zünden Pro Fire Starter',
    category: 'Fire',
    image: '/products/fire-starter.jpg',
    url: 'https://www.uberleben.co/products/zunden-pro',
    scenarios: ['general', 'flooding', 'drone', 'nuclear'],
  },
  // Cordage
  {
    slug: 'rope',
    name: 'Titan Survivor Cord',
    category: 'Cordage',
    image: '/products/rope.jpg',
    url: 'https://www.titansurvival.com/products/forest-camo-survivorcord',
    scenarios: ['flooding', 'general', 'drone'],
  },
  // Fuel & Storage
  {
    slug: 'jerry-can',
    name: 'Wavian Steel Jerry Can',
    category: 'Fuel & Storage',
    image: '/products/jerry-can.jpg',
    url: 'https://www.amazon.com/Wavian-Jerry-Steel-Holder-Bundle/dp/B0F7M2CV1R',
    scenarios: ['flooding', 'general', 'drone'],
  },
  // Trapping & Food
  {
    slug: 'snares',
    name: 'Vigilant Trails Pocket Snares',
    category: 'Trapping & Food',
    image: '/products/snares.jpg',
    url: 'https://carbonmasks.com/product/vigilant-trails-pocket-survival-snares/',
    scenarios: ['general', 'drone'],
  },
]

export const CATEGORIES = [...new Set(CATALOG.map((item) => item.category))]
