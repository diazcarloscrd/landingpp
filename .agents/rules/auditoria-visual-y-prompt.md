# Auditoría visual y de conversión de CDByte

## 1. Diagnóstico principal: hay demasiados CTA

Tu intuición es correcta. Conté **más de 30 botones de conversión** en una sola página:

| Zona | CTA actuales |
|---|---|
| Header (desktop + móvil) | "Pedir Presupuesto" + "WhatsApp" (×2) |
| Hero | "Solicitar Presupuesto" + "Hablar por WhatsApp" + "Estimar en 1 Minuto" |
| Carrusel de demos (dentro del Hero) | "Pedir Presupuesto" + WhatsApp **en cada slide** |
| Servicios (6 tarjetas) | "Cotizar X" + ícono de WhatsApp **por tarjeta** (12) + banner de WhatsApp |
| Calculadora | "Recibir por WhatsApp" + "Presupuesto" |
| Rubros | "Cotizar en Formulario" + "WhatsApp Directo" **por rubro** |
| Mantenimiento | WhatsApp **por plan** |
| Formulario | Enviar + WhatsApp + WhatsApp en el encabezado |
| Footer | WhatsApp ×2 + "Calculadora" + "Solicitar Presupuesto Formal" |
| Botón flotante | WhatsApp con burbuja permanente ("¿Consultas? WhatsApp Directo") |

**Efecto:** cada sección *corta* la lectura y empuja a salir antes de ver demos, proceso, mantenimiento y FAQ. Además, la palabra "Cotizar/Presupuesto" compite con tu **servicio** de "Cotizadores web", y eso confunde ("¿cotizar o comprar un cotizador?").

**Regla propuesta (la "regla de 3 niveles"):**
1. **CTA persistente:** solo el del header + el botón flotante de WhatsApp (sin burbuja de texto permanente).
2. **CTA fuertes (máx. 3 en toda la página):** Hero, cierre de la calculadora y el formulario final.
3. **Todo lo demás pasa a ser "exploración":** enlaces de texto tipo "Ver demo →", "Ver cómo funciona →", "Ver planes →" que llevan a *otra sección de la web*, no al formulario.

## 2. Hallazgos por sección

### Header
- La navegación tiene 6 ítems + 2 botones: queda cargada. "Proyectos & Demos" y "Cotizador Rápido" son nombres largos → usar **Demos · Servicios · Rubros · Proceso · Planes · FAQ**.
- Falta **Proceso** en el menú, aunque la sección existe (`#proceso`).
- Hay dos botones (WhatsApp + Presupuesto). Dejar solo **"Contar mi proyecto"**; WhatsApp ya está en el flotante.
- Agregar un indicador de sección activa (scroll-spy): así el usuario sabe que hay más contenido.

### Hero
- **Tres CTA del mismo tamaño** → parálisis de decisión. Dejar 1 primario ("Contar mi proyecto") y 1 secundario de exploración ("Ver demos ↓"). Sacar WhatsApp del Hero.
- El H1 enumera 4 productos ("Webs, E-Commerce, Turneros y CRM"): se lee como una lista. Mejor una propuesta de beneficio: *"Software y webs a medida para vender más y ordenar tu negocio"*; dejar el detalle de productos para el subtítulo.
- **"Entregas en días"** y **"Entregas ágiles asistidas por IA"** son promesas de plazo no confirmadas (Regla 03). Cambiar por "Plazos claros por etapas desde la propuesta".
- El carrusel de demos está **dentro** del Hero: hace el primer bloque larguísimo y en móvil empuja Servicios muy abajo. Sacarlo a una sección propia `#demos` después de Servicios.

### Carrusel de demos (`ProjectCarousel.tsx`, 36 KB)
- Archivo demasiado grande (cinco mockups en un mismo componente). Dividirlo en `demos/CrmDemo.tsx`, `EcommerceDemo.tsx`, etc.
- Datos como **"Constructora del Sur S.A."** o métricas de dashboard pueden leerse como clientes reales. Agregar el rótulo visible **"Datos ficticios de demostración"** en cada mockup.
- Reemplazar los 2 CTA por slide por un único enlace "¿Querés algo así? Ver el servicio →" que haga scroll a la tarjeta del servicio correspondiente.

### Servicios (6 tarjetas)
- Las 6 tarjetas tienen la misma jerarquía, pero la Regla 03 pide **tres pilares** (CRM, E-commerce, Landing). Propuesta: 3 tarjetas principales grandes + una fila de "también hacemos" con Turnos, Cotizadores y Rediseño (más chicas, como extensiones).
- Hay datos **duplicados**: `ServicesSection.tsx` tiene su propio array y `siteConfig.services` tiene otro con textos distintos. Unificar todo en `siteConfig` (una sola fuente de verdad).
- Quitar los 12 botones "Cotizar X" + WhatsApp. En cada tarjeta, dejar un enlace "Ver demo →" (hacia la slide del carrusel). Al final de la sección, un único CTA suave: "¿No sabés cuál necesitás? Usá el estimador →" (lleva a la calculadora, no al formulario).

