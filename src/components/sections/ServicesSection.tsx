import React from "react";
import Link from "next/link";
import { getWhatsAppLink } from "@/config/site";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import {
  Globe,
  ShoppingCart,
  Database,
  Calendar,
  Calculator,
  Zap,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  UserCheck,
  Clock,
  Cpu,
} from "lucide-react";

const ALL_SERVICES = [
  {
    id: "landing",
    title: "Landing Pages & Webs Profesionales",
    badge: "Conversión Directa",
    icon: Globe,
    highlight: false,
    description:
      "Presencia digital convincente y moderna. Diseñada para generar autoridad, destacar tus especialidades y captar consultas de nuevos clientes.",
    features: [
      "Diseño UI/UX exclusivo orientado a conversión",
      "Optimización móvil total y carga instantánea",
      "Conexión directa con WhatsApp y base de datos",
      "Sección de servicios, proceso y preguntas frecuentes",
      "SEO optimizado para aparecer en Google",
    ],
    idealFor:
      "Abogados, contadores, médicos, arquitectos, consultores, constructoras y empresas de servicios.",
    ctaLabel: "Cotizar Landing Page",
    whatsappText:
      "Hola CDByte! Quiero recibir asesoramiento y presupuesto para una Landing Page Profesional.",
  },
  {
    id: "ecommerce",
    title: "E-Commerce & Tiendas Online",
    badge: "Ventas 24/7",
    icon: ShoppingCart,
    highlight: true,
    description:
      "Tu canal de ventas activo las 24 horas. Desde tiendas de indumentaria hasta catálogos interactivos para pedidos gastronómicos o retiro en local.",
    features: [
      "Catálogo administrable con variantes, talles y stock",
      "Carrito de compras ágil sin fricciones",
      "Cobros con Mercado Pago, tarjetas o transferencia",
      "Módulo de envíos, retiros o pedido directo a WhatsApp",
      "100% tuyo: sin pagar comisiones por cada venta",
    ],
    idealFor:
      "Indumentaria, gastronomía (delivery propio), comercios minoristas, distribuidoras y marcas.",
    ctaLabel: "Cotizar Tienda Online",
    whatsappText:
      "Hola CDByte! Quiero consultar presupuesto para crear una Tienda Online / E-Commerce.",
  },
  {
    id: "crm",
    title: "Sistemas CRM & Software a Medida",
    badge: "Control Operativo",
    icon: Database,
    highlight: false,
    description:
      "Centralizá toda la operación de tu negocio. Dejá atrás las planillas de Excel sueltas y administrá clientes, presupuestos, stock y tareas en un solo panel.",
    features: [
      "Pipeline de ventas y ficha histórica de clientes",
      "Seguimiento de presupuestos, pagos y cobranzas",
      "Control de stock, insumos o etapas de obra",
      "Accesos por usuario y alertas operativas",
      "Dashboard gerencial con métricas en tiempo real",
    ],
    idealFor:
      "Constructoras, PYMES, inmobiliarias, estudios, talleres y negocios con procesos propios.",
    ctaLabel: "Cotizar CRM a Medida",
    whatsappText:
      "Hola CDByte! Me interesa desarrollar un Sistema CRM / Software de Gestión a medida.",
  },
  {
    id: "turnos",
    title: "Sistemas de Turnos & Reservas Web",
    badge: "Agenda 24/7",
    icon: Calendar,
    highlight: false,
    description:
      "Automatizá la toma de turnos. Tus clientes ven los horarios libres desde su celular y reservan en segundos sin que pierdas tiempo contestando mensajes.",
    features: [
      "Calendario con disponibilidad en tiempo real",
      "Gestión por profesional, servicio o sucursal",
      "Opción de cobro de seña automática con Mercado Pago",
      "Confirmación y recordatorios por WhatsApp/Email",
      "Panel simple para ver tu agenda del día y la semana",
    ],
    idealFor:
      "Consultorios médicos, odontólogos, centros de estética, barberías, gimnasios y canchas.",
    ctaLabel: "Cotizar Sistema de Turnos",
    whatsappText:
      "Hola CDByte! Quiero consultar por un Sistema de Turnos y Reservas Online para mi actividad.",
  },
  {
    id: "cotizador",
    title: "Cotizadores & Calculadoras Web",
    badge: "Leads Calificados",
    icon: Calculator,
    highlight: false,
    description:
      "Integrá un simulador interactivo donde el cliente elige medidas, cantidades o servicios, obtiene un presupuesto orientativo y te lo envía listo a WhatsApp.",
    features: [
      "Cálculo automático con las fórmulas de tu negocio",
      "Interfaz paso a paso muy fácil de usar en celular",
      "Envío del resumen detallado directo a tu WhatsApp",
      "Guardado de los datos del potencial cliente",
      "Ahorro de horas armando presupuestos manuales",
    ],
    idealFor:
      "Constructoras, fábricas de aberturas, gráficas, empresas de limpieza, mudanzas y servicios técnicos.",
    ctaLabel: "Cotizar Calculadora Web",
    whatsappText:
      "Hola CDByte! Quiero implementar un Cotizador / Calculadora interactiva para mis clientes.",
  },
  {
    id: "rediseno",
    title: "Rediseño Express & Velocidad Web",
    badge: "Renovación Total",
    icon: Zap,
    highlight: false,
    description:
      "Si ya tenés una web pero quedó vieja, tarda en cargar o no se adapta bien a celulares, la reconstruimos con tecnología moderna de carga instantánea.",
    features: [
      "Renovación visual completa y profesional",
      "Migración a arquitectura Next.js ultra rápida",
      "Optimización 100% para teléfonos móviles",
      "Nuevos botones de conversión a WhatsApp y formulario",
      "Mejora de seguridad y posicionamiento en Google",
    ],
    idealFor:
      "Negocios con webs antiguas en WordPress/Wix o sitios que hoy no generan consultas comerciales.",
    ctaLabel: "Cotizar Rediseño Express",
    whatsappText:
      "Hola CDByte! Tengo una página web que quiero renovar y acelerar con un Rediseño Express.",
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section id="servicios" className="relative py-24 bg-[#070817] overflow-hidden scroll-mt-20">
      {/* Luz ambiental */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabecera de Sección */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-950/70 border border-violet-500/30 text-violet-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            Catálogo de Soluciones CDByte
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Soluciones Digitales Diseñadas para{" "}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Vender, Agendar y Gestionar
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Elegí la herramienta que necesita hoy tu negocio, o combiná módulos a medida.
          </p>
        </div>

        {/* Grid de 6 Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {ALL_SERVICES.map((srv) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.id}
                className={`group relative rounded-2xl p-[1px] transition-all duration-300 flex flex-col ${
                  srv.highlight
                    ? "bg-gradient-to-b from-violet-500/60 via-purple-500/25 to-transparent shadow-glow-sm"
                    : "bg-gradient-to-b from-white/15 via-white/5 to-transparent hover:from-violet-500/50"
                }`}
              >
                <div
                  className={`w-full h-full bg-[#0d0f26]/95 backdrop-blur-xl rounded-2xl p-6 sm:p-7 flex flex-col justify-between border ${
                    srv.highlight
                      ? "border-violet-500/35"
                      : "border-white/5 group-hover:border-violet-500/30"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform ${
                          srv.highlight
                            ? "bg-violet-600/20 border border-violet-500/40 text-violet-300"
                            : "bg-violet-500/10 border border-violet-500/30 text-violet-400"
                        }`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-full border ${
                          srv.highlight
                            ? "bg-violet-600/30 text-violet-200 border-violet-400/40"
                            : "bg-violet-500/10 text-violet-300 border-violet-500/20"
                        }`}
                      >
                        {srv.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-300 transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed mb-5">
                      {srv.description}
                    </p>

                    <div className="space-y-2.5 mb-5">
                      <p className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                        ¿Qué incluye?
                      </p>
                      {srv.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 mb-6 text-xs text-slate-400">
                      <strong className="text-slate-200">Ideal para:</strong> {srv.idealFor}
                    </div>
                  </div>

                  {/* Acciones de tarjeta: Presupuesto + WhatsApp */}
                  <div className="flex items-center gap-2">
                    <Link
                      href="#presupuesto"
                      className={`flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-xs sm:text-sm text-white transition-all group/btn ${
                        srv.highlight
                          ? "bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-glow-sm"
                          : "bg-white/5 hover:bg-violet-600 border border-white/10 hover:border-violet-500"
                      }`}
                    >
                      <span>{srv.ctaLabel}</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>

                    <a
                      href={getWhatsAppLink(srv.whatsappText)}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Consultar ${srv.title} por WhatsApp`}
                      title="Consultar directo por WhatsApp"
                      className="p-3 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-400 hover:text-emerald-300 transition-all shrink-0"
                    >
                      <WhatsAppIcon className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bloque Diferencial Estratégico: Desarrollo Ágil 1 a 1 + IA */}
        <div className="mt-16 rounded-3xl p-[1px] bg-gradient-to-r from-violet-500/40 via-emerald-500/30 to-indigo-500/40">
          <div className="bg-[#0b0d22]/95 backdrop-blur-2xl rounded-3xl p-6 sm:p-10 border border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
                  <UserCheck className="w-3.5 h-3.5" />
                  <span>Por qué elegir CDByte frente a una agencia tradicional</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Trato Directo 1 a 1, Sin Intermediarios y Entregas en Tiempo Récord
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  En lugar de pasar por vendedores o esperar meses, hablás directamente con quien diseña y programa tu proyecto. Combinamos ingeniería de software moderna con flujos asistidos por Inteligencia Artificial para entregarte un producto superior, más rápido y a un costo justo.
                </p>
              </div>

              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-violet-500/15 border border-violet-500/30 flex items-center justify-center text-violet-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Entregas en Días, No Meses</p>
                    <p className="text-xs text-slate-400">Avances visibles desde la primera semana.</p>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                    <WhatsAppIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Comunicación Directa por WhatsApp</p>
                    <p className="text-xs text-slate-400">Sin tickets eternos ni intermediarios comerciales.</p>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Potenciado con IA & Next.js</p>
                    <p className="text-xs text-slate-400">Máxima velocidad, seguridad y escalabilidad real.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
