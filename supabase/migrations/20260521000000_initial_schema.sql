-- Products
create table products (
  id              uuid primary key default gen_random_uuid(),
  slug            text unique not null,
  name            text not null,
  scenario        text[] not null default '{}',
  tier            text not null check (tier in ('essential', 'recommended', 'premium')),
  price_cents     integer not null default 0,
  stripe_price_id text,
  why             text,
  in_stock        boolean not null default true,
  created_at      timestamptz not null default now()
);

create index products_scenario_idx on products using gin (scenario);
create index products_tier_idx on products (tier);

-- Threat levels
create table threat_levels (
  id        uuid primary key default gen_random_uuid(),
  level     smallint not null check (level between 1 and 5),
  scenario  text check (scenario in ('virus', 'nuclear', 'drone', 'general')),
  message   text,
  set_by    text,
  set_at    timestamptz not null default now(),
  is_active boolean not null default false
);

create index threat_levels_active_idx on threat_levels (is_active) where is_active = true;

-- Insert default threat level
insert into threat_levels (level, set_by, is_active) values (1, 'system', true);

-- Kit configurations
create table kit_configurations (
  id                uuid primary key default gen_random_uuid(),
  scenario          text not null,
  household_size    smallint not null,
  budget_tier       text not null check (budget_tier in ('starter', 'mid', 'full')),
  existing_level    text not null check (existing_level in ('none', 'some', 'good')),
  product_ids       uuid[] not null default '{}',
  stripe_session_id text,
  created_at        timestamptz not null default now()
);

-- Orders
create table orders (
  id                     uuid primary key default gen_random_uuid(),
  stripe_session_id      text unique not null,
  kit_config_id          uuid references kit_configurations(id),
  email                  text,
  status                 text not null default 'pending' check (status in ('pending', 'paid', 'fulfilled', 'refunded')),
  total_cents            integer,
  threat_level_at_order  smallint,
  created_at             timestamptz not null default now()
);

create index orders_stripe_session_idx on orders (stripe_session_id);

-- RLS
alter table products enable row level security;
alter table threat_levels enable row level security;
alter table kit_configurations enable row level security;
alter table orders enable row level security;

-- Public read on products and threat_levels
create policy "products_public_read" on products for select using (true);
create policy "threat_levels_public_read" on threat_levels for select using (true);

-- kit_configurations: public insert, no read (kit builder creates configs anonymously)
create policy "kit_configurations_public_insert" on kit_configurations for insert with check (true);

-- orders: service role only (webhook uses service role key)
-- No public policies on orders
