---
trigger: always_on
description: "Especificación permanente del sitio comercial del estudio de desarrollo web: servicios CRM, e-commerce y landing pages; captación de potenciales clientes y solicitudes de presupuesto con backend."
---

# REGLA 03 — PROYECTO: SITIO COMERCIAL DEL ESTUDIO DIGITAL

## 1. Propósito del proyecto
Construí una web comercial profesional para un estudio/servicio de desarrollo digital cuyo objetivo principal es presentar, explicar y vender servicios de creación de:

1. **CRM y sistemas de gestión:** herramientas adaptadas a procesos de ventas, clientes, turnos, pedidos, seguimiento y operaciones.
2. **E-commerce y carritos de compra:** tiendas online, catálogos, productos, carritos, pedidos, medios de pago e integraciones según el alcance contratado.
3. **Landing pages profesionales:** páginas de conversión para profesionales, consultores, abogados, contadores, constructores, emprendedores y empresas de servicios.

La web debe convertir visitantes interesados en oportunidades comerciales reales. El objetivo principal no es solo mostrar una página atractiva: debe explicar el valor de los servicios, generar confianza y permitir que una persona envíe una solicitud para recibir asesoramiento y un presupuesto.

El nombre comercial definitivo todavía puede no estar definido. Usá un nombre provisional editable, claramente identificado como temporal, y centralizá los datos de marca para poder cambiarlos sin buscar y reemplazar textos por todo el proyecto.

## 2. Público objetivo y comunicación
Hablale a personas y negocios que necesitan profesionalizar su presencia digital, vender online, ordenar su operación o automatizar procesos. Muchos visitantes pueden no tener conocimientos técnicos.

- Explicá beneficios concretos antes que tecnologías.
- Usá español claro, profesional, directo y cercano, sin exceso de jerga.
- Mostrá ejemplos de problemas que resuelve cada servicio.
- Diferenciá claramente CRM, e-commerce y landing page.
- No prometas resultados garantizados, aumentos de ventas ni plazos que no estén confirmados.
- No inventes clientes, marcas, casos de éxito, métricas, reseñas, certificaciones, premios ni años de experiencia. Si todavía no hay material real, usá secciones de proceso, metodología, capacidades o demos identificadas como demostraciones.
- El contenido debe ser persuasivo, específico y útil, sin exageraciones ni frases vacías.

## 3. Dirección y mapa de la página
Diseñá una experiencia de una sola página con navegación por secciones, salvo que la arquitectura existente justifique páginas independientes. Como mínimo, evaluá e implementá estas secciones:

1. **Header:** marca editable, navegación clara y CTA visible para solicitar presupuesto. En móvil, menú accesible y funcional.
2. **Hero:** propuesta de valor comprensible en pocos segundos, subtítulo concreto y CTA principal que lleve al formulario. Incorporá un recurso visual relevante (mockup, composición de interfaces o imagen de referencia), sin sobrecargar.
3. **Servicios:** tres bloques principales —CRM, e-commerce y landing pages— con problema, solución, beneficios, alcance orientativo y acción para consultar. Cada servicio debe tener identidad visual coherente.
4. **Beneficios/diferenciales:** explicar ventajas reales como procesos adaptados, diseño responsive, gestión centralizada, automatización o soporte, solo en la medida en que el servicio efectivamente los ofrezca.
5. **Trabajos o demos:** mostrar proyectos reales únicamente si el usuario los aporta o autoriza. Las demostraciones deben estar rotuladas como demos; nunca simular que son clientes reales.
6. **Cómo trabajamos:** proceso entendible, por ejemplo relevamiento, propuesta, diseño, desarrollo, pruebas, entrega y soporte, ajustable a la operación real.
7. **Preguntas frecuentes:** resolver dudas sobre alcance, presupuestos, tiempos, mantenimiento, contenidos, dominio, hosting e integraciones. No inventar políticas comerciales; dejar explícito qué depende de cada proyecto.
8. **Contacto y solicitud de presupuesto:** formulario claro, accesible y conectado al backend. Debe ser un punto central de conversión, no un elemento decorativo.
9. **Footer:** datos de contacto configurables, navegación, enlaces legales necesarios y redes únicamente cuando el usuario proporcione los datos reales.

