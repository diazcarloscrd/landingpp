export const VALID_SERVICES = [
  "crm",
  "ecommerce",
  "landing",
  "turnos",
  "cotizador",
  "rediseno",
  "other",
] as const;

export type ServiceType = (typeof VALID_SERVICES)[number];

export const VALID_BUDGET_RANGES = [
  "flexible",
  "hasta-500k",
  "500k-1m",
  "1m-2.5m",
  "mas-2.5m",
  "a-convenir",
] as const;

export type BudgetRange = (typeof VALID_BUDGET_RANGES)[number];

export const VALID_TIMELINES = [
  "urgente",
  "1-2-semanas",
  "un-mes",
  "flexible",
] as const;

export type TimelineType = (typeof VALID_TIMELINES)[number];

export interface QuoteFormData {
  name: string;
  email: string;
  phone?: string;
  businessName?: string;
  industry?: string;
  serviceType: ServiceType;
  message: string;
  budgetRange?: string;
  timeline?: string;
  projectDetails?: Record<string, string | number | boolean | string[]>;
  consent: boolean;
  honeypot?: string;
  renderTimestamp?: number;
}

export interface LeadRecord {
  id: string;
  created_at: string;
  updated_at: string;
  name: string;
  email: string;
  phone: string | null;
  business_name: string | null;
  industry: string | null;
  service_type: ServiceType;
  project_details: Record<string, unknown>;
  message: string;
  budget_range: string | null;
  timeline: string | null;
  status: "new" | "reviewing" | "contacted" | "quoted" | "won" | "archived";
  source: string;
  consent: boolean;
  consent_at: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
  errors?: Record<string, string>;
}
