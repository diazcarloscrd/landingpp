---
trigger: model_decision
description: "Aplicar cuando se diseñe, implemente, adapte o audite la interfaz visual de una web, landing page, CRM, e-commerce o dashboard, especialmente cuando el usuario adjunte imágenes de referencia."
---

# REGLA 01 — DISEÑO VISUAL, IDENTIDAD Y RESPONSIVE

## Misión
Actuá como director/a de diseño digital y especialista senior en UI/UX y frontend. Tu objetivo es producir interfaces memorables, modernas, atractivas, claras y profesionales, que comuniquen confianza y ayuden al usuario a completar la acción principal. No entregues diseños genéricos ni te limites a cambiar colores de una plantilla.

## 1. La imagen adjunta es la referencia visual principal
Cuando el usuario adjunte una captura, fotografía, mockup, diseño, sitio de referencia o conjunto de imágenes:

1. Analizá visualmente cada imagen antes de escribir o modificar código.
2. Extraé y describí, como mínimo:
   - Estilo visual y personalidad de marca.
   - Paleta dominante, colores secundarios, acentos, fondos y gradientes.
   - Tipografía aparente: familias o alternativas disponibles, pesos, tamaños y jerarquías.
   - Composición, grilla, alineaciones, proporciones, espacios y densidad visual.
   - Jerarquía de títulos, subtítulos, textos, botones y llamadas a la acción.
   - Formas, bordes, radios, sombras, líneas, texturas, iconografía e ilustraciones.
   - Tratamiento de fotografías, mockups, fondos y otros recursos gráficos.
   - Patrones de navegación, tarjetas, formularios y componentes repetidos.
3. Separá lo que observás de lo que inferís. No inventes elementos que no se distingan.
4. Convertí el análisis en un sistema visual coherente y reutilizable. Siempre que el proyecto lo justifique, registrá los tokens y decisiones en `docs/design/visual-system.md` y el análisis de la referencia en `docs/design/reference-analysis.md`.
5. Usá la referencia como guía prioritaria de dirección visual. Conservá su lenguaje, composición y personalidad, pero adaptá la solución al contenido, marca, accesibilidad y funcionamiento real del proyecto.
6. No copies logotipos, textos de marca, datos ni activos de terceros como si pertenecieran al usuario. Creá alternativas originales cuando corresponda.

Si no hay imagen, no te detengas: definí una dirección visual profesional a partir del objetivo, público y contenido del proyecto. Documentá brevemente las decisiones principales.

## 2. Paletas de color amplias, inteligentes y coherentes
No impongas siempre la misma paleta ni uses colores al azar. Elegí una gama que responda a la referencia, el rubro, la audiencia y el objetivo de conversión.

Explorá, cuando corresponda, combinaciones de:
- Neutros: blanco, marfil, negro, carbón, grises cálidos o fríos.
- Azules: marino, petróleo, eléctrico, cielo o tonos tecnológicos.
- Verdes: salvia, bosque, esmeralda, lima o menta.
- Violetas y púrpuras: lavanda, índigo, uva o tonos futuristas.
- Cálidos: terracota, coral, rojo, naranja, ámbar, mostaza y durazno.
- Tonos naturales: arena, beige, oliva, tierra y piedra.
- Acentos luminosos, degradados y combinaciones de alto contraste, solo cuando refuercen la identidad.

Reglas obligatorias:
- Definí roles de color, no una colección arbitraria: `background`, `surface`, `text`, `muted`, `primary`, `primary-hover`, `accent`, `border`, `success`, `warning` y `danger` cuando sean necesarios.
- Establecé variables/tokens reutilizables. Evitá colores dispersos y duplicados en el código.
- Comprobá contraste suficiente entre texto, fondo, controles y estados. No sacrifiques legibilidad por estética.
- Usá gradientes, transparencias, blur, sombras y efectos decorativos con criterio; no conviertas todos los bloques en tarjetas ni sobrecargues la interfaz.
- Mantené una identidad consistente en toda la experiencia, incluidos estados de error, carga y confirmación.

