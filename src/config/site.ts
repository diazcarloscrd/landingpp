/**
 * Configuración centralizada de marca y datos comerciales de CDByte
 * Fuente única de verdad según Regla 02 y Regla 03.
 */

import { ServiceType } from "@/types/quote";

export const WHATSAPP_NUMBER = "5492915782848";

export function getWhatsAppLink(customMessage?: string): string {
  const defaultMsg =
    "Hola CDByte, quiero consultar por el desarrollo de un proyecto digital para mi negocio.";
  const text = encodeURIComponent(customMessage || defaultMsg);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

export interface ServiceDefinition {
  id: ServiceType;
  title: string;
  shortTitle: string;
  badge: string;
  isPillar: boolean;
  problem: string;
  solution: string;
  features: string[];
  idealFor: string;
  demoSlideIndex: number;
}

export const siteConfig = {
  // Identidad oficial de marca
  name: "CDByte",
  primaryCta: "Contar mi proyecto",
  tagline: "Desarrollo Ágil de Software, E-Commerce y Webs Comerciales",
  description:
    "En CDByte desarrollamos software y soluciones web a medida: sistemas CRM, tiendas online e-commerce y landing pages profesionales enfocadas en conversión y control operativo.",
  legalName: "CDByte Soluciones Digitales",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://landingpp.vercel.app",

  // Canales de contacto directo
  contact: {
    email: "diazcarloscrd@gmail.com",
    phone: "+54 9 291 578-2848",
    phoneDisplay: "291 578-2848",
    whatsappNumber: WHATSAPP_NUMBER,
    whatsappUrl: getWhatsAppLink(),
    location: "Argentina (Atención remota directa 1 a 1 en todo el país y exterior)",
    businessHours: "Lunes a Viernes de 9:00 a 19:00 hs",
  },

  // Enlaces de navegación rápida (simplificados según auditoría)
  nav: [
    { label: "Demos", href: "#demos" },
    { label: "Servicios", href: "#servicios" },
    { label: "Rubros", href: "#rubros" },
    { label: "Proceso", href: "#proceso" },
    { label: "Planes", href: "#mantenimiento" },
    { label: "FAQ", href: "#faq" },
  ],

  // Redes sociales
  social: {
    github: "https://github.com/diazcarloscrd",
  },

  // Servicios unificados (única fuente de verdad)
  // 3 Pilares Principales (CRM, E-Commerce, Landing) + 3 Extensiones
  services: [
    {
      id: "crm" as ServiceType,
      title: "Sistemas CRM & Software de Gestión a Medida",
      shortTitle: "CRM & Gestión",
      badge: "Control Operativo",
      isPillar: true,
      problem:
        "Planillas de Excel desconectadas, presupuestos desactualizados, falta de control en obras o stock y tareas que se pierden en chats de WhatsApp.",
      solution:
        "Centralizamos toda la operativa de tu empresa en un panel privado en la nube: clientes, presupuestos, cobros, tareas e historial unificado.",
      features: [
        "Pipeline de ventas y seguimiento histórico de clientes",
        "Control de stock, insumos o etapas de obra por proyecto",
        "Seguimiento de presupuestos emitidos, pagos y cobranzas",
        "Dashboard gerencial con métricas y alertas operativas en vivo",
        "Accesos y roles protegidos para tu equipo",
      ],
      idealFor:
        "Constructoras, PYMES, inmobiliarias, estudios, talleres y empresas con procesos propios.",
      demoSlideIndex: 0,
    },
    {
      id: "ecommerce" as ServiceType,
      title: "E-Commerce & Tiendas Online 24/7",
      shortTitle: "E-Commerce",
      badge: "Ventas 24/7",
      isPillar: true,
      problem:
        "Comisiones altas de plataformas externas, carritos complejos que frustran al comprador y desorden al recibir pedidos sueltos por mensaje.",
      solution:
        "Tienda virtual 100% tuya, ultra rápida y sin comisiones por venta. Catálogo administrable, cobros con Mercado Pago y órdenes directas.",
      features: [
        "Catálogo administrable con fotos, variantes (talles, colores) y stock",
        "Carrito ágil optimizado para comprar con pocos clics en móvil",
        "Cobros integrados: Mercado Pago, tarjetas y transferencia directa",
        "Módulos para envíos, retiros en sucursal o pedidos a WhatsApp",
        "100% tuyo: sin comisiones mensuales sobre tus ventas",
      ],
      idealFor:
        "Comercios minoristas, distribuidores, marcas de indumentaria y locales con venta al público.",
      demoSlideIndex: 1,
    },
    {
      id: "landing" as ServiceType,
      title: "Landing Pages Profesionales de Alta Conversión",
      shortTitle: "Landing Pages",
      badge: "Conversión Directa",
      isPillar: true,
      problem:
        "Falta de presencia profesional seria en Google, pérdida de visitas interesadas y dificultad para transmitir confianza rápidamente.",
      solution:
        "Páginas de carga instantánea con estructura persuasiva que presentan tu autoridad, explican tus servicios y transforman visitas en consultas reales.",
      features: [
        "Diseño UI/UX exclusivo orientado a generar consultas y ventas",
        "Optimización estricta Mobile-First con carga instantánea (<1 seg)",
        "Integración directa con WhatsApp y captura segura de leads",
        "Estructura persuasiva: servicios, proceso de trabajo y FAQ",
        "SEO técnico optimizado para posicionar en Google",
      ],
      idealFor:
        "Abogados, contadores, médicos, arquitectos, consultores y empresas de servicios profesionales.",
      demoSlideIndex: 2,
    },
    {
      id: "turnos" as ServiceType,
      title: "Sistemas de Turnos & Reservas Online",
      shortTitle: "Turnos & Reservas",
      badge: "Agenda 24/7",
      isPillar: false,
      problem:
        "Pérdida de horas respondiendo disponibilidades de horarios por chat, turnos superpuestos y clientes que no asisten.",
      solution:
        "Tus clientes eligen fecha y horario libre desde su celular las 24 hs, con confirmación inmediata y opción de cobro de seña online.",
      features: [
        "Calendario inteligente con disponibilidad en tiempo real",
        "Bloqueo automático de horarios por profesional o sucursal",
        "Cobro opcional de seña con Mercado Pago para evitar inasistencias",
        "Confirmación y recordatorios por WhatsApp y correo electrónico",
        "Panel diario y semanal para ver la agenda del día",
      ],
      idealFor:
        "Consultorios médicos, clínicas, centros de estética, barberías, gimnasios y asesores.",
      demoSlideIndex: 3,
    },
    {
      id: "cotizador" as ServiceType,
      title: "Cotizadores & Calculadoras Interactivas Web",
      shortTitle: "Cotizadores Web",
      badge: "Captación Calificada",
      isPillar: false,
      problem:
        "Pérdida de tiempo elaborando presupuestos estándar repetitivos para consultas que no siempre se concretan.",
      solution:
        "El visitante ingresa las variables de su necesidad (metros, cantidad, tipo), obtiene un valor estimado y te envía el resumen listo.",
      features: [
        "Fórmulas personalizadas según los cálculos de tu negocio",
        "Experiencia interactiva paso a paso muy fácil desde el celular",
        "Resumen inmediato con opción de envío directo a WhatsApp",
        "Captura anticipada de requerimientos para presupuestar con precisión",
      ],
      idealFor:
        "Constructoras, imprentas, carpinterías, logística, empresas de servicios y presupuestos a medida.",
      demoSlideIndex: 4,
    },
    {
      id: "rediseno" as ServiceType,
      title: "Rediseño Express & Optimización Web",
      shortTitle: "Rediseño Express",
      badge: "Alta Velocidad",
      isPillar: false,
      problem:
        "Sitios web antiguos en WordPress o Wix que tardan en cargar, no se adaptan al celular y transmiten una imagen anticuada.",
      solution:
        "Modernizamos tu web existente con tecnología Next.js de última generación: diseño contemporáneo, velocidad récord y mayor conversión.",
      features: [
        "Renovación estética completa a estándar profesional actual",
        "Migración a Next.js para carga ultra rápida (puntuación 95+)",
        "Adaptación fluida para smartphones y tablets",
        "Reconexión de formularios y canales directos de WhatsApp",
      ],
      idealFor:
        "Empresas con sitios lentos o desactualizados que quieren relanzar su imagen digital sin perder tiempo.",
      demoSlideIndex: 5,
    },
  ],
};