El orden y la profundidad pueden ajustarse para mantener una narrativa clara, pero no elimines el acceso al formulario ni la presentación de los tres servicios.

## 4. Conversión y llamadas a la acción
- Definí una acción primaria consistente: **Solicitar presupuesto** o **Contar mi proyecto**.
- Repetí el CTA en puntos lógicos sin convertir toda la página en una sucesión de botones.
- Los CTA deben llevar al formulario o iniciar el canal de contacto realmente configurado.
- El formulario debe poder completarse cómodamente desde un teléfono.
- No uses contadores ficticios, falsas notificaciones de actividad, escasez inventada, popups agresivos ni casillas premarcadas.

## 5. Formulario de solicitud de presupuesto
Implementá un formulario funcional con, como mínimo:

- Nombre y apellido (obligatorio).
- Email (obligatorio y validado).
- WhatsApp o teléfono (opcional, con indicación de formato/país).
- Servicio de interés (obligatorio): CRM/sistema de gestión, tienda online/e-commerce, landing page, otro/no estoy seguro.
- Nombre del negocio o actividad (opcional).
- Descripción de la necesidad o del proyecto (obligatoria, con una guía que ayude a explicar el objetivo).
- Presupuesto estimado (opcional, mediante rangos configurables o “todavía no lo definí”). No fuerces al visitante a revelar esta información.
- Plazo estimado (opcional).
- Consentimiento informado para ser contactado y tratamiento de los datos enviados, con enlace a la política de privacidad cuando esté disponible. No marques la casilla por defecto.

Requisitos de interacción:
- Etiquetas visibles, ayudas claras y mensajes de validación junto al campo correspondiente.
- Validación en cliente para mejorar la experiencia y validación obligatoria en servidor para seguridad.
- Estados de envío: listo, enviando, enviado con éxito y error recuperable.
- Evitá envíos duplicados y conservá los datos escritos si ocurre un error recuperable.
- Al completar correctamente, mostrale una confirmación clara y explicá el siguiente paso sin prometer un plazo no acordado.
- No muestres detalles internos del servidor ni información sensible en los errores.
- Si el backend no está configurado, no simules un envío exitoso: informá el bloqueo y dejá documentado qué configuración falta.

## 6. Backend y almacenamiento de solicitudes
El backend es un requisito funcional, no opcional. Cada solicitud válida debe llegar al servidor y quedar guardada de forma persistente para que el responsable del estudio pueda revisarla y responder.

### Arquitectura
- Reutilizá el stack y la infraestructura ya presentes. No migres ni reemplaces tecnologías existentes sin una razón documentada.
- Si el proyecto está vacío y no hay una decisión previa, preferí una solución compatible con despliegue web moderno y de bajo mantenimiento. Supabase/PostgreSQL puede utilizarse como base de datos y Vercel Functions o un endpoint/server action del framework como capa servidor, si el entorno y las credenciales están disponibles.
- El navegador nunca debe conectarse usando una clave privilegiada.
- El flujo esperado es: formulario → endpoint/acción de servidor → validación y controles anti-abuso → persistencia → notificación opcional → respuesta al visitante.

### Datos mínimos sugeridos
Creá una entidad/tabla de solicitudes o leads con campos equivalentes a:
- `id` único.
- `created_at`.
- `name`.
- `email`.
- `phone` nullable.
- `service_type`.
- `business_name` nullable.
- `message`.
- `budget_range` nullable.
- `timeline` nullable.
- `consent` y, cuando corresponda, `consent_at`.
- `status` con valor inicial `new`.
- `source` o página de origen cuando aporte valor.

Usá nombres consistentes con el stack y definí restricciones, índices y tipos apropiados. No almacenes campos que no tengan una finalidad clara.

### Seguridad y privacidad
- Validá y normalizá toda entrada en el servidor; limitá longitud y tamaño de los campos.
- Aplicá protección anti-spam: honeypot y rate limiting como base; evaluá CAPTCHA u otra defensa adicional si el riesgo lo justifica.
- Usá consultas parametrizadas/ORM seguro y manejá errores sin filtrar detalles internos.
- Los visitantes no deben poder listar, leer, editar ni borrar solicitudes ajenas.
- No expongas datos de leads en endpoints públicos, logs del navegador ni respuestas del formulario.
- Si se usa Supabase, activá RLS y políticas restrictivas. El acceso público debe limitarse a la operación estrictamente necesaria; la lectura y administración deben quedar restringidas al responsable autorizado.
- Mantené secretos en variables de entorno del servidor. Documentá los nombres en `.env.example` sin incluir valores reales.
- Incluí una política/aviso de privacidad adecuado al tratamiento que realmente se implemente. No afirmes cumplimiento legal certificado sin revisión profesional.

