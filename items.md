# Product Catalog

Structured list of items for sale on CondomHat. Each item has a slug (used in code), product image in `/public/products/`, and the source URL it was pulled from.

---

## Water

### LifeStraw Personal Filter
- **slug:** `lifestraw`
- **image:** `/products/lifestraw.jpg`
- **url:** https://eu.lifestraw.com/
- **scenarios:** all

---

## Knives & Cutting

### ESEE Fixed Blade Knife
- **slug:** `esee-knife`
- **image:** `/products/esee-knife.jpg`
- **url:** https://northernbush.com/review-esee-4-esee-5-esee-6-knives/
- **scenarios:** general, flooding, drone

### Leatherman Multi-tool
- **slug:** `leatherman`
- **image:** `/products/leatherman.jpg`
- **url:** https://bladereviews.com/leatherman-charge-tti-review/
- **scenarios:** all

---

## Fire

### Überleben Zünden Pro Fire Starter
- **slug:** `fire-starter`
- **image:** `/products/fire-starter.jpg`
- **url:** https://www.uberleben.co/products/zunden-pro
- **scenarios:** general, flooding, drone, nuclear

---

## Packs & Bags

### Mystery Ranch 2-Day Assault Pack
- **slug:** `daypack`
- **image:** `/products/daypack.jpg`
- **url:** https://www.opticsplanet.com/mystery-ranch-2-day-assault-backpack.html
- **scenarios:** all

---

## Power

### Jackery Explorer 2000 Plus
- **slug:** `jackery`
- **image:** `/products/jackery.jpg`
- **url:** https://www.hampshiregenerators.co.uk/generators/portable-power-stations/jackery-explorer-2000-plus-jackery-battery-pack-2000-plus-solarsaga-200w/
- **scenarios:** general, flooding, drone

### EcoFlow Delta 3 Max Plus (2048Wh)
- **slug:** `ecoflow`
- **image:** `/products/ecoflow.jpg`
- **url:** https://www.proshop.dk/Power-Station/EcoFlow-Delta-3-Max-Plus-2048Wh/3419249
- **scenarios:** flooding, drone, nuclear

---

## Medical

### First Aid Kit
- **slug:** `first-aid-kit`
- **image:** `/products/first-aid-kit.jpg`
- **url:** https://www.faire.com/product/p_ym29hca3b8
- **scenarios:** all

---

## Light

### Fenix HM55R Headlamp
- **slug:** `fenix-headlamp`
- **image:** `/products/fenix-headlamp.png`
- **url:** https://www.fenixlighting.com/products/hm55r-rechargeable-headlamp
- **scenarios:** all

---

## Communication

### Midland ER310 Weather Alert Radio
- **slug:** `midland-radio`
- **image:** `/products/midland-radio.jpg`
- **url:** https://www.gunsholstersandgear.com/survival/review-midland-er310-weather-alert-radio/
- **scenarios:** all

---

## Cordage & Rope

### Titan Survivor Cord
- **slug:** `rope`
- **image:** `/products/rope.jpg`
- **url:** https://www.titansurvival.com/products/forest-camo-survivorcord
- **scenarios:** flooding, general, drone

---

## Trapping & Food

### Vigilant Trails Pocket Snares
- **slug:** `snares`
- **image:** `/products/snares.jpg`
- **url:** https://carbonmasks.com/product/vigilant-trails-pocket-survival-snares/
- **scenarios:** general, drone

### Fishing Survival Kit
- **slug:** `fishing-gear`
- **image:** *(pending)*
- **url:** *(to be added)*
- **scenarios:** general, flooding

---

## Lighting

### Feuerhand Oil Lamp
- **slug:** `oil-lamp`
- **image:** `/products/oil-lamp.jpg`
- **url:** https://www.amazon.com/Feuerhand-PM-276-7016-Galvanized-Lantern/dp/B07GSX8PZJ
- **scenarios:** general, drone

---

## Fuel & Storage

### Wavian Steel Jerry Can
- **slug:** `jerry-can`
- **image:** `/products/jerry-can.jpg`
- **url:** https://www.amazon.com/Wavian-Jerry-Steel-Holder-Bundle/dp/B0F7M2CV1R
- **scenarios:** flooding, general, drone

---

## Adding New Items

When adding a new item:
1. Add entry here with all fields
2. Drop product image in `/public/products/{slug}.jpg`
3. Add `gearSlug` reference in `/lib/story-scenes.ts` for relevant scene
4. Add product record in Supabase with matching slug
