"use client";

import React, { useState } from "react";
import { siteConfig, getWhatsAppLink } from "@/config/site";
import { ServiceType, QuoteFormData } from "@/types/quote";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ShieldCheck,
  Globe,
  ShoppingCart,
  Database,
  Calendar,
  Calculator,
  Lightbulb,
  ArrowRight,
  MessageCircle,
  Plus,
  Check,
} from "lucide-react";

interface SuggestionItem {
  label: string;
  template: string;
}

const SUGGESTIONS_BY_SERVICE: Record<ServiceType, SuggestionItem[]> = {
  landing: [
    {
      label: "Web para Profesional / Consultor",
      template:
        "Necesito una Landing Page profesional para presentar mis servicios, mostrar experiencia y recibir consultas directo en WhatsApp.",
    },
    {
      label: "Landing para Empresa / Constructora",
      template:
        "Busco una página comercial moderna para mostrar nuestros proyectos/obras realizadas y captar clientes potenciales.",
    },
    {
      label: "Rediseñar mi Web Actual",
      template:
        "Ya tengo una página web pero quiero renovarla para que cargue rápido, se vea bien en celular y convierta más visitas.",
    },
  ],
  ecommerce: [
    {
      label: "Tienda de Indumentaria / Calzado",
      template:
        "Quiero crear una tienda online con catálogo de productos, talles, colores, carrito y cobro con Mercado Pago / transferencia.",
    },
    {
      label: "Pedidos Gastronómicos / Delivery",
      template:
        "Necesito un catálogo interactivo con carrito para que los clientes armen su pedido y me llegue listo al WhatsApp del local.",
    },
    {
      label: "Catálogo Mayorista / Distribuidora",
      template:
        "Busco una tienda para recibir pedidos mayoristas o minoristas con control de stock y lista de precios fácil de actualizar.",
    },
  ],
  crm: [
    {
      label: "Control de Clientes y Presupuestos",
      template:
        "Necesito un sistema CRM para registrar clientes, hacer seguimiento de presupuestos enviados y controlar estados de cobro.",
    },
    {
      label: "Gestión de Stock, Pedidos y Caja",
      template:
        "Quiero ordenar mi negocio reemplazando las planillas de Excel por un panel web para controlar inventario, ventas y gastos.",
    },
    {
      label: "Seguimiento de Obras / Servicios Técnicos",
      template:
        "Busco un software a medida para asignar tareas/órdenes de trabajo, registrar avances y llevar el historial de cada cliente.",
    },
  ],
  turnos: [
    {
      label: "Consultorio / Salud / Estética",
      template:
        "Quiero un sistema de turnos online para que mis pacientes/clientes elijan día y horario disponible sin tener que escribirme.",
    },
    {
      label: "Barbería / Peluquería / Gimnasio",
      template:
        "Necesito un turnero web por profesional o actividad con recordatorios y opción de cobrar una seña por Mercado Pago.",
    },
    {
      label: "Canchas / Espacios / Asesorías",
      template:
        "Busco un sistema de reservas por franja horaria con disponibilidad en tiempo real y panel de administración simple.",
    },
  ],
  cotizador: [
    {
      label: "Calculadora para Construcción / Aberturas",
      template:
        "Quiero una calculadora interactiva en mi web donde el cliente ingrese medidas/m2 y obtenga un presupuesto estimado al instante.",
    },
    {
      label: "Cotizador de Servicios / Gráfica / Limpieza",
      template:
        "Necesito un cotizador paso a paso donde el cliente seleccione lo que necesita y me envíe el resumen directo por WhatsApp.",
    },
  ],
  rediseno: [
    {
      label: "Modernizar Web Vieja o Lenta",
      template:
        "Mi web actual quedó desactualizada y tarda en cargar. Quiero hacer un Rediseño Express moderno y adaptable a celulares.",
    },
  ],
  other: [
    {
      label: "Portal de Clientes / Extranet",
      template:
        "Quiero crear un portal privado donde mis clientes ingresen con usuario para ver el estado de sus trámites, archivos o pedidos.",
    },
    {
      label: "Rediseño Express & Optimización Web",
      template:
        "Tengo una web que quiero rediseñar por completo para mejorar su imagen, velocidad en celulares y conexión con WhatsApp.",
    },
    {
      label: "Sistema de Turnos o Reservas",
      template:
        "Necesito una plataforma para gestionar reservas de horarios o turnos online con confirmación automática.",
    },
    {
      label: "Cotizador / Calculadora a Medida",
      template:
        "Quiero desarrollar una herramienta interactiva para que mis clientes calculen presupuestos online según sus necesidades.",
    },
    {
      label: "Aplicación Web / SaaS a Medida",
      template:
        "Tengo una idea de aplicación web personalizada y me gustaría recibir asesoramiento técnico para desarrollarla por etapas.",
    },
    {
      label: "Catálogo Digital con QR / WhatsApp",
      template:
        "Busco un catálogo digital interactivo accesible por link o código QR para recibir pedidos o consultas directo en WhatsApp.",
    },
  ],
};

