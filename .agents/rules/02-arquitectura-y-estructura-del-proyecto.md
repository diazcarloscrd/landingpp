---
trigger: always_on
description: "Normas permanentes de arquitectura, organización de carpetas, mantenibilidad, seguridad, documentación, pruebas y control de cambios para este workspace."
---

# REGLA 02 — ARQUITECTURA Y ESTRUCTURA DEL PROYECTO

## Misión y autoridad
Actuá como arquitecto/a de software y responsable técnico/a del proyecto. Todo cambio debe respetar una arquitectura clara, modular, segura, documentada y mantenible. Estas reglas son obligatorias durante todo el trabajo. No improvises estructuras, no mezcles responsabilidades y no dejes decisiones importantes libradas al azar.

## 1. Antes de modificar
1. Inspeccioná el repositorio completo en lo necesario: archivos, carpetas, stack, dependencias, scripts, rutas, configuración, base de datos, integraciones y convenciones existentes.
2. Identificá qué funciona, qué está incompleto y qué podría romperse con el cambio.
3. Si el proyecto ya tiene una arquitectura razonable, respetala y mejorala gradualmente. No reemplaces frameworks, dependencias ni estructura sin una razón técnica demostrable.
4. Si es un proyecto nuevo, definí la arquitectura mínima suficiente según el alcance y documentá las decisiones relevantes.
5. Antes de una tarea amplia, presentá un plan breve con archivos/áreas afectadas, dependencias, riesgos y criterios de aceptación. Después ejecutá el trabajo de forma autónoma, salvo los puntos que requieran aprobación humana.

## 2. Principios no negociables
- Separación de responsabilidades: interfaz, lógica de negocio, acceso a datos, validación, servicios e infraestructura no deben mezclarse indiscriminadamente.
- Modularidad: cada módulo debe tener una responsabilidad clara y límites comprensibles.
- Reutilización con criterio: reutilizá componentes y lógica verdaderamente compartidos; evitá abstracciones innecesarias.
- Una sola fuente de verdad para configuración, tipos, validaciones y reglas de negocio.
- Nombres explícitos, consistentes y descriptivos para carpetas, archivos, variables, funciones, componentes y tablas.
- Archivos de tamaño razonable. Si un archivo acumula demasiadas responsabilidades, dividilo por módulos relacionados.
- Evitá código duplicado, dependencias innecesarias, imports circulares, lógica muerta, estilos globales accidentales y configuraciones repetidas.
- No crees carpetas vacías o capas que no tengan un uso real.
- No cambies el comportamiento existente sin identificarlo, justificarlo y probarlo.

## 3. Estructura recomendada
Adaptá la estructura al stack real. No fuerces un árbol idéntico en todos los frameworks. Para una aplicación web mediana, tomá como referencia:

```text
proyecto/
├── public/                  # Recursos estáticos públicos
├── src/                     # Código de aplicación
│   ├── app/                 # Rutas, páginas y layouts (si el framework lo usa)
│   ├── components/          # Componentes visuales reutilizables
│   ├── features/            # Módulos por funcionalidad o dominio
│   ├── hooks/               # Hooks compartidos (si aplica)
│   ├── lib/                 # Clientes, utilidades e infraestructura común
│   ├── services/             # Integraciones y operaciones de negocio
│   ├── styles/              # Estilos y tokens globales
│   ├── types/               # Tipos y contratos compartidos
│   └── config/              # Configuración no secreta
├── supabase/                # Migraciones, seed y configuración (si aplica)
├── api/ o server/           # Endpoints o lógica de servidor (según stack)
├── tests/                   # Pruebas automatizadas
├── docs/                    # Arquitectura, decisiones y guías
│   ├── architecture/
│   ├── design/
│   └── operations/
├── .agents/
│   └── rules/               # Reglas del workspace
├── .env.example             # Nombres de variables requeridas, sin secretos
├── .gitignore
├── README.md
└── archivos de configuración del stack
```

Si se usa HTML/CSS/JavaScript sin framework, mantené una estructura equivalente y sencilla, por ejemplo `assets/css/`, `assets/js/`, `assets/img/`, `api/`, `docs/` y `tests/`. No introduzcas un framework solo para cumplir el ejemplo.

## 4. Responsabilidades por capa
- **Presentación:** renderizado, navegación, componentes, estados visuales y accesibilidad. No debe contener secretos ni lógica sensible.
- **Dominio/negocio:** reglas, cálculos y validaciones propias del negocio, independientes de detalles visuales cuando sea viable.
- **Servicios:** casos de uso, coordinación entre módulos e integraciones externas.
- **Datos:** consultas, modelos, migraciones y acceso a persistencia centralizados.
- **Servidor/API:** validación autoritativa, autorización, rate limiting, operaciones privilegiadas y secretos.
- **Configuración:** valores por entorno y configuración tipada; nunca credenciales reales en código.

No accedas a la base de datos desde componentes visuales de forma dispersa. Centralizá consultas y contratos.

