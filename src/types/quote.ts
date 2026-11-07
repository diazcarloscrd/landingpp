export type ServiceType =
  | "landing"
  | "ecommerce"
  | "crm"
  | "turnos"
  | "cotizador"
  | "rediseno"
  | "other";

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
  projectDetails?: Record<string, any>;
  consent: boolean;
  honeypot?: string; // Campo trampa anti-spam
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
  service_type: string;
  project_details: Record<string, any>;
  message: string;
  budget_range: string | null;
  timeline: string | null;
  status: "new" | "reviewing" | "contacted" | "quoted" | "won" | "archived";
  source: string;
  consent: boolean;
  consent_at: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}
