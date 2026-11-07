# CDByte — Desarrollo de Software, E-Commerce y Webs Comerciales

Web comercial de alta conversión y presentación de soluciones digitales de **CDByte**:
- **Sistemas CRM & Software de Gestión a Medida**
- **E-Commerce y Tiendas Online**
- **Landing Pages Profesionales de Alta Conversión**
- **Sistemas de Turnos & Reservas Online**
- **Cotizadores & Calculadoras Web Interactivas**
- **Rediseño Express & Optimización de Velocidad**

Desarrollado bajo las directivas de las reglas de arquitectura y diseño:
- `01-diseno-visual-responsive.md`: Dark theme, cúpula hero dome glow, glassmorphism, tipografía con `next/font/google` (`Inter` + `Plus Jakarta Sans`), carrusel interactivo desacoplado y enfoque Mobile-First.
- `02-arquitectura-y-estructura-del-proyecto.md`: Separación estricta de capas, TypeScript estricto, configuración centralizada, componentes primitivos reutilizables (`Button`, `SectionHeader`), persistencia autoritativa en Supabase y variables protegidas en servidor.
- `03-proyecto-estudio-digital-y-captacion.md`: Presentación clara de los tres pilares comerciales, estimador interactivo de proyectos, planes de acompañamiento, página legal de privacidad (`/privacidad`) y flujo real de captación conectado a base de datos relacional y notificaciones asíncronas vía Telegram.

---

## 📞 Datos de Marca y Contacto Centralizados
Toda la información se gestiona desde una única fuente de verdad en `src/config/site.ts`:
- **Marca:** CDByte (`siteConfig.name`)
- **CTA Principal:** "Contar mi proyecto" (`siteConfig.primaryCta`)
- **WhatsApp Directo:** +54 9 291 578-2848 (`WHATSAPP_NUMBER`)
- **Email:** `diazcarloscrd@gmail.com`

---

## 🚀 Puesta en Marcha Local

### Requisitos Previos
- Node.js 18.18+ o superior
- npm

### 1. Instalación de dependencias
```bash
npm install
```

### 2. Variables de Entorno
Copiar el archivo de ejemplo y configurar las credenciales:
```bash
cp .env.example .env.local
```
Variables configurables:
- `SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_URL`: URL del proyecto en Supabase.
- `SUPABASE_SERVICE_ROLE_KEY`: Llave privada de servidor para Route Handlers (`"server-only"`).
- `TELEGRAM_BOT_TOKEN`: Token de bot de Telegram para alertas de nuevos leads (opcional).
- `TELEGRAM_CHAT_ID`: ID del chat de Telegram receptor (opcional).
- `UPSTASH_REDIS_REST_URL` y `UPSTASH_REDIS_REST_TOKEN`: Para rate limiting distribuido persistente (opcional).

### 3. Ejecución en desarrollo
```bash
npm run dev
```
Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

### 4. Verificación y Compilación de Producción
```bash
# Verificación de linter (0 advertencias, 0 errores)
npm run lint

# Verificación de tipado estricto
npx tsc --noEmit

# Compilación optimizada para producción
npm run build
```

---

## 🗄️ Base de Datos y Migraciones (Supabase / PostgreSQL)

Las migraciones se encuentran en `supabase/migrations/`:
1. `20261106_create_leads_table.sql`:
   - Creación de la tabla `public.leads`.
   - Índices estratégicos en `created_at`, `status`, `service_type` y `email`.
   - Trigger automático para actualización de `updated_at`.
2. `20261107_harden_leads_security.sql`:
   - Agrega columna `consent_at` timestamptz.
   - Restricciones `CHECK` para `service_type` (`crm`, `ecommerce`, `landing`, `turnos`, `cotizador`, `rediseno`, `other`) y `status` (`new`, `reviewing`, `contacted`, `quoted`, `won`, `archived`).
   - Política restrictiva de RLS que bloquea cualquier acceso o manipulación anónima directa. Las inserciones se efectúan exclusivamente desde el servidor autenticado con `SUPABASE_SERVICE_ROLE_KEY`.

---

## 🛡️ Seguridad y Anti-Abuso
- **Doble Defensa Anti-Bot:** Honeypot (campo trampa) y verificación de tiempo mínimo de llenado (mínimo 2.5 segundos para evitar bots automáticos).
- **Control de Carga:** Límite estricto de 16 KB en el body y verificación de `Content-Type: application/json`.
- **Rate Limiting:** Detección de IP mediante cabeceras autoritativas (`x-real-ip` / `x-vercel-forwarded-for`).
- **Persistencia Confiable:** Si la base de datos no está disponible, la API responde HTTP `503` informando el inconveniente de forma segura y el formulario preserva los datos para que el usuario pueda enviarlos por WhatsApp sin reescribir.
