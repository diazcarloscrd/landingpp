import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Code2, Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#04050d] border-t border-violet-950/40 text-slate-400 pt-16 pb-24 sm:pb-14 overflow-hidden">
      {/* Luz ambiental sutil de fondo */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-violet-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/5">
          {/* Columna Marca */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 text-white">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-violet-600 to-indigo-600 flex items-center justify-center">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                CD<span className="text-violet-400">Byte</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Desarrollo ágil de software, tiendas online y sitios web comerciales a medida. Trato directo 1 a 1 para crear herramientas que potencian tus ventas y ordenan tu operación.
            </p>
            <div className="pt-1 flex flex-wrap items-center gap-2">
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp: {siteConfig.contact.phoneDisplay}</span>
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
              >
                <Mail className="w-3.5 h-3.5 text-violet-400" />
                <span>{siteConfig.contact.email}</span>
              </a>
            </div>
          </div>

          {/* Columna Servicios */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Soluciones
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="#servicios" className="hover:text-violet-400 transition-colors">
                  Landing Pages Profesionales
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="hover:text-violet-400 transition-colors">
                  E-Commerce & Tiendas Online
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="hover:text-violet-400 transition-colors">
                  Sistemas CRM a Medida
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="hover:text-violet-400 transition-colors">
                  Sistemas de Turnos & Reservas
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="hover:text-violet-400 transition-colors">
                  Cotizadores Interactivos Web
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="hover:text-violet-400 transition-colors">
                  Rediseño Express & Velocidad
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna Herramientas y Secciones */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Navegación
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="#demos" className="hover:text-violet-400 transition-colors">
                  Carrusel de Proyectos & Demos
                </Link>
              </li>
              <li>
                <Link href="#calculadora" className="hover:text-violet-400 transition-colors">
                  Calculadora de Presupuesto
                </Link>
              </li>
              <li>
                <Link href="#rubros" className="hover:text-violet-400 transition-colors">
                  Soluciones por Rubro
                </Link>
              </li>
              <li>
                <Link href="#mantenimiento" className="hover:text-violet-400 transition-colors">
                  Planes de Mantenimiento
                </Link>
              </li>
              <li>
                <Link href="#presupuesto" className="hover:text-violet-400 transition-colors">
                  Solicitar Presupuesto Formal
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna Contacto Directo */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Contacto Directo
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-violet-300 break-all"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 font-medium text-slate-200"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed">{siteConfig.contact.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            © {new Date().getFullYear()} {siteConfig.name} ({siteConfig.legalName}). Todos los derechos reservados.
          </p>
          <div className="flex items-center space-x-6">
            <Link href="#presupuesto" className="hover:text-slate-300 transition-colors">
              Privacidad y Protección de Datos
            </Link>
            <Link href="#faq" className="hover:text-slate-300 transition-colors">
              Preguntas Frecuentes
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
