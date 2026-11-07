/**
 * Configuración centralizada de marca y datos comerciales de NovaStudio Digital
 * Permite modificar nombre, datos de contacto, enlaces y textos sin tocar múltiples archivos.
 * Cumple con la Regla 02 y Regla 03.
 */

export const siteConfig = {
  // Marca provisional editable
  name: "NovaStudio",
  tagline: "Estudio de Desarrollo y Soluciones Digitales",
  description:
    "Desarrollamos soluciones digitales de alto impacto: CRM personalizados, tiendas online e-commerce escalables y landing pages profesionales que convierten visitantes en clientes reales.",
  legalName: "NovaStudio Digital Solutions",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://novastudio.digital",

  // Canales de contacto configurables
  contact: {
    email: "contacto@novastudio.digital",
    phone: "+54 9 11 0000-0000",
    phoneDisplay: "+54 9 11 0000-0000",
    whatsappUrl: "https://wa.me/5491100000000?text=Hola%2C%20quiero%20consultar%20por%20un%20proyecto%20para%20mi%20negocio",
    location: "Buenos Aires, Argentina (Trabajamos con clientes globales)",
    businessHours: "Lunes a Viernes de 9:00 a 19:00 hs",
  },

  // Enlaces de navegación rápida
  nav: [
    { label: "Servicios", href: "#servicios" },
    { label: "Soluciones por Rubro", href: "#rubros" },
    { label: "Demos & Interfaces", href: "#demos" },
    { label: "Cómo Trabajamos", href: "#proceso" },
    { label: "Preguntas Frecuentes", href: "#faq" },
  ],

  // Redes sociales configurables
  social: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
  },

  // Pilares comerciales
  services: [
    {
      id: "landing",
      name: "Landing Pages & Webs Profesionales",
      shortTitle: "Landing Pages",
      badge: "Conversión Directa",
      summary:
        "Páginas de alta velocidad y diseño a medida diseñadas para posicionar tu marca, captar prospectos y convertir visitas en consultas comerciales.",
      targetAudience:
        "Abogados, contadores, arquitectos, consultores, profesionales independientes, empresas de servicios y oficios.",
      keyFeatures: [
        "Diseño a medida orientado a conversión (CRO)",
        "Optimización de velocidad y SEO semántico",
        "Integración con WhatsApp y formulario a base de datos",
        "100% adaptable a celulares, tablets y PC",
        "Diseño visual de alto estándar sin plantillas genéricas",
      ],
      icon: "layout",
    },
    {
      id: "ecommerce",
      name: "E-Commerce & Tiendas Online",
      shortTitle: "E-Commerce",
      badge: "Ventas 24/7",
      summary:
        "Tiendas virtuales personalizadas adaptadas al flujo de tu negocio: catálogo dinámico, carritos de compra, checkout automatizado y pasarelas de pago.",
      targetAudience:
        "Comercios minoristas, locales gastronómicos, indumentaria, centros de estética y negocios con venta directa.",
      keyFeatures: [
        "Catálogo administrable y gestión de variantes/stock",
        "Pasarelas de cobro (Mercado Pago, tarjetas, transferencias)",
        "Módulos para delivery, retiro en tienda o pedidos a WhatsApp",
        "Panel intuitivo para seguimiento de ventas y órdenes",
        "Sin comisiones ocultas por venta",
      ],
      icon: "shopping-cart",
    },
    {
      id: "crm",
      name: "Sistemas CRM & Software de Gestión",
      shortTitle: "CRM & Gestión",
      badge: "Solución Integral",
      summary:
        "Plataformas a medida para centralizar clientes, pedidos, inventario, tareas y métricas operativas. Una solución que se adapta a tu flujo, no al revés.",
      targetAudience:
        "Constructoras, PYMES, distribuidoras, empresas de logística y servicios con procesos internos complejos.",
      keyFeatures: [
        "Panel de control centralizado (Dashboard interactivo)",
        "Gestión de pipeline de ventas y cartera de clientes",
        "Automatización de estados, recordatorios y alertas",
        "Control de stock, presupuestos y órdenes de trabajo",
        "Reportes y métricas operativas en tiempo real",
      ],
      icon: "layers",
    },
  ],
};

