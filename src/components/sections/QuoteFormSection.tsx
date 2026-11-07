"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site";
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
  Layers,
  ArrowRight,
} from "lucide-react";

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
    consent: true,
    honeypot: "",
    projectDetails: {},
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [leadCode, setLeadCode] = useState<string>("");

  const handleServiceChange = (st: ServiceType) => {
    setFormData((prev) => ({
      ...prev,
      serviceType: st,
      projectDetails: {}, // Reiniciar preguntas contextuales
    }));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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

    // Validación básica previa en frontend
    const clientErrors: Record<string, string> = {};
    if (!formData.name.trim()) clientErrors.name = "Por favor ingresá tu nombre.";
    if (!formData.email.trim()) clientErrors.email = "Por favor ingresá tu correo electrónico.";
    if (!formData.message.trim() || formData.message.trim().length < 15) {
      clientErrors.message = "Contanos brevemente tu proyecto (mínimo 15 caracteres).";
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
          result.error || "Ocurrió un error al procesar tu solicitud. Por favor intenta de nuevo."
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
      setErrorMessage("No pudimos conectar con el servidor. Verificá tu conexión o contactanos vía WhatsApp.");
    }
  };

  return (
    <section id="presupuesto" className="relative py-24 bg-[#050612] border-t border-violet-950/40">
      {/* Fondo Glow de Conversión */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3/4 h-80 bg-violet-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-950/80 border border-violet-500/40 text-violet-300 text-xs font-semibold uppercase tracking-wider mb-3 shadow-glow-sm">
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            Propuesta Sin Compromiso
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Contanos Tu Proyecto y Recibí un{" "}
            <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
              Presupuesto Detallado
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Completá este formulario y nuestro equipo analizará la mejor solución tecnológica para tu empresa.
          </p>
        </div>

        {/* Tarjeta del Formulario */}
        <div className="rounded-3xl p-[1px] bg-gradient-to-b from-violet-500/40 via-purple-500/15 to-transparent shadow-[0_20px_60px_rgba(139,92,246,0.25)]">
          <div className="bg-[#0b0c20]/95 backdrop-blur-2xl rounded-3xl p-6 sm:p-10 lg:p-12 border border-white/10">
            {status === "success" ? (
              <div className="text-center py-12 space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  ¡Solicitud Recibida con Éxito!
                </h3>
                <p className="text-slate-300 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
                  Gracias por confiar en <strong className="text-white">{siteConfig.name}</strong>. Ya registramos los detalles de tu consulta. Analizaremos tu necesidad y te enviaremos una propuesta formal en menos de 24 horas hábiles.
                </p>
                <div className="inline-block px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-400">
                  Código de Seguimiento: <span className="font-mono text-violet-300">{leadCode}</span>
                </div>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={siteConfig.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/30 transition-all"
                  >
                    <span>Contactar por WhatsApp Ahora</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setStatus("idle");
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
                        consent: true,
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
                {/* Honeypot invisible para protección anti-spam */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleInputChange}
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Paso 1: Selección del Servicio de Interés */}
                <div>
                  <label className="block text-sm font-semibold text-white mb-3">
                    1. ¿Qué servicio o solución necesitás desarrollar? *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                    {[
                      {
                        id: "landing" as ServiceType,
                        label: "Landing Page / Web",
                        icon: Globe,
                        desc: "Para presentar servicios y captar prospectos",
                      },
                      {
                        id: "ecommerce" as ServiceType,
                        label: "E-Commerce / Tienda",
                        icon: ShoppingCart,
                        desc: "Venta online de productos con cobro automático",
                      },
                      {
                        id: "crm" as ServiceType,
                        label: "CRM / Software a Medida",
                        icon: Database,
                        desc: "Gestión interna de clientes, pedidos u obras",
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
                                active ? "bg-violet-600 text-white" : "bg-white/5 text-slate-300"
                              }`}
                            >
                              <Icon className="w-5 h-5" />
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

                {/* Preguntas contextuales según el servicio seleccionado */}
                {formData.serviceType === "ecommerce" && (
                  <div className="p-4 rounded-xl bg-violet-950/30 border border-violet-500/20 space-y-3">
                    <p className="text-xs font-semibold text-violet-300 uppercase tracking-wider">
                      Detalles de tu Tienda Online
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs text-slate-300 mb-1">
                          ¿Qué tipo de productos venderás?
                        </label>
                        <input
                          type="text"
                          placeholder="Ej: Indumentaria, Sushi, Repuestos..."
                          className="w-full px-3 py-2 text-xs rounded-lg bg-black/40 border border-white/10 text-white focus:outline-none focus:border-violet-500"
                          onChange={(e) => handleDetailChange("productType", e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-slate-300 mb-1">
                          ¿Volumen estimado de productos?
                        </label>
                        <select
                          className="w-full px-3 py-2 text-xs rounded-lg bg-black/40 border border-white/10 text-white focus:outline-none focus:border-violet-500"
                          onChange={(e) => handleDetailChange("estimatedProducts", e.target.value)}
                        >
                          <option value="1-20">Catálogo chico (1 a 20 items)</option>
                          <option value="20-100">Catálogo mediano (20 a 100 items)</option>
                          <option value="100+">Catálogo grande (más de 100 items)</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {formData.serviceType === "crm" && (
                  <div className="p-4 rounded-xl bg-violet-950/30 border border-violet-500/20 space-y-3">
                    <p className="text-xs font-semibold text-violet-300 uppercase tracking-wider">
                      Detalles de tu Software de Gestión
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs text-slate-300 mb-1">
                          ¿Qué áreas necesitás administrar?
                        </label>
                        <input
                          type="text"
                          placeholder="Ej: Obras, Clientes, Facturación, Stock..."
                          className="w-full px-3 py-2 text-xs rounded-lg bg-black/40 border border-white/10 text-white focus:outline-none focus:border-violet-500"
                          onChange={(e) => handleDetailChange("mainAreas", e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-slate-300 mb-1">
                          ¿Cuántos usuarios usarán el sistema?
                        </label>
                        <select
                          className="w-full px-3 py-2 text-xs rounded-lg bg-black/40 border border-white/10 text-white focus:outline-none focus:border-violet-500"
                          onChange={(e) => handleDetailChange("usersCount", e.target.value)}
                        >
                          <option value="1-5">1 a 5 usuarios</option>
                          <option value="5-20">5 a 20 usuarios</option>
                          <option value="20+">Más de 20 usuarios</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* Paso 2: Datos de Contacto */}
                <div className="space-y-4">
                  <label className="block text-sm font-semibold text-white">
                    2. Tus datos de contacto
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-slate-400 mb-1">
                        Nombre y Apellido *
                      </label>
                      <input
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
                      <label className="block text-xs text-slate-400 mb-1">
                        Correo Electrónico *
                      </label>
                      <input
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
                      <label className="block text-xs text-slate-400 mb-1">
                        WhatsApp o Teléfono (con código de país)
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+54 9 11 ..."
                        className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-slate-400 mb-1">
                        Nombre de tu Negocio o Profesión
                      </label>
                      <input
                        type="text"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleInputChange}
                        placeholder="Ej: Constructora San Martín / Estudio Jurídico"
                        className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Paso 3: Descripción de la Necesidad */}
                <div>
                  <label className="block text-xs text-slate-400 mb-1">
                    3. Contanos sobre tu necesidad o proyecto *
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describí qué hace tu negocio, qué problemas querés resolver y qué funcionalidades te gustaría incluir..."
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

                {/* Paso 4: Plazo y Presupuesto Orientativo (Opcional) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="block text-xs text-slate-400 mb-1">
                      Plazo estimado o urgencia
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-sm text-white focus:outline-none focus:border-violet-500"
                    >
                      <option value="Lo antes posible">Lo antes posible (Urgente)</option>
                      <option value="Estándar (1-3 semanas)">Estándar (1 a 3 semanas)</option>
                      <option value="Próximo mes">Durante el próximo mes</option>
                      <option value="Solo consultando">Solo estoy evaluando opciones</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-slate-400 mb-1">
                      Presupuesto estimado (Opcional)
                    </label>
                    <select
                      name="budgetRange"
                      value={formData.budgetRange}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-sm text-white focus:outline-none focus:border-violet-500"
                    >
                      <option value="A convenir / A definir">A convenir / Necesito asesoramiento</option>
                      <option value="Económico / Inicial">Plan Inicial / Presupuesto Acotado</option>
                      <option value="Medio / Profesional">Plan Profesional / Completo</option>
                      <option value="Avanzado / Corporativo">Plan Corporativo / Plataforma Integral</option>
                    </select>
                  </div>
                </div>

                {/* Mensaje de Error General si ocurre */}
                {status === "error" && (
                  <div className="p-4 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs sm:text-sm flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Botón de Envío y Privacidad */}
                <div className="pt-4 space-y-4">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full py-4 rounded-full font-bold text-base text-white bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-[0_0_35px_rgba(139,92,246,0.5)] hover:shadow-[0_0_45px_rgba(139,92,246,0.7)] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Enviando solicitud segura...</span>
                      </>
                    ) : (
                      <>
                        <span>Solicitar Presupuesto Formal</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Tus datos están protegidos y no serán compartidos con terceros.</span>
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

