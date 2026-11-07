import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Code2, Mail, Phone, MapPin } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#04050d] border-t border-violet-950/40 text-slate-400 pt-16 pb-20 sm:pb-12 overflow-hidden">
      {/* Luz ambiental sutil de fondo */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-violet-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/5">
          {/* Columna Marca */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 text-white" aria-label={`${siteConfig.name} Inicio`}>
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-violet-600 to-indigo-600 flex items-center justify-center">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white font-display">
                CD<span className="text-violet-400">Byte</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Desarrollo de software a medida, tiendas online y landing pages profesionales. Trato directo 1 a 1 para crear plataformas rápidas que aumentan tus ventas y ordenan tu operación.
            </p>
            <p className="text-xs text-slate-500">
              {siteConfig.contact.location}
            </p>
          </div>

          {/* Columna Soluciones */}
          <div>
            <h3 className="text-xs font-semibold text-white tracking-wider uppercase mb-4">
              Soluciones
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="#servicio-crm" className="hover:text-violet-400 transition-colors">
                  Sistemas CRM & Gestión
                </Link>
              </li>
              <li>
                <Link href="#servicio-ecommerce" className="hover:text-violet-400 transition-colors">
                  E-Commerce & Tiendas
                </Link>
              </li>
              <li>
                <Link href="#servicio-landing" className="hover:text-violet-400 transition-colors">
                  Landing Pages
                </Link>
              </li>
              <li>
                <Link href="#servicio-turnos" className="hover:text-violet-400 transition-colors">
                  Sistemas de Turnos
                </Link>
              </li>
              <li>
                <Link href="#servicio-cotizador" className="hover:text-violet-400 transition-colors">
                  Cotizadores Web
                </Link>
              </li>
              <li>
                <Link href="#servicio-rediseno" className="hover:text-violet-400 transition-colors">
                  Rediseño Express
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna Navegación */}
          <div>
            <h3 className="text-xs font-semibold text-white tracking-wider uppercase mb-4">
              Navegación
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="#demos" className="hover:text-violet-400 transition-colors">
                  Demos Interactivas
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="hover:text-violet-400 transition-colors">
                  Servicios y Alcances
                </Link>
              </li>
              <li>
                <Link href="#estimador" className="hover:text-violet-400 transition-colors">
                  Estimador de Proyectos
                </Link>
              </li>
              <li>
                <Link href="#rubros" className="hover:text-violet-400 transition-colors">
                  Soluciones por Rubro
                </Link>
              </li>
              <li>
                <Link href="#proceso" className="hover:text-violet-400 transition-colors">
                  Metodología de Trabajo
                </Link>
              </li>
              <li>
                <Link href="#mantenimiento" className="hover:text-violet-400 transition-colors">
                  Planes de Acompañamiento
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-violet-400 transition-colors">
                  Preguntas Frecuentes
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna Contacto Directo (como texto claro) */}
          <div>
            <h3 className="text-xs font-semibold text-white tracking-wider uppercase mb-4">
              Contacto Directo
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-violet-300 break-all text-xs sm:text-sm"
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
                  className="hover:text-emerald-300 font-medium text-slate-200 text-xs sm:text-sm"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-400 leading-relaxed">
                  {siteConfig.contact.businessHours}
                </span>
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
            <Link href="/privacidad" className="hover:text-slate-300 transition-colors">
              Aviso de Privacidad
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
