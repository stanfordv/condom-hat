-- Seed products
-- All prices in cents. stripe_price_id to be filled after creating Stripe products.

insert into products (slug, name, scenario, tier, price_cents, why) values

-- Core 10 — Essential tier
('lifestraw-peak-squeeze',   'LifeStraw Peak Squeeze',              array['virus','nuclear','drone','general'], 'essential',  3995, 'Removes 99.999% of bacteria and parasites. Squeeze-bottle format works from any water source.'),
('uberleben-zunden',         'Überleben Zünden Fire Starter',       array['virus','nuclear','drone','general'], 'essential',  2495, 'Hardwood handle, 20,000 strikes, paracord lanyard. The only fire starter you need.'),
('fenix-hm55r',              'Fenix HM55R Renegade Headlamp',       array['virus','nuclear','drone','general'], 'essential',  7995, '1500 lm, rechargeable, IP68 waterproof. Works as a handheld or headlamp.'),
('midland-er310',            'Midland ER310 Emergency Radio',       array['virus','nuclear','drone','general'], 'essential',  5995, 'Weather-alert, solar/crank/USB charging. Receives NOAA broadcasts when all else fails.'),
('scherber-ifak',            'Scherber Premium IFAK',               array['virus','nuclear','drone','general'], 'essential',  6995, 'Genuine NAR components. Tourniquet, chest seal, hemostatic gauze — the real kit.'),
('titan-survivorcord',       'Titan SurvivorCord 100ft',            array['virus','nuclear','drone','general'], 'essential',  1495, '7-strand 550 paracord with inner fishing line, fire tinder, and waxed jute. Multi-tool in a cord.'),

-- Core 10 — Recommended tier
('fallkniven-s1',            'Fallkniven S1 Fixed Blade',           array['virus','nuclear','drone','general'], 'recommended', 17995, 'VG-10 steel, convex grind, Thermorun handle. The benchmark survival knife.'),
('leatherman-wave-plus',     'Leatherman Wave+',                    array['virus','nuclear','drone','general'], 'recommended', 10995, 'USA-made, lifetime warranty, 18 tools. The only multi-tool worth carrying.'),
('mystery-ranch-3day',       'Mystery Ranch 3-Day Assault Pack',    array['virus','nuclear','drone','general'], 'recommended', 29500, 'Bombproof build, MOLLE, 3-zip lid. The hipster prepper bug-out bag.'),

-- Core 10 — Premium tier
('jackery-300-plus',         'Jackery Explorer 300 Plus + SolarSaga 100W', array['virus','nuclear','drone','general'], 'premium', 59900, 'LiFePO4 battery (10yr lifespan), 288Wh, 60W fast charge. The only solar kit that lasts a decade.'),

-- Extended — General / Drone
('vigilant-snare-kit',       'Vigilant Trails Small Game Snare Kit',  array['drone','general'],               'recommended',  2995, 'Aircraft cable, USA-made. Passive protein source when supply chains fail.'),
('rule-wasteland-fishing',   'Rule the Wasteland Deluxe Fishing Kit', array['drone','general'],               'recommended',  3495, 'Aluminium tin, 80m of line, 38 hooks. Compact fishing capability for any water.'),
('feuerhand-276',            'Feuerhand Baby Special 276 Lantern',    array['nuclear','drone','general'],     'recommended',  5995, 'German-made since 1931. Burns kerosene 20+ hours per fill. A lifetime lantern.'),
('wavian-nato-jerrican',     'Wavian NATO Jerry Can 5L (Blue)',        array['nuclear','drone','general'],     'recommended',  7995, 'Blue = kerosene colour code. Airtight, NATO-spec. Pairs with Feuerhand as a bundle.'),
('safe-t-proof-straps',      'SAFE-T-PROOF Furniture Anchor Straps',  array['general'],                      'essential',    2995, '3M-tested, rated to 2,400 lbs. Prevents topple injuries in earthquakes — easy to install.'),
('quakehold-museum-putty',   'QuakeHold! Museum Putty 1lb',           array['general'],                      'essential',     995, 'Reusable, removable. Secures small objects on shelves. High-margin, saves breakage.'),

-- Nuclear kit — Essential
('iosat-ki-tablets',         'iOSAT KI Tablets 130mg (14-pack)',    array['nuclear'],                         'essential',   1495, 'FDA-approved thyroid protection. Longest shelf life available. One per person per event.'),
('radtriage-50',             'RADTriage 50 Dosimeter Badge',        array['nuclear'],                         'essential',   2495, 'Passive radiation badge. No battery needed. Instant visual read. One per person.'),
('3m-6502ql-respirator',     '3M 6502QL + P100 Filters (2097)',     array['nuclear','virus'],                 'essential',   3495, '99.97% particle filtration. Quick-latch design. Fits most face sizes. Reusable.'),
('dupont-tyvek-coveralls',   'DuPont Tyvek 400 Coveralls (5-pack)', array['nuclear','virus'],                 'essential',   3995, 'Single-use, disposable outside shelter. Prevents contamination transfer indoors.'),

-- Nuclear kit — Recommended
('gq-gmc800-geiger',         'GQ GMC-800 Geiger Counter',           array['nuclear'],                         'recommended', 14995, 'USB rechargeable, data logging, wide isotope range. Store in Faraday bag when not in use.'),
('mission-darkness-faraday', 'Mission Darkness Dry Shield Faraday Bag 40L', array['nuclear','drone'],        'recommended', 11995, 'Military-grade TitanRF fabric. Blocks all RF. Protects Geiger counter and radio from EMP.'),
('duck-shelter-tape-poly',   'Duck Brand Tape + 4-mil Poly Sheeting', array['nuclear'],                       'recommended',  2495, 'Pre-cut to door and window sizes before an event. Seals fallout shelter in minutes.'),

-- Nuclear kit — Premium
('galvanized-ammo-can',      'Galvanized Steel Ammo Can (50 cal)',   array['nuclear','drone'],                'premium',     2995, 'Static EMP storage for Geiger counter, radio, and electronics when not in active use.');
