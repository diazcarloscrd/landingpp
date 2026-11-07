import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Sparkles, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#04050d] border-t border-violet-950/40 text-slate-400 pt-16 pb-12 overflow-hidden">
      {/* Luz ambiental sutil de fondo */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-violet-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/5">
          {/* Columna Marca */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 text-white">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-violet-600 to-indigo-600 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                {siteConfig.name}
              </span>
            </Link>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Diseño y desarrollo de plataformas digitales integrales. Creamos herramientas tecnológicas a medida que potencian las ventas y ordenan la operación de profesionales y empresas.
            </p>
            <div className="pt-2 text-xs text-slate-500">
              Marca provisional editable • {siteConfig.legalName}
            </div>
          </div>

          {/* Columna Servicios */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Servicios
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
                  Automatización de Procesos
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna Soluciones */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Rubros
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="#rubros" className="hover:text-violet-400 transition-colors">
                  Profesionales & Estudios
                </Link>
              </li>
              <li>
                <Link href="#rubros" className="hover:text-violet-400 transition-colors">
                  Gastronomía & Restaurantes
                </Link>
              </li>
              <li>
                <Link href="#rubros" className="hover:text-violet-400 transition-colors">
                  Comercios & Retail
                </Link>
              </li>
              <li>
                <Link href="#rubros" className="hover:text-violet-400 transition-colors">
                  Constructoras & PYMES
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna Contacto */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Contacto
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-violet-400 shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-violet-300">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-violet-400 shrink-0" />
                <a href={siteConfig.contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-violet-300">
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                <span>{siteConfig.contact.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.
          </p>
          <div className="flex items-center space-x-6">
            <a href="#privacidad" className="hover:text-slate-300 transition-colors">
              Política de Privacidad
            </a>
            <a href="#terminos" className="hover:text-slate-300 transition-colors">
              Términos del Servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

