"use client";

import React, { useState, useEffect } from "react";
import { siteConfig, getWhatsAppLink } from "@/config/site";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { X, Send } from "lucide-react";

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isFormInView, setIsFormInView] = useState(false);

  // 1. Mostrar solo después de pasar el Hero (scroll > 400px)
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. Ocultar cuando la sección #presupuesto esté visible (para no tapar el botón de envío)
  useEffect(() => {
    const formElement = document.getElementById("presupuesto");
    if (!formElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFormInView(entry.isIntersecting);
        if (entry.isIntersecting) {
          setIsOpen(false);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(formElement);
    return () => observer.disconnect();
  }, []);

  const shouldRender = isVisible && !isFormInView;

  if (!shouldRender) {
    return null;
  }

  const quickMessages = [
    {
      label: "Consultar por Sistema CRM / Gestión",
      text: "Hola CDByte! Quiero consultar por un sistema de gestión / CRM a medida para mi empresa.",
    },
    {
      label: "Consultar por Tienda Online E-Commerce",
      text: "Hola CDByte! Me interesa desarrollar una tienda online con catálogo y Mercado Pago.",
    },
    {
      label: "Consultar por Landing Page Profesional",
      text: "Hola CDByte! Quiero una landing page profesional de alta conversión para mis servicios.",
    },
    {
      label: "Otra consulta directa",
      text: "Hola CDByte! Tengo una consulta sobre desarrollo web para mi negocio.",
    },
  ];

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end transition-opacity duration-300">
      {/* Modal flotante opcional si el usuario hace clic */}
      {isOpen && (
        <div className="mb-3 w-[calc(100vw-2.5rem)] max-w-[320px] rounded-2xl bg-[#0b0d24]/95 backdrop-blur-2xl border border-emerald-500/30 shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-3 duration-200">
          {/* Cabecera */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-3 flex items-center justify-between text-white">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-xs">
                CD
              </div>
              <div>
                <p className="text-xs font-bold leading-none">{siteConfig.name} • Directo</p>
                <p className="text-[10px] text-emerald-100 mt-0.5">Trato 1 a 1 sin intermediarios</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Cerrar chat de WhatsApp"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Opciones */}
          <div className="p-3.5 space-y-2.5">
            <p className="text-[11px] text-slate-300 leading-relaxed">
              Elegí un tema para iniciar la conversación por WhatsApp:
            </p>

            <div className="space-y-1.5">
              {quickMessages.map((msg, i) => (
                <a
                  key={i}
                  href={getWhatsAppLink(msg.text)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between px-3 py-2 rounded-xl bg-white/[0.04] hover:bg-emerald-500/15 border border-white/10 hover:border-emerald-500/40 text-xs text-slate-200 hover:text-white transition-all group"
                >
                  <span className="line-clamp-1">{msg.label}</span>
                  <Send className="w-3 h-3 text-emerald-400 group-hover:translate-x-0.5 transition-transform shrink-0 ml-1.5" />
                </a>
              ))}
            </div>

            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/25 transition-all"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Abrir chat general</span>
            </a>
          </div>
        </div>
      )}

      {/* Botón flotante sin burbuja permanente de texto */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Contactar por WhatsApp"
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white flex items-center justify-center shadow-[0_0_25px_rgba(16,185,129,0.5)] hover:shadow-[0_0_35px_rgba(16,185,129,0.75)] active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 cursor-pointer"
      >
        {isOpen ? <X className="w-6 h-6" /> : <WhatsAppIcon className="w-7 h-7" />}
      </button>
    </div>
  );
};
