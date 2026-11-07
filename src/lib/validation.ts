/**
 * Sanitización y validación estricta en servidor según Regla 02 y 03
 */
import { QuoteFormData } from "@/types/quote";

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
  sanitizedData?: Partial<QuoteFormData>;
}

export function validateQuoteForm(data: any): ValidationResult {
  const errors: Record<string, string> = {};

  // 1. Anti-spam honeypot
  if (data.honeypot && data.honeypot.trim() !== "") {
    return { isValid: false, errors: { bot: "Envío no autorizado detectado." } };
  }

  // 2. Nombre
  if (!data.name || typeof data.name !== "string" || data.name.trim().length < 3) {
    errors.name = "Por favor ingresá tu nombre completo (mínimo 3 caracteres).";
  } else if (data.name.length > 120) {
    errors.name = "El nombre no puede superar los 120 caracteres.";
  }

  // 3. Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || typeof data.email !== "string" || !emailRegex.test(data.email.trim())) {
    errors.email = "Ingresá una dirección de correo electrónico válida.";
  } else if (data.email.length > 150) {
    errors.email = "El correo no puede exceder los 150 caracteres.";
  }

  // 4. Servicio de interés
  const validServices = [
    "landing",
    "ecommerce",
    "crm",
    "turnos",
    "cotizador",
    "rediseno",
    "other",
  ];
  if (!data.serviceType || !validServices.includes(data.serviceType)) {
    errors.serviceType = "Seleccioná el tipo de servicio que necesitás.";
  }

  // 5. Mensaje / Descripción
  if (!data.message || typeof data.message !== "string" || data.message.trim().length < 15) {
    errors.message = "Por favor describí tu necesidad o proyecto con al menos 15 caracteres.";
  } else if (data.message.length > 3000) {
    errors.message = "El mensaje no debe superar los 3000 caracteres.";
  }

  // 6. Consentimiento
  if (data.consent !== true) {
    errors.consent = "Es necesario aceptar los términos de contacto para enviar tu solicitud.";
  }

  if (Object.keys(errors).length > 0) {
    return { isValid: false, errors };
  }

  // Limpieza y sanitización
  const sanitized: Partial<QuoteFormData> = {
    name: data.name.trim().replace(/[<>]/g, ""),
    email: data.email.trim().toLowerCase(),
    phone: data.phone ? String(data.phone).trim().replace(/[<>]/g, "").slice(0, 40) : undefined,
    businessName: data.businessName ? String(data.businessName).trim().replace(/[<>]/g, "").slice(0, 100) : undefined,
    industry: data.industry ? String(data.industry).trim().replace(/[<>]/g, "").slice(0, 80) : undefined,
    serviceType: data.serviceType,
    message: data.message.trim().replace(/[<>]/g, ""),
    budgetRange: data.budgetRange ? String(data.budgetRange).slice(0, 80) : undefined,
    timeline: data.timeline ? String(data.timeline).slice(0, 80) : undefined,
    projectDetails: typeof data.projectDetails === "object" ? data.projectDetails : {},
    consent: true,
  };

  return { isValid: true, errors: {}, sanitizedData: sanitized };
}

