/**
 * Configuración centralizada de marca y datos comerciales de CDByte
 * Permite modificar nombre, datos de contacto, enlaces y textos desde una única fuente de verdad.
 * Cumple con la Regla 02 y Regla 03.
 */

export const WHATSAPP_NUMBER = "5492915782848";

export function getWhatsAppLink(customMessage?: string): string {
  const defaultMsg =
    "Hola CDByte, quiero consultar por el desarrollo de un proyecto digital para mi negocio.";
  const text = encodeURIComponent(customMessage || defaultMsg);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

export const siteConfig = {
  // Identidad oficial de marca
  name: "CDByte",
  tagline: "Desarrollo Ágil de Software, E-Commerce y Webs Comerciales",
  description:
    "En CDByte desarrollamos soluciones digitales a medida de alto impacto: sistemas CRM, tiendas online e-commerce, turneros web, cotizadores interactivos y landing pages que convierten visitantes en clientes.",
  legalName: "CDByte Soluciones Digitales",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://landingpp.vercel.app",

  // Canales de contacto directo configurados
  contact: {
    email: "diazcarloscrd@gmail.com",
    phone: "+54 9 291 578-2848",
    phoneDisplay: "291 578-2848",
    whatsappNumber: WHATSAPP_NUMBER,
    whatsappUrl: getWhatsAppLink(),
    location: "Argentina (Atención remota directa 1 a 1 en todo el país y exterior)",
    businessHours: "Lunes a Viernes de 9:00 a 19:00 hs",
  },

  // Enlaces de navegación rápida
  nav: [
    { label: "Proyectos & Demos", href: "#demos" },
    { label: "Servicios", href: "#servicios" },
    { label: "Cotizador Rápido", href: "#calculadora" },
    { label: "Rubros", href: "#rubros" },
    { label: "Mantenimiento", href: "#mantenimiento" },
    { label: "FAQ", href: "#faq" },
  ],

  // Redes sociales configurables
  social: {
    github: "https://github.com/diazcarloscrd",
  },

  // Catálogo completo de soluciones de CDByte
  services: [
    {
      id: "landing",
      name: "Landing Pages & Webs Profesionales",
      shortTitle: "Landing Pages",
      badge: "Conversión Directa",
      summary:
        "Páginas de alta velocidad y diseño a medida creadas para posicionar tu marca, captar prospectos y convertir visitas en consultas reales por WhatsApp o formulario.",
      targetAudience:
        "Abogados, contadores, médicos, arquitectos, consultores, constructoras y empresas de servicios.",
      keyFeatures: [
        "Diseño UI/UX exclusivo orientado a conversión",
        "Optimización móvil total y carga instantánea",
        "Conexión directa con WhatsApp y base de datos",
        "Estructura persuasiva (servicios, proceso, FAQ)",
        "SEO técnico optimizado para Google",
      ],
      icon: "layout",
    },
    {
      id: "ecommerce",
      name: "E-Commerce & Tiendas Online",
      shortTitle: "E-Commerce",
      badge: "Ventas 24/7",
      summary:
        "Tiendas virtuales personalizadas adaptadas al flujo de tu negocio: catálogo dinámico, carritos de compra, checkout automatizado y medios de pago.",
      targetAudience:
        "Comercios minoristas, locales gastronómicos, indumentaria, distribuidoras y marcas con venta directa.",
      keyFeatures: [
        "Catálogo administrable con variantes, talles y stock",
        "Pasarelas de cobro (Mercado Pago, tarjetas, transferencia)",
        "Módulos para delivery, retiro o pedido directo a WhatsApp",
        "Panel intuitivo para seguimiento de órdenes y clientes",
        "100% tuyo: sin pagar comisiones por cada venta",
      ],
      icon: "shopping-cart",
    },
    {
      id: "crm",
      name: "Sistemas CRM & Software de Gestión",
      shortTitle: "CRM & Gestión",
      badge: "Control Operativo",
      summary:
        "Plataformas a medida para centralizar clientes, pedidos, inventario, obras y métricas operativas. Un sistema que se adapta a tu forma de trabajar.",
      targetAudience:
        "Constructoras, PYMES, inmobiliarias, estudios, talleres y empresas con procesos propios.",
      keyFeatures: [
        "Panel de control centralizado (Dashboard en vivo)",
        "Seguimiento de presupuestos, clientes y cobranzas",
        "Control de stock, insumos o etapas de obra",
        "Roles de acceso y alertas operativas",
        "Reportes y métricas clave en tiempo real",
      ],
      icon: "layers",
    },
    {
      id: "turnos",
      name: "Sistemas de Turnos & Reservas Online",
      shortTitle: "Turnos & Reservas",
      badge: "Agenda Automática",
      summary:
        "Plataformas de agendamiento online 24/7 para que tus clientes reserven horarios disponibles sin idas y vueltas de mensajes, con opción de cobro de seña.",
      targetAudience:
        "Consultorios médicos, clínicas, centros de estética, barberías, gimnasios, complejos deportivos y asesores.",
      keyFeatures: [
        "Calendario inteligente con disponibilidad en tiempo real",
        "Bloqueo automático de horarios y gestión por profesional",
        "Integración opcional de pago de seña con Mercado Pago",
        "Confirmación y recordatorios directos por WhatsApp/Email",
        "Panel administrativo de agenda diaria y semanal",
      ],
      icon: "calendar",
    },
    {
      id: "cotizador",
      name: "Cotizadores & Calculadoras Interactivas",
      shortTitle: "Cotizadores Web",
      badge: "Captación Calificada",
      summary:
        "Herramientas interactivas donde el visitante calcula el costo aproximado de su pedido o servicio en segundos y te envía el presupuesto listo por WhatsApp.",
      targetAudience:
        "Constructoras, imprentas, fábricas de aberturas, empresas de limpieza, logística, seguros y servicios a medida.",
      keyFeatures: [
        "Fórmulas y variables configurables según tu negocio",
        "Experiencia paso a paso intuitiva desde el celular",
        "Resumen instantáneo con envío directo a tu WhatsApp",
        "Captura automática de los datos del cliente interesado",
        "Ahorro de horas respondiendo presupuestos repetitivos",
      ],
      icon: "calculator",
    },
    {
      id: "rediseno",
      name: "Rediseño Express & Optimización Web",
      shortTitle: "Rediseño Express",
      badge: "Alta Velocidad",
      summary:
        "Transformamos tu página web antigua, lenta o desactualizada en una plataforma moderna, segura y ultra rápida que vuelve a generar confianza y ventas.",
      targetAudience:
        "Empresas con sitios viejos en WordPress/Wix, webs que no se ven bien en celular o que demoran en cargar.",
      keyFeatures: [
        "Renovación visual completa a estándar moderno",
        "Migración a tecnología Next.js de carga instantánea",
        "Adaptación 100% responsive para teléfonos móviles",
        "Mejora de posicionamiento SEO y seguridad técnica",
        "Integración de nuevos embudos de contacto y WhatsApp",
      ],
      icon: "zap",
    },
  ],
};