### Calculadora
- Bien como herramienta. Es el **lugar natural** de un CTA fuerte: "Enviar esta estimación" que lleve al formulario **con los datos precargados** (servicio + módulos elegidos). Hoy solo arma un mensaje de WhatsApp y el formulario no recibe nada.
- Renombrar la sección a **"Estimador"** para que no choque con el servicio "Cotizadores web".

### Rubros
- Sacar los dos botones por rubro. Reemplazarlos por "Solución recomendada: CRM a medida → ver servicio". Así esta sección *conecta* con el resto de la web en lugar de cerrarla.

### Proceso
- Correcta, pero no está en el menú. Sumar una línea final: "Y después de la entrega → planes de mantenimiento" con enlace a `#mantenimiento` (une dos secciones).

### Mantenimiento
- Un WhatsApp por plan es razonable *solo* si el visitante ya decidió. Cambiar por un botón neutro "Consultar este plan" que abra el formulario con el plan precargado en `message`, o dejar un único CTA debajo de los planes.

### FAQ
- Agregar preguntas sobre dominio, hosting, contenidos y quién es el dueño del código (algunas faltan según la Regla 03). Al final, un enlace de texto: "¿Otra duda? Escribinos".

### Formulario
- Tiene 3 salidas a WhatsApp (encabezado, botón secundario, pantalla de éxito). Dejar solo la del éxito ("Si querés agilizar, escribinos") y un enlace de texto discreto.
- El archivo tiene 37 KB: separar los pasos, las sugerencias por servicio y el estado del formulario en módulos.

### Footer
- **"Privacidad y Protección de Datos" apunta a `#presupuesto`**: no existe política de privacidad. Es obligatoria (Regla 03) y el consentimiento del formulario debería enlazarla.
- Sacar "Solicitar Presupuesto Formal" y el WhatsApp duplicado; dejar los datos de contacto como texto.

### Botón flotante de WhatsApp
- La burbuja "¿Consultas? WhatsApp Directo" siempre visible tapa contenido en móvil. Mostrarla solo cuando el usuario ya hizo scroll más allá de Servicios, o directamente quitarla. Ocultar el flotante mientras el formulario está en pantalla.

### Sistema visual general
- Todas las secciones usan la misma fórmula: badge + título grande + glass card + glow violeta. Para generar ritmo, alterná fondos (`#060714` / `#070817` / una sección clara o con textura), y usá el glow fuerte solo en Hero y formulario.
- Hay muchos estilos de botón escritos a mano (gradientes y sombras repetidos en cada archivo). Crear un componente `Button` con variantes `primary | secondary | ghost | whatsapp`.
- La tipografía es del sistema (`system-ui`): cargar una fuente de marca con `next/font` (por ejemplo Inter/Geist + una display para los títulos).
- Faltan imagen Open Graph y favicon de marca (hoy es el de Next). En `public/` quedan SVG del template sin usar.
- `locale: "es_ES"` → debería ser `es_AR`.

## 3. Hallazgos de backend

| # | Problema | Riesgo |
|---|---|---|
| B1 | Si Supabase falla, guarda el lead en `docs/operations/leads-backup/` dentro del repo. En Vercel el sistema de archivos es de solo lectura → **el lead se pierde y el usuario igual ve "éxito"** | Pérdida de leads, viola Regla 03 |
| B2 | Ya hay un JSON con datos personales en `docs/operations/leads-backup/` | Datos personales podrían terminar en git |
| B3 | `supabase.ts` usa la clave anon si falta `SERVICE_ROLE` | Inserción falla silenciosamente con RLS |
| B4 | Rate limit en memoria + `x-forwarded-for` sin control → no funciona en serverless y se puede falsificar | Spam |
| B5 | `req.json()` sin límite de tamaño ni manejo de JSON inválido (devuelve 500) | Abuso / error mal tipado |
| B6 | `projectDetails` acepta cualquier objeto sin validar; `budgetRange`/`timeline` no tienen lista blanca | Basura o payloads grandes en la base |
| B7 | Telegram se dispara sin `await` ni `after()` → en serverless puede no enviarse; Markdown sin escapar | Notificaciones perdidas o rotas |
| B8 | No se guarda `consent_at`; `validateQuoteForm(data: any)`; `substr` obsoleto | Calidad / cumplimiento |
| B9 | Los IDs de servicio están repetidos en validación, formulario, servicios y config | Inconsistencia |

---

## 4. Prompt de corrección (copiar y pegar)

