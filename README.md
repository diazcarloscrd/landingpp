# CDByte — Desarrollo Ágil de Software, E-Commerce y Webs Comerciales

Sitio comercial de alta conversión y presentación de soluciones digitales de **CDByte**:
- **Landing Pages Profesionales**
- **E-Commerce y Tiendas Online**
- **Sistemas CRM & Software de Gestión a Medida**
- **Sistemas de Turnos & Reservas Online**
- **Cotizadores & Calculadoras Web Interactivas**
- **Rediseño Express & Optimización de Velocidad**

Desarrollado bajo las directivas de las reglas de arquitectura y diseño:
- `01-diseno-visual-responsive.md`: Dark theme bioluminiscente, cúpula hero glow, glassmorphism, carrusel interactivo en vivo y enfoque Mobile-First.
- `02-arquitectura-y-estructura-del-proyecto.md`: Separación de capas, TypeScript estricto, configuración centralizada, persistencia segura y manejo de variables de entorno.
- `03-proyecto-estudio-digital-y-captacion.md`: Presentación comercial clara, calculadora rápida de proyectos, planes de mantenimiento y sistema real de captación de leads conectado a base de datos y WhatsApp directo.

---

## 📞 Datos de Contacto Configurados
- **Marca:** CDByte (`src/config/site.ts`)
- **WhatsApp Directo:** +54 9 291 578-2848 (`2915782848`)
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
Variables disponibles:
- `NEXT_PUBLIC_SUPABASE_URL`: URL del proyecto de Supabase.
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Llave pública anónima de Supabase.
- `SUPABASE_SERVICE_ROLE_KEY`: Llave privada del servidor para inserciones seguras en backend.
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
- Inserción protegida desde API Route (`/api/quote`).
- Bloqueo total de lectura pública para proteger los datos de clientes.
- Soporte para todos los tipos de servicio (`landing`, `ecommerce`, `crm`, `turnos`, `cotizador`, `rediseno`, `other`) y sugerencias seleccionadas en `project_details`.

---

## 🛡️ Seguridad y Anti-Abuso
- **Honeypot:** Campo trampa invisible que descarta solicitudes de bots automatizados.
- **Rate Limiting:** Control de peticiones concurrentes por IP.
- **Sanitización y Validación:** Validación tanto en cliente como en servidor (`src/lib/validation.ts`).
- **Fallback de almacenamiento:** Si Supabase no está configurado, las solicitudes se guardan de forma estructurada en el servidor y ofrecen canal inmediato a WhatsApp.
