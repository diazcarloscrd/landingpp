# Arquitectura del Sistema — Estudio de Desarrollo Digital

## 1. Visión General
El proyecto es una aplicación web moderna orientada a la captación de oportunidades comerciales de alta conversión para un estudio digital especializado en:
1. Landing pages y webs profesionales para profesionales y empresas.
2. Tiendas online y e-commerce a medida (retail, gastronomía, servicios).
3. Sistemas CRM y plataformas de software de gestión personalizada.

## 2. Stack Tecnológico
- **Framework:** Next.js (App Router, React 19 / Server Components + Client Components).
- **Lenguaje:** TypeScript estricto.
- **Estilos:** Tailwind CSS v4, animaciones CSS personalizadas con soporte para `prefers-reduced-motion`.
- **Iconografía:** Lucide React (vectorial moderna, semántica y ligera).
- **Backend & API:** Next.js Route Handlers (`src/app/api/quote/route.ts`), validación estricta con esquemas Zod, rate limiting y honeypot anti-spam.
- **Base de Datos & Persistencia:** Supabase (PostgreSQL) con fallback seguro local y políticas RLS restrictivas.
- **Notificaciones:** Módulo desacoplado para alertas instantáneas (Telegram Bot / Webhook).

## 3. Estructura de Directorios (Regla 02)
```text
LandingPP/
├── docs/
│   ├── architecture/       # Documentación técnica y de flujos
│   └── design/             # Tokens, sistema visual y análisis de referencia
├── src/
│   ├── app/
│   │   ├── api/quote/      # Endpoint seguro para recepción de presupuestos
│   │   ├── layout.tsx      # Metadatos, fuentes y estructura base
│   │   ├── page.tsx        # Landing comercial integral
│   │   ├── globals.css     # Variables CSS, efectos dome glow y utilidades
│   │   └── robots.ts, sitemap.ts # SEO Técnico
│   ├── components/
│   │   ├── layout/         # Header flotante, Footer, MobileNav
│   │   ├── sections/       # Hero, Services, Industries, Demos, Process, FAQ, QuoteCTA
│   │   ├── interactive/    # InteractiveDashboard, DemoTabs, IndustryFilter
│   │   └── ui/             # Botones, Chips, Card, Badge, Modal, Input, Textarea
│   ├── config/             # Marca provisional centralizada, canales de contacto y SEO
│   ├── lib/                # Clientes Supabase, rate-limiting, validadores y utilidades
│   └── types/              # Tipos TypeScript para leads, servicios y opciones
├── supabase/
│   └── migrations/         # Migración SQL de tabla `leads` con RLS y constraints
├── .agents/rules/          # Reglas obligatorias de gobernanza
├── .env.example            # Guía de variables sin secretos
├── package.json
└── README.md
```

## 4. Flujo de Datos del Formulario de Presupuesto
1. **Cliente:** Formulario interactivo multipaso/dinámico según servicio seleccionado (`src/components/sections/QuoteForm.tsx`).
2. **Validación Cliente:** Verificación inmediata de formato, longitud, campos requeridos y prevención de doble clic.
3. **Endpoint (`/api/quote`):**
   - Validación honeypot anti-spam (campo trampa para bots).
   - Rate limiting por IP (máximo de solicitudes por ventana temporal).
   - Validación exhaustiva de tipos, campos y longitud con Zod o validador tipado.
   - Normalización de cadenas y sanitización.
4. **Persistencia:**
   - Inserción en tabla `leads` en Supabase con clave `service_role` protegida del lado servidor.
   - O fallback en base de datos local / registro estructurado en caso de no haber credenciales activas.
5. **Notificación:**
   - Disparo asíncrono a bot de Telegram si `TELEGRAM_BOT_TOKEN` y `TELEGRAM_CHAT_ID` están configurados.
6. **Respuesta al Cliente:**
   - Respuesta HTTP JSON limpia con confirmación, ID de seguimiento y pasos a seguir.

