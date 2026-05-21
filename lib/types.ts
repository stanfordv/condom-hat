export type Scenario = 'virus' | 'nuclear' | 'drone' | 'general'
export type Tier = 'essential' | 'recommended' | 'premium'
export type BudgetTier = 'starter' | 'mid' | 'full'
export type ExistingLevel = 'none' | 'some' | 'good'
export type OrderStatus = 'pending' | 'paid' | 'fulfilled' | 'refunded'

export interface Product {
  id: string
  slug: string
  name: string
  scenario: Scenario[]
  tier: Tier
  price_cents: number
  stripe_price_id: string | null
  why: string | null
  in_stock: boolean
}

export interface ThreatLevel {
  id: string
  level: 1 | 2 | 3 | 4 | 5
  scenario: Scenario | null
  message: string | null
  set_by: string | null
  set_at: string
  is_active: boolean
}

export interface KitConfiguration {
  id: string
  scenario: Scenario
  household_size: 1 | 2 | 4 | 6
  budget_tier: BudgetTier
  existing_level: ExistingLevel
  product_ids: string[]
  stripe_session_id: string | null
  created_at: string
}

export interface Order {
  id: string
  stripe_session_id: string
  kit_config_id: string | null
  email: string | null
  status: OrderStatus
  total_cents: number | null
  threat_level_at_order: number | null
  created_at: string
}

export interface KitBuilderInput {
  scenario: Scenario
  householdSize: 1 | 2 | 4 | 6
  existingLevel: ExistingLevel
  budgetTier: BudgetTier
}