export const QuoteFormSection: React.FC = () => {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    industry: "",
    serviceType: "landing",
    message: "",
    budgetRange: "A convenir / A definir",
    timeline: "Estándar (1-3 semanas)",
    consent: false,
    honeypot: "",
    projectDetails: {},
  });

  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [leadCode, setLeadCode] = useState<string>("");

  const handleServiceChange = (st: ServiceType) => {
    setFormData((prev) => ({
      ...prev,
      serviceType: st,
      projectDetails: {},
    }));
    setSelectedTags([]);
  };

  const handleSuggestionClick = (suggestion: SuggestionItem) => {
    const alreadySelected = selectedTags.includes(suggestion.label);
    let updatedTags: string[];

    if (alreadySelected) {
      updatedTags = selectedTags.filter((t) => t !== suggestion.label);
    } else {
      updatedTags = [...selectedTags, suggestion.label];
    }

    setSelectedTags(updatedTags);

    // Si el mensaje está vacío o contiene otra plantilla previa, autocompletamos o agregamos con claridad
    setFormData((prev) => {
      const currentMsg = prev.message.trim();
      const nextMsg = !currentMsg
        ? suggestion.template
        : currentMsg.includes(suggestion.template)
        ? currentMsg
        : `${currentMsg}\n• ${suggestion.template}`;

      return {
        ...prev,
        message: nextMsg,
        projectDetails: {
          ...prev.projectDetails,
          selectedSuggestions: updatedTags,
        },
      };
    });

    if (fieldErrors.message) {
      setFieldErrors((prev) => {
        const copy = { ...prev };
        delete copy.message;
        return copy;
      });
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const finalValue =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : value;

    setFormData((prev) => ({ ...prev, [name]: finalValue }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleDetailChange = (key: string, val: any) => {
    setFormData((prev) => ({
      ...prev,
      projectDetails: {
        ...prev.projectDetails,
        [key]: val,
      },
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const clientErrors: Record<string, string> = {};
    if (!formData.name.trim()) clientErrors.name = "Por favor ingresá tu nombre.";
    if (!formData.email.trim()) clientErrors.email = "Por favor ingresá tu correo electrónico.";
    if (!formData.message.trim() || formData.message.trim().length < 15) {
      clientErrors.message =
        "Contanos brevemente tu proyecto o elegí una sugerencia arriba (mínimo 15 caracteres).";
    }
    if (!formData.consent) {
      clientErrors.consent = "Marcá la casilla para autorizar que te contactemos con tu presupuesto.";
    }

    if (Object.keys(clientErrors).length > 0) {
      setFieldErrors(clientErrors);
      return;
    }

    setStatus("submitting");
    setErrorMessage("");
    setFieldErrors({});

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        setStatus("error");
        setErrorMessage(
          result.error || "Ocurrió un error al procesar tu solicitud. Por favor intentá de nuevo."
        );
        if (result.errors) {
          setFieldErrors(result.errors);
        }
        return;
      }

      setStatus("success");
      setLeadCode(result.data?.leadId || "CONFIRMADO");
    } catch (err) {
      console.error("Error en envío:", err);
      setStatus("error");
      setErrorMessage(
        "No pudimos conectar con el servidor. Verificá tu conexión o envianos tu consulta directo por WhatsApp."
      );
    }
  };

  const activeSuggestions =
    SUGGESTIONS_BY_SERVICE[formData.serviceType] || SUGGESTIONS_BY_SERVICE.other;

  const directWhatsAppFromForm = getWhatsAppLink(
    `Hola CDByte! Soy ${formData.name || "un interesado"}.\n` +
      `• Servicio: ${formData.serviceType.toUpperCase()}\n` +
      (selectedTags.length > 0 ? `• Idea: ${selectedTags.join(", ")}\n` : "") +
      `• Detalle: ${formData.message || "Me gustaría recibir asesoramiento y presupuesto."}`
  );

  return (
    <section
      id="presupuesto"
      className="relative py-24 bg-[#050612] border-t border-violet-950/40 scroll-mt-16"
    >
      {/* Fondo Glow de Conversión */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3/4 h-80 bg-violet-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-950/80 border border-violet-500/40 text-violet-300 text-xs font-semibold uppercase tracking-wider mb-3 shadow-glow-sm">
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            Asesoramiento Directo 1 a 1
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Contanos Tu Proyecto y Recibí un{" "}
            <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
              Presupuesto a Medida
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Completá el formulario o tocá una de las ideas sugeridas. También podés escribirnos directo al WhatsApp{" "}
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 font-semibold hover:underline"
            >
              {siteConfig.contact.phoneDisplay}
            </a>
            .
          </p>
        </div>

        {/* Tarjeta del Formulario */}
        <div className="rounded-3xl p-[1px] bg-gradient-to-b from-violet-500/40 via-purple-500/15 to-transparent shadow-[0_20px_60px_rgba(139,92,246,0.25)]">
          <div className="bg-[#0b0c20]/95 backdrop-blur-2xl rounded-3xl p-5 sm:p-10 lg:p-12 border border-white/10">
            {status === "success" ? (
              <div className="text-center py-12 space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  ¡Solicitud Guardada con Éxito!
                </h3>
                <p className="text-slate-300 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
                  Gracias por contactar a <strong className="text-white">{siteConfig.name}</strong>. Ya registramos los detalles de tu proyecto y te responderemos a tu correo o WhatsApp a la brevedad.
                </p>
                <div className="inline-block px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-400">
                  Código de Referencia:{" "}
                  <span className="font-mono text-violet-300">{leadCode}</span>
                </div>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={directWhatsAppFromForm}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/30 transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Agilizar ahora por WhatsApp ({siteConfig.contact.phoneDisplay})</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setStatus("idle");
                      setSelectedTags([]);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        businessName: "",
                        industry: "",
                        serviceType: "landing",
                        message: "",
                        budgetRange: "A convenir / A definir",
                        timeline: "Estándar (1-3 semanas)",
                        consent: false,
                        honeypot: "",
                        projectDetails: {},
                      });
                    }}
                    className="text-xs text-slate-400 hover:text-white transition-colors underline"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                {/* Honeypot anti-spam */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleInputChange}
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Paso 1: Selección del Servicio de Interés (Incluye "Otros") */}
                <div>
                  <label className="block text-sm font-semibold text-white mb-3">
                    1. ¿Qué tipo de proyecto querés crear? *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {[
                      {
                        id: "landing" as ServiceType,
                        label: "Landing Page / Web",
                        icon: Globe,
                        desc: "Presencia profesional y captación de clientes",
                      },
                      {
                        id: "ecommerce" as ServiceType,
                        label: "E-Commerce / Tienda",
                        icon: ShoppingCart,
                        desc: "Catálogo, carrito de compras y pagos online",
                      },
                      {
                        id: "crm" as ServiceType,
                        label: "CRM / Sistema de Gestión",
                        icon: Database,
                        desc: "Control de clientes, stock, caja u obras",
                      },
                      {
                        id: "turnos" as ServiceType,
                        label: "Turnos & Reservas Web",
                        icon: Calendar,
                        desc: "Agenda automática de horarios 24/7",
                      },
                      {
                        id: "cotizador" as ServiceType,
                        label: "Cotizador / Calculadora",
                        icon: Calculator,
                        desc: "Simulador de precios interactivo en tu web",
                      },
                      {
                        id: "other" as ServiceType,
                        label: "Otros / Idea a Medida",
                        icon: Lightbulb,
                        desc: "Otro proyecto, rediseño o solución especial",
                      },
                    ].map((st) => {
                      const Icon = st.icon;
                      const active = formData.serviceType === st.id;
                      return (
                        <button
                          key={st.id}
                          type="button"
                          onClick={() => handleServiceChange(st.id)}
                          className={`p-4 rounded-xl text-left border transition-all flex flex-col justify-between ${
                            active
                              ? "bg-violet-600/20 border-violet-500 shadow-[0_0_20px_rgba(139,92,246,0.35)]"
                              : "bg-black/30 border-white/10 hover:border-white/20 text-slate-400"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span
                              className={`p-2 rounded-lg ${
                                active
                                  ? "bg-violet-600 text-white"
                                  : "bg-white/5 text-slate-300"
                              }`}
                            >
                              <Icon className="w-4 h-4" />
                            </span>
                            {active && (
                              <span className="w-2.5 h-2.5 rounded-full bg-violet-400 shadow-glow-sm" />
                            )}
                          </div>
                          <div>
                            <p
                              className={`text-sm font-bold ${
                                active ? "text-white" : "text-slate-200"
                              }`}
                            >
                              {st.label}
                            </p>
                            <p className="text-xs text-slate-400 mt-0.5">{st.desc}</p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Bloque de Sugerencias Interactivas basado en el proyecto elegido */}
                <div className="p-4 sm:p-5 rounded-2xl bg-violet-950/25 border border-violet-500/25 space-y-3">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <p className="text-xs font-semibold text-violet-300 uppercase tracking-wider flex items-center gap-1.5">
                      <Lightbulb className="w-4 h-4 text-amber-400" />
                      <span>
                        {formData.serviceType === "other"
                          ? "¿Qué otro proyecto tenés en mente? Elegí una idea sugerida o contanos abajo:"
                          : "Sugerencias rápidas (tocá una opción para autocompletar tu consulta):"}
                      </span>
                    </p>
                    <span className="text-[11px] text-slate-400">Opcional • 1 clic</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {activeSuggestions.map((sug) => {
                      const isPicked = selectedTags.includes(sug.label);
                      return (
                        <button
                          key={sug.label}
                          type="button"
                          onClick={() => handleSuggestionClick(sug)}
                          className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium border transition-all text-left ${
                            isPicked
                              ? "bg-violet-600 text-white border-violet-400 shadow-glow-sm"
                              : "bg-black/40 text-slate-200 border-white/10 hover:border-violet-400/50 hover:text-white"
                          }`}
                        >
                          {isPicked ? (
                            <Check className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
                          ) : (
                            <Plus className="w-3.5 h-3.5 text-violet-400 shrink-0" />
                          )}
                          <span>{sug.label}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Preguntas específicas adicionales si eligió Otros */}
                  {formData.serviceType === "other" && (
                    <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-white/10">
                      <div>
                        <label className="block text-xs text-slate-300 mb-1">
                          ¿Tenés alguna web o sistema de referencia? (Opcional)
                        </label>
                        <input
                          type="text"
                          placeholder="Ej: Vi un sistema similar a... / Mi web actual es..."
                          className="w-full px-3 py-2 text-xs rounded-lg bg-black/40 border border-white/10 text-white focus:outline-none focus:border-violet-500"
                          onChange={(e) =>
                            handleDetailChange("referenceOrIdea", e.target.value)
                          }
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-slate-300 mb-1">
                          ¿Quiénes van a usar la herramienta?
                        </label>
                        <select
                          className="w-full px-3 py-2 text-xs rounded-lg bg-black/40 border border-white/10 text-white focus:outline-none focus:border-violet-500"
                          onChange={(e) =>
                            handleDetailChange("targetUsers", e.target.value)
                          }
                        >
                          <option value="Clientes finales (Público)">
                            Mis clientes (Público general)
                          </option>
                          <option value="Uso interno del negocio">
                            Uso interno de mi equipo / negocio
                          </option>
                          <option value="Ambos (Clientes + Equipo)">
                            Ambos (Clientes y panel interno)
                          </option>
                        </select>
                      </div>
                    </div>
                  )}
                </div>

                {/* Paso 2: Datos de Contacto */}
                <div className="space-y-4">
                  <label className="block text-sm font-semibold text-white">
                    2. Tus datos de contacto
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="quote-name" className="block text-xs text-slate-300 mb-1">
                        Nombre y Apellido *
                      </label>
                      <input
                        id="quote-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Ej: Martín Rodríguez"
                        className={`w-full px-4 py-2.5 rounded-xl bg-black/40 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                          fieldErrors.name
                            ? "border-rose-500 focus:border-rose-400"
                            : "border-white/10 focus:border-violet-500"
                        }`}
                      />
                      {fieldErrors.name && (
                        <p className="text-xs text-rose-400 mt-1">{fieldErrors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="quote-email" className="block text-xs text-slate-300 mb-1">
                        Correo Electrónico *
                      </label>
                      <input
                        id="quote-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="tu@email.com"
                        className={`w-full px-4 py-2.5 rounded-xl bg-black/40 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                          fieldErrors.email
                            ? "border-rose-500 focus:border-rose-400"
                            : "border-white/10 focus:border-violet-500"
                        }`}
                      />
                      {fieldErrors.email && (
                        <p className="text-xs text-rose-400 mt-1">{fieldErrors.email}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="quote-phone" className="block text-xs text-slate-300 mb-1">
                        WhatsApp o Teléfono (Opcional, recomendado)
                      </label>
                      <input
                        id="quote-phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Ej: +54 9 291 ..."
                        className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="quote-business" className="block text-xs text-slate-300 mb-1">
                        Nombre de tu Negocio o Rubro (Opcional)
                      </label>
                      <input
                        id="quote-business"
                        type="text"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleInputChange}
                        placeholder="Ej: Constructora / Consultorio / Comercio"
                        className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Paso 3: Descripción de la Necesidad */}
                <div>
                  <label htmlFor="quote-message" className="block text-sm font-semibold text-white mb-1">
                    3. Contanos sobre el proyecto que querés realizar *
                  </label>
                  <p className="text-xs text-slate-400 mb-2">
                    Podés usar una de las sugerencias de arriba como base y agregar lo que necesites (qué problema querés resolver, funciones clave o dudas).
                  </p>
                  <textarea
                    id="quote-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describí tu idea o necesidad acá..."
                    className={`w-full px-4 py-3 rounded-xl bg-black/40 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                      fieldErrors.message
                        ? "border-rose-500 focus:border-rose-400"
                        : "border-white/10 focus:border-violet-500"
                    }`}
                  />
                  {fieldErrors.message && (
                    <p className="text-xs text-rose-400 mt-1">{fieldErrors.message}</p>
                  )}
                </div>

                {/* Paso 4: Plazo y Presupuesto Orientativo */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  <div>
                    <label htmlFor="quote-timeline" className="block text-xs text-slate-300 mb-1">
                      Plazo estimado o urgencia (Opcional)
                    </label>
                    <select
                      id="quote-timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-sm text-white focus:outline-none focus:border-violet-500"
                    >
                      <option value="Lo antes posible">Lo antes posible (Urgente)</option>
                      <option value="Estándar (1-3 semanas)">Estándar (1 a 3 semanas)</option>
                      <option value="Próximo mes">Durante el próximo mes</option>
                      <option value="Solo consultando">Todavía estoy evaluando opciones</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="quote-budget" className="block text-xs text-slate-300 mb-1">
                      Presupuesto estimado (Opcional)
                    </label>
                    <select
                      id="quote-budget"
                      name="budgetRange"
                      value={formData.budgetRange}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-sm text-white focus:outline-none focus:border-violet-500"
                    >
                      <option value="A convenir / A definir">
                        Todavía no lo definí / Necesito asesoramiento
                      </option>
                      <option value="Económico / Inicial">
                        Etapa Inicial / MVP Ágil
                      </option>
                      <option value="Medio / Profesional">
                        Proyecto Completo / Profesional
                      </option>
                      <option value="Avanzado / Corporativo">
                        Sistema Integral a Medida
                      </option>
                    </select>
                  </div>
                </div>

                {/* Casilla de Consentimiento Informado (Regla 03.5) */}
                <div className="pt-1">
                  <label className="flex items-start gap-3 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleInputChange}
                      className="mt-1 w-4 h-4 rounded border-white/20 bg-black/40 text-violet-600 focus:ring-violet-500 cursor-pointer"
                    />
                    <span className="text-xs text-slate-300 leading-relaxed">
                      Acepto ser contactado por <strong className="text-white">CDByte</strong> para recibir asesoramiento y presupuesto sobre mi consulta. Mis datos serán tratados de forma estrictamente confidencial. *
                    </span>
                  </label>
                  {fieldErrors.consent && (
                    <p className="text-xs text-rose-400 mt-1.5">{fieldErrors.consent}</p>
                  )}
                </div>

                {/* Mensaje de Error General si ocurre */}
                {status === "error" && (
                  <div className="p-4 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs sm:text-sm flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Botones de Envío (Formulario + Alternativa WhatsApp Directo) */}
                <div className="pt-2 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="sm:col-span-7 py-4 px-6 rounded-full font-bold text-sm sm:text-base text-white bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-[0_0_35px_rgba(139,92,246,0.5)] hover:shadow-[0_0_45px_rgba(139,92,246,0.7)] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === "submitting" ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Enviando solicitud...</span>
                        </>
                      ) : (
                        <>
                          <span>Solicitar Presupuesto Formal</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <a
                      href={directWhatsAppFromForm}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sm:col-span-5 py-4 px-5 rounded-full font-semibold text-xs sm:text-sm text-emerald-300 bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/35 flex items-center justify-center gap-2 transition-all"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-400" />
                      <span>O Consultar por WhatsApp</span>
                    </a>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      Tus datos están protegidos y nunca se comparten con terceros.
                    </span>
                    <span>•</span>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="hover:text-violet-300 transition-colors"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