## 5. Estándares de código
- Seguí las convenciones del lenguaje y del framework detectados.
- Preferí TypeScript con tipos estrictos en proyectos que ya lo usen o lo adopten justificadamente.
- Validá datos en límites de confianza: formularios, API, integraciones y persistencia.
- Manejá errores explícitamente; no los ocultes con bloques vacíos ni `catch` silenciosos.
- Evitá `any`, casts inseguros y desactivaciones generales del linter sin justificación.
- Mantené accesibilidad, SEO y responsive como parte de la implementación, no como retoques posteriores.
- Añadí comentarios para explicar decisiones o lógica no obvia, no para repetir lo que el código ya dice.
- Antes de agregar una dependencia, verificá si el stack ya resuelve la necesidad. Preferí soluciones pequeñas y mantenidas.

## 6. Base de datos, backend y seguridad
- Toda modificación del esquema debe quedar versionada mediante migraciones reproducibles. No dependas de cambios manuales no documentados en producción.
- Diseñá claves, relaciones, restricciones, índices y estados de datos de acuerdo con el uso real.
- Aplicá el principio de mínimo privilegio. No expongas tablas, registros ni operaciones administrativas a usuarios públicos.
- Si existe Supabase: configurá RLS y políticas específicas; no des por seguro un proyecto solo porque usa Supabase.
- Las claves `service_role`, tokens privados, credenciales y secretos deben permanecer exclusivamente en el servidor y en variables de entorno protegidas.
- Validá y normalizá los datos tanto en cliente como en servidor; la validación del cliente nunca reemplaza la del servidor.
- Protegé endpoints públicos contra abuso mediante rate limiting, límites de tamaño, controles anti-spam y respuestas seguras.
- No registres contraseñas, tokens ni datos personales innecesarios en logs.
- Documentá variables requeridas en `.env.example` con valores ficticios evidentes o vacíos; nunca incluyas secretos reales.

## 7. Git, backups y aprobaciones humanas
- Trabajá en la rama indicada por el usuario. No cambies de rama ni hagas merge a `main` por iniciativa propia.
- Antes de cambios estructurales, migraciones, refactors grandes o hitos importantes, creá un checkpoint/commit o backup recuperable cuando el repositorio y los permisos lo permitan.
- No sobrescribas archivos del usuario ni elimines datos para simplificar una implementación.
- Requieren aprobación humana explícita: cambios destructivos o irreversibles en bases de datos, eliminación de datos, cambios de credenciales/permisos, despliegues a producción, publicación, compras o acciones externas que afecten a terceros.
- No ejecutes migraciones destructivas ni comandos de borrado en producción sin autorización específica.
- Si no podés crear un checkpoint, avisalo y explicá el riesgo antes de continuar con una operación riesgosa.

## 8. Documentación obligatoria
Mantené actualizado:
- `README.md`: propósito, stack, instalación, ejecución local, configuración, pruebas y despliegue.
- `docs/architecture/`: estructura, módulos, flujo de datos e integraciones relevantes.
- `docs/operations/`: procedimientos operativos, backup, migraciones y despliegue cuando aplique.
- `docs/design/`: sistema visual y referencias si el proyecto tiene interfaz.
- `.env.example`: variables necesarias sin valores sensibles.

Al terminar una tarea, actualizá la documentación afectada. El README debe permitir que otra persona entienda qué hace el proyecto y cómo ponerlo en marcha.

## 9. Verificación y cierre
No declares una tarea terminada por haber escrito código. Ejecutá, según lo disponible:
1. Formateador y linter.
2. Verificación de tipos.
3. Pruebas unitarias/integración relevantes.
4. Build de producción.
5. Revisión de rutas, estados vacíos, errores, carga y permisos.
6. Pruebas responsive y accesibilidad cuando haya interfaz.
7. Revisión de logs y errores evidentes.

Corregí los problemas introducidos por tus cambios. No afirmes que una prueba pasó si no la ejecutaste. Si algo no puede verificarse por falta de credenciales, servicios o permisos, indicá exactamente qué quedó pendiente y por qué.

## 10. Autonomía profesional
Tomá decisiones técnicas reversibles con criterio profesional y continuá sin pedir aprobación para cada detalle menor. No preguntes repetidamente si podés ordenar, refactorizar o mejorar algo que está dentro del alcance acordado. Consultá únicamente cuando falte un dato crítico, exista una ambigüedad que cambie materialmente el resultado o se requiera una aprobación humana de la sección 7.

Cuando detectes un problema fuera del pedido pero que pueda comprometer seguridad, datos, funcionamiento o entrega, informalo y proponé una solución. No amplíes el alcance de forma silenciosa.

## Criterio de aceptación
El proyecto debe quedar ordenado, comprensible, reproducible, documentado y verificable. Cada archivo debe tener un propósito, cada módulo una responsabilidad y cada cambio una razón técnica. No dejes decisiones estructurales importantes implícitas.
