"use client";

import React, { useState } from "react";
import { siteConfig, getWhatsAppLink } from "@/config/site";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickMessages = [
    {
      label: "Quiero cotizar una Landing Page",
      text: "Hola CDByte! Quiero consultar presupuesto para hacer una Landing Page profesional.",
    },
    {
      label: "Necesito una Tienda E-Commerce",
      text: "Hola CDByte! Me interesa desarrollar una Tienda Online / E-Commerce para mi negocio.",
    },
    {
      label: "Busco un CRM o Sistema de Turnos",
      text: "Hola CDByte! Quiero consultar por un sistema a medida (CRM / Turnos / Cotizador).",
    },
    {
      label: "Tengo otro proyecto en mente",
      text: "Hola CDByte! Tengo una idea de proyecto digital y me gustaría recibir asesoramiento.",
    },
  ];

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end">
      {/* Popup interactivo de contacto rápido */}
      {isOpen && (
        <div className="mb-3 w-[calc(100vw-2rem)] max-w-[330px] rounded-2xl bg-[#0b0d24]/95 backdrop-blur-2xl border border-emerald-500/30 shadow-[0_20px_60px_rgba(0,0,0,0.75)] overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Cabecera del widget */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-3.5 flex items-center justify-between text-white">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center font-bold text-sm">
                  CD
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-300 ring-2 ring-emerald-700" />
              </div>
              <div>
                <p className="text-sm font-bold leading-none">{siteConfig.name} • Directo</p>
                <p className="text-[11px] text-emerald-100 mt-1">
                  Trato 1 a 1 • Respuesta rápida
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Cerrar ventana de WhatsApp"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Cuerpo con opciones rápidas */}
          <div className="p-4 space-y-3">
            <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-xs text-slate-300 leading-relaxed">
              ¡Hola! 👋 Soy Carlos de <strong className="text-white">CDByte</strong>. Elegí una opción para hablar directo por WhatsApp ({siteConfig.contact.phoneDisplay}):
            </div>

            <div className="space-y-1.5">
              {quickMessages.map((msg, i) => (
                <a
                  key={i}
                  href={getWhatsAppLink(msg.text)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between px-3 py-2 rounded-xl bg-white/[0.04] hover:bg-emerald-500/15 border border-white/10 hover:border-emerald-500/40 text-xs text-slate-200 hover:text-white transition-all group"
                >
                  <span>{msg.label}</span>
                  <Send className="w-3.5 h-3.5 text-emerald-400 group-hover:translate-x-0.5 transition-transform shrink-0 ml-2" />
                </a>
              ))}
            </div>

            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/25 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Abrir Chat en WhatsApp</span>
            </a>
          </div>
        </div>
      )}

      {/* Botón Flotante Principal */}
      <div className="flex items-center gap-2.5">
        {!isOpen && (
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#0d102b]/90 backdrop-blur-md border border-emerald-500/30 text-xs font-medium text-slate-200 hover:text-white hover:border-emerald-400 shadow-lg transition-all"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>¿Consultas? WhatsApp Directo</span>
          </button>
        )}

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Contactar por WhatsApp"
          className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white flex items-center justify-center shadow-[0_0_25px_rgba(16,185,129,0.5)] hover:shadow-[0_0_35px_rgba(16,185,129,0.75)] active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
        >
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-300 ring-2 ring-[#060714] animate-ping" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 ring-2 ring-[#060714]" />
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-7 h-7" />}
        </button>
      </div>
    </div>
  );
};
