# Sistema de Diseño Visual — CDByte

## 1. Tokens de Color & Ritmo Visual
Para evitar la monotonía de tarjetas idénticas y dotar de cadencia a la página, los fondos se alternan intencionalmente según el contenido:

- **Hero:** `#060714` con resplandor superior cúpula (`hero-dome-glow`).
- **Servicios:** `#060714` con tres pilares destacados en tarjetas de alta jerarquía y extensiones secundarias compactas.
- **Demos:** `#070817` con panel de simulación tipo app con pestaña activa y controles interactivos.
- **Estimador:** `#08091a` con acentos en violeta y esmeralda y glow focalizado.
- **Rubros:** `#060714` con selector de pestañas pill y tarjetas comparativas de problema/solución.
- **Proceso:** `#07091e` con sutil trama micro-reticular para diferenciar la metodología del resto.
- **Mantenimiento:** `#060715` con acentos en esmeralda para evocar estabilidad y tranquilidad.
- **FAQ:** `#070817` con acordeones sobrios sin sobrecarga visual.
- **Formulario:** `#060714` con resplandor focalizado para dirigir la atención a la conversión final.

## 2. Tipografía Oficial (`next/font/google`)
- **Fuente de Lectura (Sans):** `Inter` (`latin`, variable `--font-sans`). Máxima legibilidad en pantallas de cualquier densidad y resolución.
- **Fuente de Títulos (Display):** `Plus_Jakarta_Sans` (`latin`, variable `--font-display`). Tipografía geométrica, contemporánea y con presencia técnica para encabezados de alto impacto.

## 3. Componentes Primitivos Reutilizables
- **`src/components/ui/Button.tsx`:**
  - `primary`: Gradiente violeta-índigo con sombra luminosa (`shadow-[0_0_24px_rgba(139,92,246,0.45)]`), píldora o redondeado según tamaño.
  - `secondary`: Superficie de vidrio oscura (`bg-white/5`), borde sutil y texto claro.
  - `ghost`: Sin borde ni fondo por defecto; revela sutileza al hover.
  - `whatsapp`: Estilo esmeralda oficial con brillo controlado (`bg-emerald-500/15`, borde y texto esmeralda).
  - Accesibilidad: Foco visible explícito (`focus-visible:ring-2`), soporte de estados `disabled` y microinteracción `active:scale-95`.
- **`src/components/ui/SectionHeader.tsx`:**
  - Badge píldora con ícono y texto en mayúsculas pequeñas.
  - Título con `font-display`, peso extrabold y gradiente de acento.
  - Subtítulo fluido con `text-slate-300` y ancho máximo de lectura controlada.

## 4. Identidad de Marca y Medios
- **Favicon dinámico:** `src/app/icon.tsx` (PNG 32x32 generado por servidor con monograma de código sobre gradiente).
- **Open Graph dinámico:** `src/app/opengraph-image.tsx` (PNG 1200x630 optimizado para previsualizaciones en WhatsApp, LinkedIn, Twitter y Google con fondo obsidiana, tipografía oficial y beneficios clave).
- **Icono oficial de WhatsApp:** Componente vectorial `WhatsAppIcon` sin dependencias de fuentes externas.

## 5. Accesibilidad y Rendimiento
- **Foco visible:** Anillos de foco violeta y esmeralda de 2px en todos los botones, enlaces y campos de formulario.
- **Contraste:** Texto blanco y `text-slate-300` sobre fondos `#060714` / `#0c0d24`, superando ratio 4.5:1 (WCAG AA).
- **Movimiento Reducido:** `@media (prefers-reduced-motion: reduce)` desactiva animaciones y transiciones extensas para usuarios con sensibilidad vestibular.