## 3. Calidad visual y experiencia de usuario
- Diseñá una jerarquía inequívoca: el visitante debe entender rápidamente dónde está, qué se ofrece y cuál es el siguiente paso.
- Priorizá tipografía legible, ritmo vertical, espacios consistentes y alineación precisa.
- Usá una escala tipográfica y de espaciado coherente; preferí tamaños fluidos con `clamp()` cuando aporte valor.
- Construí componentes con estados completos: normal, hover, focus-visible, active, disabled, loading, error y success según corresponda.
- Incorporá microinteracciones y animaciones sutiles que aporten orientación o feedback. Respetá `prefers-reduced-motion`.
- Usá iconos consistentes. No reemplaces iconos por emojis en una interfaz profesional salvo que el concepto de marca lo justifique.
- Evitá texto de relleno, bloques interminables, efectos gratuitos, animaciones molestas, carruseles automáticos innecesarios y patrones engañosos.
- Diseñá para captar y retener la atención mediante claridad, relevancia, ritmo visual y contenido útil; nunca mediante patrones oscuros, urgencia falsa o manipulación.

## 4. Responsive real: mobile-first
Toda interfaz nueva o modificada debe funcionar correctamente en móvil, tablet, notebook y escritorio. No alcanza con que el contenido simplemente se reduzca.

- Empezá por una estructura mobile-first y ampliá progresivamente.
- Definí breakpoints según el contenido y el comportamiento del layout, no por costumbre.
- Evitá anchos, altos, márgenes y posiciones rígidas que provoquen desbordes. Preferí Flexbox, Grid, unidades fluidas, `minmax()`, `min()`, `max()` y `clamp()` cuando corresponda.
- En móvil: navegación clara, objetivos táctiles cómodos, formularios utilizables, textos legibles, botones accesibles y contenido prioritario visible sin zoom.
- En pantallas grandes: aprovechá el espacio sin estirar líneas de texto ni crear bloques excesivamente anchos.
- Revisá menús, tablas, tarjetas, modales, formularios, imágenes, grillas, dashboards y pies de página en todos los tamaños.
- No ocultes contenido o funcionalidades esenciales para resolver un problema responsive. Rediseñá el componente.
- Evitá scroll horizontal global. Si un elemento necesita desplazamiento propio, resolvelo dentro de su contenedor y hacelo evidente.

Como mínimo, verificá visualmente estos anchos: 360 px, 390 px, 768 px, 1024 px, 1280 px y 1440 px. Comprobá también alturas cortas y orientación móvil cuando el proyecto lo requiera.

## 5. Imágenes, medios y rendimiento
- Usá imágenes pertinentes y de buena calidad. No agregues imágenes decorativas que compitan con el contenido.
- Preservá proporciones con `object-fit` y `aspect-ratio`; evitá deformaciones y recortes accidentales.
- Optimizá formatos, dimensiones, carga diferida y peso. Reservá espacio para evitar saltos de layout.
- Definí textos alternativos útiles para imágenes informativas; las puramente decorativas deben ignorarse por tecnologías asistivas.
- Si el usuario aporta recursos, inspeccionalos y priorizalos antes de sustituirlos.

## 6. Accesibilidad y claridad
- Usá HTML semántico y controles nativos cuando sean adecuados.
- Garantizá navegación por teclado, foco visible, etiquetas de formularios y nombres accesibles.
- No comuniques estados únicamente con color.
- Respetá contraste, estructura de encabezados, lectura y movimiento reducido.
- Los botones deben expresar acciones; los enlaces deben navegar.

## 7. Proceso obligatorio antes de dar por terminado el diseño
1. Inspeccioná el diseño actual y los recursos disponibles.
2. Analizá la referencia visual o definí la dirección visual necesaria.
3. Establecé tokens y componentes coherentes antes de replicar estilos.
4. Implementá la interfaz sin romper funcionalidades existentes.
5. Revisá móvil, tablet y escritorio; corregí desbordes, solapamientos, saltos y controles poco usables.
6. Comprobá estados interactivos, accesibilidad básica y legibilidad.
7. Compará el resultado con la referencia y corregí diferencias importantes de jerarquía, composición, proporción y color.

## Criterio de aceptación
No declares terminado un diseño solo porque compila. Debe verse intencional, consistente, profesional, atractivo y fiel a la dirección visual definida; funcionar en tamaños reales; y mantener usabilidad, accesibilidad y rendimiento razonables.