### Notificaciones
Prepará la arquitectura para notificar al responsable cuando ingrese una solicitud, sin hacer que la notificación sea la única forma de guardar el lead.
- Canal preferente: Telegram, si el usuario proporciona/configura el bot y el destino. Las credenciales deben guardarse como secretos del servidor, nunca en frontend.
- Email puede quedar como alternativa si el usuario configura un proveedor y una dirección real.
- Si no hay credenciales, la solicitud debe guardarse igualmente y el proyecto debe documentar cómo activar las notificaciones.
- No inventes chats, direcciones, tokens ni credenciales, y no envíes mensajes de prueba a terceros sin autorización.

## 7. Administración de leads: alcance controlado
La primera versión debe garantizar recepción y persistencia segura de solicitudes. No construyas automáticamente un CRM administrativo completo, login complejo, panel de ventas ni automatizaciones de seguimiento si el usuario no lo pidió.

Si el proyecto ya incluye un panel administrativo o el usuario solicita gestionarlas desde la web, implementá acceso protegido para consultar y actualizar estados, por ejemplo `new`, `contacted`, `quoted`, `won` y `archived`. Nunca expongas esa vista al público ni uses una URL secreta como único mecanismo de protección.

## 8. Identidad visual y contenido
- Aplicá íntegramente la Regla 01 de diseño visual cuando se trabaje en la interfaz.
- Si el usuario adjunta una imagen, analizala antes de diseñar y tomala como referencia principal de estilo, composición, paleta y jerarquía, adaptándola a esta marca y a la conversión.
- La estética debe comunicar creatividad, calidad técnica, confianza y claridad comercial.
- La web debe sentirse diseñada para un estudio profesional, no como una plantilla genérica de agencia.
- Usá textos reales y específicos para cada servicio. Si faltan datos comerciales, creá contenido provisional editable y marcá claramente los supuestos.
- Mantené la marca, datos de contacto, enlaces, servicios y textos configurables en un lugar central cuando el stack lo permita.

## 9. SEO, accesibilidad y rendimiento
- Definí título, descripción, jerarquía semántica, URLs/anchors claros, Open Graph y favicon cuando haya identidad disponible.
- Prepará contenido indexable y lenguaje alineado con búsquedas relacionadas con desarrollo de CRM, tiendas online y landing pages, sin saturar palabras clave.
- Optimizá imágenes, fuentes, scripts y carga inicial. Evitá dependencias pesadas si no aportan valor.
- Garantizá responsive, navegación por teclado, foco visible, etiquetas, mensajes de error accesibles y contraste suficiente.
- No agregues analytics, píxeles de publicidad ni cookies no esenciales sin configurarlos de forma transparente y respetar el consentimiento aplicable.

## 10. Entrega y auditoría
Antes de considerar lista la web:
1. Comprobá que los tres servicios estén explicados y diferenciados.
2. Probá el formulario desde un navegador en móvil y escritorio.
3. Verificá que una solicitud válida se guarde realmente en la base de datos configurada.
4. Probá validaciones, errores, doble envío, spam básico y estados de éxito.
5. Verificá que el público no pueda leer ni modificar leads existentes.
6. Comprobá que ninguna clave privada llegue al bundle del navegador.
7. Revisá SEO, accesibilidad, responsive y rendimiento.
8. Actualizá README y documentación del backend, esquema, variables y despliegue.
9. Informá qué funciona, qué se verificó y qué queda pendiente por falta de configuración o aprobación.

## Criterio de aceptación
La entrega debe ser una web comercial moderna y convincente, con presentación clara de CRM, e-commerce y landing pages, diseño responsive de calidad y un flujo real de solicitud de presupuesto conectado a un backend seguro y persistente. Una maqueta visual sin persistencia no cumple el alcance.
