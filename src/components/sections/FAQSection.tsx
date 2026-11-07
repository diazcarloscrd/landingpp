"use client";

import React, { useState } from "react";
import { ChevronDown, Sparkles, HelpCircle } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: "¿Cuánto cuesta desarrollar un proyecto (Landing, E-Commerce o CRM)?",
    a: "El costo se calcula de forma transparente según el alcance exacto de tu negocio: cantidad de secciones, módulos personalizados, métodos de pago y automatizaciones necesarias. En nuestra propuesta inicial te entregamos un presupuesto cerrado y detallado sin costos sorpresa.",
  },
  {
    q: "¿Cuánto tiempo demora el desarrollo y puesta en marcha?",
    a: "Una Landing Page profesional suele completarse en 7 a 14 días hábiles. Una Tienda Online o E-Commerce requiere de 2 a 4 semanas, y un Sistema CRM o software de gestión a medida depende de la complejidad de los módulos (habitualmente entre 3 y 8 semanas con entregas por etapas funcionales).",
  },
  {
    q: "¿Puedo administrar mi propia tienda o consultar los datos del CRM?",
    a: "Sí, absolutamente. Te entregamos un panel de control intuitivo y adaptado para que puedas actualizar productos, modificar precios, ver clientes y revisar estadísticas sin depender de conocimientos técnicos.",
  },
  {
    q: "¿El sitio y los sistemas funcionan bien en teléfonos celulares?",
    a: "Todos nuestros desarrollos se construyen bajo un enfoque Mobile-First estricto. Esto garantiza que la experiencia táctil, la velocidad y la legibilidad en smartphones (iPhone y Android) sean impecables.",
  },
  {
    q: "¿Se pueden integrar medios de pago como Mercado Pago o bancos locales?",
    a: "Totalmente. Integramos pasarelas de pago seguras (Mercado Pago, tarjetas de crédito/débito, transferencias automáticas) para que recibas el dinero directamente en tus cuentas comerciales.",
  },
  {
    q: "¿Qué necesito para comenzar mi proyecto?",
    a: "Solo necesitás completar el formulario de solicitud en esta web o escribirnos por WhatsApp con tu idea o necesidad. Nos encargamos de guiarte paso a paso en el relevamiento de contenidos, estructura y diseño.",
  },
  {
    q: "¿Puedo ampliar el sistema con nuevas funciones en el futuro?",
    a: "Sí. Toda nuestra arquitectura de software se diseña de manera modular y escalable en Next.js y bases de datos relacionales, permitiendo añadir nuevas sucursales, facturación electrónica o automatizaciones cuando tu empresa lo requiera.",
  },
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-24 bg-[#060714] border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-950/70 border border-violet-500/30 text-violet-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-violet-400" />
            Preguntas Frecuentes
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Resolvemos tus Dudas Comerciales
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Transparencia total antes de iniciar cualquier desarrollo.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-white/10 bg-[#0d0e24]/80 backdrop-blur-md overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left text-base sm:text-lg font-medium text-white hover:text-violet-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4">{item.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-violet-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-violet-300" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-white/5">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

