# Arquitectura del Sistema — CDByte Soluciones Digitales

## 1. Visión General
El proyecto es una aplicación web comercial moderna orientada a la captación de oportunidades comerciales de alta conversión para CDByte, estudio de desarrollo de software especializado en:
1. **Sistemas CRM y software de gestión operativa a medida.**
2. **E-Commerce y tiendas online integradas.**
3. **Landing pages profesionales de alta conversión.**
4. **Sistemas complementarios:** Turneros web, cotizadores interactivos y rediseño express.

## 2. Stack Tecnológico
- **Framework:** Next.js 15 (App Router, React 19).
- **Lenguaje:** TypeScript estricto con validaciones en límites de confianza.
- **Tipografía:** `next/font/google` con `Inter` (cuerpo) y `Plus_Jakarta_Sans` (títulos y display).
- **Estilos:** Tailwind CSS con tokens de diseño, fondos alternados y compatibilidad estricta con `prefers-reduced-motion`.
- **Iconografía:** Lucide React y SVG oficiales optimizados (WhatsApp).
- **Estado compartido de UI:** `QuoteContext` (React Context nativo y liviano para transferir selecciones del Estimador y Mantenimiento al Formulario sin recarga de página).
- **Backend & API:** Next.js Route Handlers (`src/app/api/quote/route.ts`), validación estricta, control de tamaño de payload (16 KB), honeypot anti-spam + control de tiempo mínimo de llenado, y rate limiting persistente.
- **Base de Datos & Persistencia:** Supabase (PostgreSQL) con políticas Row Level Security (RLS) estrictas y acceso exclusivo vía `SUPABASE_SERVICE_ROLE_KEY` en servidor.
- **Notificaciones:** Despacho asíncrono no bloqueante vía `after()` de Next.js hacia bot de Telegram con escape de caracteres HTML.

## 3. Estructura del Proyecto (Regla 02 y Auditoría)
```text
LandingPP/
├── docs/
│   ├── architecture/       # system-architecture.md
│   ├── design/             # visual-system.md y reference-analysis.md
│   └── operations/         # audit-report.md
├── src/
│   ├── app/
│   │   ├── api/quote/      # Endpoint seguro para recepción de presupuestos
│   │   ├── privacidad/     # Página pública de aviso de privacidad (/privacidad)
│   │   ├── icon.tsx        # Favicon dinámico de marca CDByte
│   │   ├── opengraph-image.tsx # Tarjeta Open Graph dinámica (1200x630)
│   │   ├── layout.tsx      # Configuración de fuentes, metadatos y locale es_AR
│   │   ├── page.tsx        # Landing comercial modular
│   │   ├── globals.css     # Tokens CSS, scrollbar oscura y animaciones
│   │   └── robots.ts, sitemap.ts # SEO Técnico con indexación de / y /privacidad
│   ├── components/
│   │   ├── layout/         # Header con scroll-spy, Footer limpio, FloatingWhatsApp condicional
│   │   ├── sections/       # Hero, Services, Demos, Estimador, Rubros, Proceso, Mantenimiento, FAQ, Formulario
│   │   │   └── quote/      # Subcomponentes: ServiceSelector, MessageInput, ContactFields, BudgetTimelineFields, SuccessScreen
│   │   ├── interactive/    # ProjectCarousel y subdemos modulares:
│   │   │   └── demos/      # CrmDemo, EcommerceDemo, LandingDemo, TurnosDemo, CotizadorDemo, RedisenoDemo
│   │   └── ui/             # Primitives: Button (variantes y accesibilidad), SectionHeader
│   ├── config/             # Configuración centralizada de marca (site.ts) y opciones (quote-options.ts)
│   ├── context/            # QuoteContext para precarga reactiva de presupuestos
│   ├── hooks/              # useQuoteForm (manejo de estado, validación y envío de leads)
│   ├── lib/                # supabase.ts (server-only), rate-limit.ts, validation.ts, notifications.ts
│   └── types/              # quote.ts (tipos estrictos y constantes de listas blancas)
├── supabase/
│   └── migrations/         # 20261106_create_leads_table.sql y 20261107_harden_leads_security.sql
├── .agents/rules/          # Reglas obligatorias del workspace (01, 02, 03)
├── .env.example            # Variables de entorno documentadas sin secretos
└── README.md
```

## 4. Estrategia de CTA y Conversión (Regla de 3 Niveles)
1. **CTA Persistente:** Botón "Contar mi proyecto" en el Header y botón flotante de WhatsApp (sin burbuja de texto fija, oculto en Hero y sobre `#presupuesto`).
2. **CTA Fuertes (Solo 3 en toda la página):**
   - **Hero:** "Contar mi proyecto" (lleva a `#presupuesto`).
   - **Estimador:** "Enviar esta estimación" (precarga datos y lleva a `#presupuesto`).
   - **Formulario:** "Enviar solicitud de presupuesto" (submit autorizado).
3. **Exploración Interna:** Enlaces de texto que conectan secciones entre sí sin cortar la lectura:
   - Demos → Servicio correspondiente (`#servicio-<id>`).
   - Servicios → Demos interactivas (`#demos`) y Estimador (`#estimador`).
   - Rubros → Solución recomendada en Servicios (`#servicio-<id>`).
   - Proceso → Planes de mantenimiento (`#mantenimiento`).
   - Planes → Precarga del plan en el formulario (`#presupuesto`).
   - FAQ → Contacto en el formulario (`#presupuesto`).

## 5. Seguridad y Persistencia en Backend
- **Acceso Exclusivo de Servidor:** `supabase.ts` tiene la directiva `"server-only"` y utiliza exclusivamente `SUPABASE_SERVICE_ROLE_KEY`. Ninguna credencial privada llega al cliente.
- **Sin Pérdida Silenciosa de Leads:** Se eliminó el almacenamiento en disco local (`fs`), incompatible con entornos serverless efímeros como Vercel. Si Supabase no está configurado o falla la conexión, la API responde con código HTTP `503 Service Unavailable`, mensaje claro y seguro, y el formulario preserva los datos para que el usuario no pierda su progreso.
- **Detección Anti-Bot Doble:**
  - Honeypot: Campo oculto para atrapar bots automáticos.
  - Tiempo mínimo de llenado: Requiere al menos 2.5 segundos entre la carga del formulario y el envío.
- **Rate Limiting:** Detección de IP mediante cabeceras autoritativas (`x-real-ip`, `x-vercel-forwarded-for`, `x-forwarded-for`) con soporte para Upstash Redis y memoria local.
- **RLS y Restricciones:** Migración `20261107_harden_leads_security.sql` con políticas restrictivas que impiden lectura o modificación pública y restricciones `CHECK` en columnas `service_type` y `status`.
