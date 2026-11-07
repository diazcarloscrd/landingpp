# Sistema de Diseño Visual — NovaStudio Digital

## 1. Tokens de Color (CSS Variables & Tailwind)

### Base & Superficies
- `--bg-base`: `#05060f` (Negro obsidiana / espacio profundo)
- `--bg-surface-card`: `rgba(18, 19, 40, 0.7)` (Vidrio tintado)
- `--bg-surface-subtle`: `rgba(25, 27, 56, 0.5)`
- `--bg-surface-hover`: `rgba(35, 38, 78, 0.65)`

### Paleta Principal & Acentos
- `--color-primary`: `#8b5cf6` (Violet 500)
- `--color-primary-hover`: `#7c3aed` (Violet 600)
- `--color-secondary`: `#6366f1` (Indigo 500)
- `--color-accent-cyan`: `#06b6d4` (Cyan 500)
- `--color-accent-glow`: `rgba(139, 92, 246, 0.35)`

### Tipografía
- `--text-heading`: `#ffffff` (Blanco luminoso)
- `--text-body`: `#94a3b8` (Slate 400 - Alta legibilidad sobre oscuro)
- `--text-muted`: `#64748b` (Slate 500)
- `--text-highlight`: `#c4b5fd` (Violet 300)

### Bordes & Separadores
- `--border-subtle`: `rgba(255, 255, 255, 0.08)`
- `--border-glow`: `rgba(139, 92, 246, 0.3)`
- `--border-highlight`: `rgba(168, 85, 247, 0.5)`

## 2. Efectos & Glassmorphism
- **Backdrop Blur:** `backdrop-blur-md` (12px) y `backdrop-blur-xl` (24px).
- **Sombras de Acento:** `0 0 35px -5px rgba(139, 92, 246, 0.35)`.
- **Hero Dome:** Gradiente elíptico radial `radial-gradient(circle at 50% -20%, rgba(139, 92, 246, 0.38), transparent 70%)`.
- **Bordes Bioluminiscentes:** Borde de 1px con gradiente angular o gradiente lineal traslúcido.

## 3. Tipografía
- **Familia Primaria:** Inter, Plus Jakarta Sans o Geist Sans (moderna, geométrica, neutra).
- **Display Headings:** Tracking tight (`-0.03em`), line-height ajustado (`leading-tight` a `leading-none`).
- **Body:** `leading-relaxed` (1.625), tamaño base `16px` (desktop), `15px` (móvil).

## 4. Componentes Clave
- **Botón CTA Primario:** Fondo gradiente violeta-índigo, píldora redonda (`rounded-full`), glow púrpura sutil, flecha animada al hover.
- **Botón CTA Secundario:** Fondo semi-transparente, borde sutil, texto blanco, efecto de brillo al interactuar.
- **Tarjetas de Servicio:** Borde con glow violeta, badges luminosos, micro-ilustraciones vectoriales interactivas.
- **Formulario de Presupuesto:** Inputs oscuros translúcidos con foco en violeta brillante, selector dinámico de servicios y validaciones inmediatas.