````text
Actuá según las reglas 01, 02 y 03 del workspace. Proyecto: landing CDByte (Next.js App Router + Tailwind + Supabase). Antes de empezar creá un commit de checkpoint. No cambies de rama. Mantené TODAS las secciones y servicios existentes (Landing, E-commerce, CRM, Turnos, Cotizadores, Rediseño, Rubros, Proceso, Mantenimiento, FAQ, Formulario): el objetivo es reorganizar y reducir la repetición, no quitar contenido.

## A. Estrategia de CTA (prioridad máxima)
1. Definí en src/config/site.ts un único texto de CTA primario: "Contar mi proyecto" (y usalo en todos los CTA primarios).
2. Aplicá la regla de 3 niveles:
   - Persistentes: botón del Header + FloatingWhatsApp.
   - CTA fuertes (solo 3): Hero, cierre del Estimador (calculadora) y Formulario.
   - Resto de la página: solo enlaces de exploración internos ("Ver demo →", "Ver servicio →", "Ver planes →").
3. Eliminá: los botones "Cotizar X" y los íconos de WhatsApp de las 6 tarjetas de Servicios; los 2 CTA por slide del carrusel; los 2 botones por rubro en IndustrySolutionsSection; el WhatsApp por plan en Mantenimiento (reemplazar por "Consultar este plan" que abre el formulario con el plan precargado); el botón WhatsApp del Hero; el WhatsApp del encabezado del formulario y el botón secundario de WhatsApp debajo del submit (dejar solo el de la pantalla de éxito); "Solicitar Presupuesto Formal" y el WhatsApp duplicado del Footer.
4. Usá "presupuesto/cotizar" solo en el formulario. Renombrá la sección de calculadora a "Estimador" (id #estimador, con redirect del ancla vieja #calculadora si hay enlaces) para no confundirla con el servicio "Cotizadores web".

## B. Header y navegación
- Nav: Demos · Servicios · Rubros · Proceso · Planes · FAQ (agregar #proceso).
- Un solo botón: "Contar mi proyecto". Quitar los WhatsApp del header (desktop y móvil).
- Scroll-spy con estado activo accesible (aria-current) en el ítem visible.

## C. Hero
- H1 orientado a beneficio (ej.: "Software y webs a medida para vender más y ordenar tu negocio"); los productos van en el subtítulo.
- Quitar "entregas en días" y "Entregas ágiles asistidas por IA" (promesas de plazo no confirmadas). Reemplazar por "Plazos claros por etapas desde la propuesta".
- CTA: primario "Contar mi proyecto" + secundario ghost "Ver demos ↓".
- Sacar ProjectCarousel del Hero y crear una sección propia DemosSection (#demos) ubicada después de Servicios.

## D. Demos
- Dividir ProjectCarousel.tsx (36 KB) en src/components/interactive/demos/{CrmDemo,EcommerceDemo,LandingDemo,TurnosDemo,CotizadorDemo,RedisenoDemo}.tsx + un contenedor.
- En cada mockup, rótulo visible "Demo con datos ficticios" (nombres como "Constructora del Sur S.A." no deben parecer clientes reales).
- Un solo enlace por slide: "¿Querés algo así? Ver el servicio →" que haga scroll a la tarjeta correspondiente en #servicios (id por servicio, ej. #servicio-crm).

## E. Servicios
- Unificar datos: eliminar el array local de ServicesSection.tsx y usar siteConfig.services como única fuente (fusionar textos, conservando los mejores).
- Jerarquía: 3 tarjetas principales grandes (CRM, E-commerce, Landing) + fila secundaria "También desarrollamos" con Turnos, Cotizadores y Rediseño.
- Cada tarjeta: problema → solución → beneficios → enlace "Ver demo →". Al final de la sección, un único enlace "¿No sabés cuál necesitás? Probá el estimador →".

## F. Estimador, Rubros, Proceso, Mantenimiento, FAQ
- Estimador: CTA fuerte "Enviar esta estimación" que haga scroll al formulario y precargue serviceType, módulos elegidos (projectDetails) y un resumen en message (usar un estado compartido liviano: contexto React o query params/hash; sin dependencias nuevas). Mantener WhatsApp como enlace secundario de texto.
- Rubros: reemplazar los botones por "Solución recomendada: <servicio> → ver servicio".
- Proceso: cerrar con un enlace a #mantenimiento ("Después de la entrega: planes de mantenimiento →").
- FAQ: agregar preguntas sobre dominio, hosting, carga de contenidos y propiedad del código, sin inventar políticas (aclarar "depende de cada proyecto"). Cierre con enlace de texto "¿Otra duda? Escribinos".

## G. Formulario
- Dividir QuoteFormSection.tsx (37 KB) en: hook useQuoteForm (estado/validación/envío), constantes de sugerencias por servicio en src/config, y subcomponentes por paso.
- Una sola salida a WhatsApp, en la pantalla de éxito.
- El checkbox de consentimiento debe enlazar a /privacidad.

## H. Footer, privacidad y flotante
- Crear la página src/app/privacidad/page.tsx con un aviso de privacidad acorde a lo que realmente se trata (datos del formulario, finalidad, Supabase como proveedor, Telegram como notificación, cómo pedir la baja a contacto.email). Indicar que no constituye asesoramiento legal certificado. Corregir el enlace del footer (hoy apunta a #presupuesto) y agregarlo al sitemap.
- Footer: contacto como texto, navegación y legales; sin CTA duplicados.
- FloatingWhatsApp: quitar la burbuja permanente; mostrar el botón solo después de pasar el Hero y ocultarlo cuando #presupuesto esté visible (IntersectionObserver). Respetar prefers-reduced-motion.

## I. Sistema visual
- Crear src/components/ui/Button.tsx con variantes primary | secondary | ghost | whatsapp y reemplazar los estilos de botón repetidos en todos los archivos.
- Crear src/components/ui/SectionHeader.tsx (badge + título + subtítulo) y reutilizarlo.
- Ritmo visual: alternar fondos entre secciones e incluir al menos una sección con tratamiento distinto (ej.: Proceso con timeline horizontal o fondo con textura); reservar el glow violeta intenso para Hero y Formulario.
- Tipografía con next/font (ej.: Inter para el texto + una display para los títulos), definida en tailwind.config como token.
- Favicon e imagen Open Graph de marca (src/app/opengraph-image.tsx); locale "es_AR"; borrar los SVG del template sin uso en /public.
- Verificar foco visible, contraste AA y que no haya desbordes en 360/390/768/1024/1440 px.

## J. Backend (src/app/api/quote, src/lib)
1. Persistencia: eliminar el respaldo en archivos (fs en docs/operations/leads-backup). Si Supabase no está configurado o falla el insert, responder 503 con mensaje seguro ("No pudimos registrar tu solicitud, escribinos por WhatsApp") y NUNCA devolver success. El formulario debe mostrar el error y conservar los datos.
2. Mover los JSON existentes en docs/operations/leads-backup fuera del repo (pedime confirmación antes de borrar), agregar esa ruta al .gitignore y revisar que no estén en el historial de git (si lo están, avisame; no reescribas el historial sin aprobación).
3. supabase.ts: usar exclusivamente SUPABASE_SERVICE_ROLE_KEY (sin fallback a la anon key) e importarlo con "server-only". Usar SUPABASE_URL de servidor si corresponde. Actualizar .env.example.
4. Rate limiting: reemplazar el Map en memoria por un limitador persistente (Upstash Redis vía Vercel Marketplace o una tabla/función en Supabase). Obtener la IP con x-real-ip / x-vercel-forwarded-for, no con el primer valor de x-forwarded-for. Si no se configura un store, documentar la limitación.
5. Parseo: verificar Content-Type, limitar el body (ej. 16 KB, por content-length y longitud real) y devolver 400 ante JSON inválido.
6. Validación: reescribir validateQuoteForm con tipos estrictos (unknown en lugar de any; idealmente zod si ya está o se justifica). Listas blancas para serviceType, budgetRange y timeline, derivadas de constantes compartidas en src/config (única fuente usada por formulario, servicios y validación). Validar projectDetails con un esquema explícito (claves permitidas, strings/booleans, tamaño máximo).
7. Honeypot: además del campo oculto, agregar un tiempo mínimo de llenado (timestamp de render firmado o validado en servidor).
8. Notificación: enviar Telegram con after() de next/server (o waitUntil de @vercel/functions) para que no se corte; escapar el texto (usar parse_mode HTML con escape o sin parse_mode). No loguear datos personales en errores.
9. Base de datos: nueva migración (no editar la existente) que agregue consent_at timestamptz not null default now() si no existe, CHECK constraints para service_type/status, y verificar que RLS esté activa sin políticas de SELECT/UPDATE/DELETE para anon/authenticated. Correr get_advisors de seguridad de Supabase.
10. Reemplazar substr por slice / crypto.randomUUID.

## K. Verificación y documentación
- Ejecutar lint, tsc y npm run build; corregir todo lo introducido.
- Probar en navegador (móvil y escritorio): navegación, scroll-spy, demos, precarga estimador → formulario, envío válido (verificar la fila en Supabase), errores, doble envío, honeypot, rate limit y el 503 con Supabase caído.
- Comprobar que ninguna clave privada esté en el bundle del cliente.
- Contar CTA finales y reportar la lista (objetivo: ≤ 6 botones de conversión visibles en total, sin contar el flotante).
- Actualizar README, docs/architecture/system-architecture.md, docs/design/visual-system.md, docs/operations (sin fallback local, rate limit, migración nueva) y .env.example.
- Entregar un resumen de lo verificado y lo pendiente.
````
