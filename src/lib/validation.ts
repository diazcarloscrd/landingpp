import {
  QuoteFormData,
  ServiceType,
  VALID_SERVICES,
  VALID_BUDGET_RANGES,
  VALID_TIMELINES,
} from "@/types/quote";

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
  sanitizedData?: QuoteFormData;
}

const MINIMUM_SUBMISSION_TIME_MS = 2500; // Mínimo 2.5 segundos para detectar envíos automáticos de bots

export function validateQuoteForm(input: unknown): ValidationResult {
  const errors: Record<string, string> = {};

  if (!input || typeof input !== "object" || Array.isArray(input)) {
    return {
      isValid: false,
      errors: { form: "Cuerpo de solicitud inválido." },
    };
  }

  const data = input as Record<string, unknown>;

  // 1. Anti-spam Honeypot (campo trampa)
  if (typeof data.honeypot === "string" && data.honeypot.trim() !== "") {
    return {
      isValid: false,
      errors: { bot: "Envío no autorizado detectado." },
    };
  }

  // 2. Anti-spam de tiempo de llenado (renderTimestamp)
  if (typeof data.renderTimestamp === "number") {
    const elapsed = Date.now() - data.renderTimestamp;
    if (elapsed < MINIMUM_SUBMISSION_TIME_MS) {
      return {
        isValid: false,
        errors: { bot: "El formulario fue completado demasiado rápido." },
      };
    }
    // Si tiene más de 48 hs de antigüedad, solicitar recargar
    if (elapsed > 48 * 60 * 60 * 1000) {
      return {
        isValid: false,
        errors: { form: "La sesión del formulario expiró. Por favor recargá la página." },
      };
    }
  }

  // 3. Nombre
  const name = typeof data.name === "string" ? data.name.trim() : "";
  if (!name || name.length < 3) {
    errors.name = "Por favor ingresá tu nombre completo (mínimo 3 caracteres).";
  } else if (name.length > 120) {
    errors.name = "El nombre no puede superar los 120 caracteres.";
  }

  // 4. Email
  const email = typeof data.email === "string" ? data.email.trim().toLowerCase() : "";
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    errors.email = "Ingresá una dirección de correo electrónico válida.";
  } else if (email.length > 150) {
    errors.email = "El correo no puede exceder los 150 caracteres.";
  }

  // 5. Teléfono (opcional)
  let phone: string | undefined = undefined;
  if (typeof data.phone === "string" && data.phone.trim() !== "") {
    phone = data.phone.trim().replace(/[<>]/g, "").slice(0, 40);
  }

  // 6. Nombre de empresa / actividad (opcional)
  let businessName: string | undefined = undefined;
  if (typeof data.businessName === "string" && data.businessName.trim() !== "") {
    businessName = data.businessName.trim().replace(/[<>]/g, "").slice(0, 120);
  }

  // 7. Servicio de interés (lista blanca obligatoria)
  const serviceType = data.serviceType as ServiceType;
  if (!serviceType || !VALID_SERVICES.includes(serviceType)) {
    errors.serviceType = "Seleccioná un tipo de servicio válido de la lista.";
  }

  // 8. Mensaje / Descripción de la necesidad
  const message = typeof data.message === "string" ? data.message.trim() : "";
  if (!message || message.length < 15) {
    errors.message = "Por favor describí tu necesidad o proyecto con al menos 15 caracteres.";
  } else if (message.length > 3000) {
    errors.message = "El mensaje no debe superar los 3000 caracteres.";
  }

  // 9. Rango de presupuesto (lista blanca opcional)
  let budgetRange: string = "flexible";
  if (typeof data.budgetRange === "string" && data.budgetRange.trim() !== "") {
    const rawBudget = data.budgetRange.trim();
    if ((VALID_BUDGET_RANGES as readonly string[]).includes(rawBudget)) {
      budgetRange = rawBudget;
    }
  }

  // 10. Plazo estimado (lista blanca opcional)
  let timeline: string = "flexible";
  if (typeof data.timeline === "string" && data.timeline.trim() !== "") {
    const rawTimeline = data.timeline.trim();
    if ((VALID_TIMELINES as readonly string[]).includes(rawTimeline)) {
      timeline = rawTimeline;
    }
  }

  // 11. Consentimiento
  if (data.consent !== true) {
    errors.consent = "Es necesario aceptar los términos para enviar tu solicitud.";
  }

  // 12. Validación explícita de projectDetails
  const sanitizedProjectDetails: Record<string, string | number | boolean | string[]> = {};
  if (
    data.projectDetails &&
    typeof data.projectDetails === "object" &&
    !Array.isArray(data.projectDetails)
  ) {
    const entries = Object.entries(data.projectDetails as Record<string, unknown>);
    // Máximo 15 claves permitidas
    for (const [key, val] of entries.slice(0, 15)) {
      const cleanKey = key.slice(0, 40).replace(/[^a-zA-Z0-9_-]/g, "");
      if (!cleanKey) continue;

      if (typeof val === "string") {
        sanitizedProjectDetails[cleanKey] = val.slice(0, 200).replace(/[<>]/g, "");
      } else if (typeof val === "number" && !isNaN(val)) {
        sanitizedProjectDetails[cleanKey] = val;
      } else if (typeof val === "boolean") {
        sanitizedProjectDetails[cleanKey] = val;
      } else if (Array.isArray(val)) {
        sanitizedProjectDetails[cleanKey] = val
          .slice(0, 10)
          .filter((item): item is string => typeof item === "string")
          .map((item) => item.slice(0, 100).replace(/[<>]/g, ""));
      }
    }
  }

  if (Object.keys(errors).length > 0) {
    return { isValid: false, errors };
  }

  const sanitized: QuoteFormData = {
    name: name.replace(/[<>]/g, ""),
    email,
    phone,
    businessName,
    serviceType,
    message: message.replace(/[<>]/g, ""),
    budgetRange,
    timeline,
    projectDetails: sanitizedProjectDetails,
    consent: true,
  };

  return { isValid: true, errors: {}, sanitizedData: sanitized };
}
