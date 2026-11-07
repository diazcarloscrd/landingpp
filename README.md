# NovaStudio — Estudio de Desarrollo Digital y Soluciones Empresariales

Sitio comercial de alta conversión y presentación de servicios tecnológicos: **Landing Pages Profesionales**, **E-Commerce y Tiendas Online** y **Sistemas CRM & Software de Gestión a Medida**.

Desarrollado bajo las directivas de las reglas de arquitectura y diseño:
- `01-diseno-visual-responsive.md`: Inspirado en la referencia visual de dark theme bioluminiscente, cúpula hero glow, glassmorphism y microinteracciones de alta fidelidad.
- `02-arquitectura-y-estructura-del-proyecto.md`: Separación de capas, TypeScript estricto, persistencia segura y manejo de variables de entorno.
- `03-proyecto-estudio-digital-y-captacion.md`: Presentación de los 3 pilares comerciales y sistema real de captación de leads con base de datos, validación y notificaciones.

---

## 🚀 Puesta en Marcha Local

### Requisitos Previos
- Node.js 18.18+ o superior (probado con v24)
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
Las variables disponibles:
- `NEXT_PUBLIC_SUPABASE_URL`: URL del proyecto de Supabase.
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Llave pública anónima de Supabase.
- `SUPABASE_SERVICE_ROLE_KEY`: Llave privada del servidor para inserciones seguras que eluden RLS en backend.
- `TELEGRAM_BOT_TOKEN`: Token de bot de Telegram para alertas de nuevos leads (opcional).
- `TELEGRAM_CHAT_ID`: ID del chat de Telegram receptor (opcional).

### 3. Ejecución en desarrollo
```bash
npm run dev
```
Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

### 4. Compilación de producción
```bash
npm run build
npm run start
```

---

## 🗄️ Esquema de Base de Datos (Supabase / PostgreSQL)

El script SQL de migración se encuentra en:
`supabase/migrations/20261106_create_leads_table.sql`

Crea la tabla `public.leads` con:
- Row Level Security (RLS) habilitado.
- Inserción protegida desde API Route.
- Bloqueo total de lectura pública para proteger los datos de clientes.
- Índices en `created_at`, `status`, `service_type` y `email`.

---

## 🛡️ Seguridad y Anti-Abuso
- **Honeypot:** Campo trampa invisible que descarta solicitudes de bots automatizados.
- **Rate Limiting:** Control de peticiones concurrentes por IP.
- **Sanitización:** Eliminación de etiquetas y carácteres potencialmente dañinos antes de guardar.
- **Fallback de almacenamiento:** Si Supabase no está configurado, las solicitudes se guardan como registros JSON estructurados en `docs/operations/leads-backup/` para garantizar que ninguna oportunidad comercial se pierda.

---

## 🎨 Personalización de Marca
Todos los datos institucionales (nombre comercial provisional, logotipo, teléfono, WhatsApp, email, enlaces y textos de servicios) están centralizados en:
`src/config/site.ts`
Modificando ese archivo se actualiza toda la web de forma automática.
