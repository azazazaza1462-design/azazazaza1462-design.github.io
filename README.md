# José Adolfo Ramos Carmona — Portfolio

Portafolio profesional de Software Engineer, enfocado en backend .NET, full-stack, cloud e integración de IA. Diseño oscuro responsive con visuales SVG/CSS originales, cuatro casos de estudio y contenido separado de los componentes.

Rediseño con paleta navy/cian inspirado en [Workfolio de BootstrapMade](https://bootstrapmade.com/bootstrap-portfolio-templates/), implementado con los componentes React propios. Incluye filtros de proyectos y un flujo animado de código, build, pruebas y entrega que respeta `prefers-reduced-motion`.

CotizaFlow se agregó a partir de la documentación y dependencias del repositorio local `presu_ode`, conservando los tres proyectos anteriores. Su visual es conceptual. El caso distingue la integración de IA implementada de la búsqueda real todavía pendiente de verificación, y no afirma un despliegue público.

## Tecnologías

React 19, TypeScript, Vite, CSS y Lucide. Las animaciones usan CSS e IntersectionObserver, sin dependencias adicionales. Las fuentes de Google Fonts usan `display=swap` y fuentes de respaldo del sistema.

## Instalación y ejecución

Requiere Node.js 22 y npm.

```sh
npm install
npm run dev
```

En PowerShell, si la política de ejecución bloquea `npm.ps1`, usar `npm.cmd` en lugar de `npm`.

## Build

```sh
npm run build
npm run preview
```

El build valida TypeScript y genera el sitio estático en `dist/`.

## Estructura

- `src/components/`: navegación, hero, proyectos, modal, experiencia, stack, educación, certificaciones y contacto.
- `src/data/`: proyectos tipados, habilidades, certificaciones y experiencia.
- `src/pages/Home.tsx`: composición y scroll reveal.
- `src/styles/global.css`: sistema visual y adaptaciones responsive.
- `public/favicon.svg`: favicon original.

## Contenido y accesibilidad

Los datos profesionales proceden del brief. Identity Document Analysis es el módulo end-to-end; Bank Statements y Credit Reports se describen como extensiones previstas. Las ilustraciones son conceptuales; no son capturas ni métricas reales. LinkedIn y GitHub enlazan a los perfiles proporcionados por el propietario y abren en una nueva pesta?a. No hay formulario que simule enviar mensajes: se usan enlaces `mailto:` y `tel:`.

Los casos de estudio usan `dialog` nativo, cierre con Escape, foco contenido y restauración del foco. Se incluye enlace para saltar al contenido, foco visible, menú móvil accesible y respeto a `prefers-reduced-motion`.

## Design Lab

Tres conceptos originales de interfaces web (SaaS, arquitectura y e-commerce) implementados en React/CSS. Forma y Aural usan fotografías de referencia almacenadas en `public/images/`, con procedencia documentada en esa carpeta. Son marcas ficticias y propuestas visuales, no proyectos de clientes. Cada concepto se puede ampliar en un diálogo y alternar entre composición de escritorio y móvil. Contenido en `src/data/designs.ts`; presentación en `src/components/WebDesigns.tsx`.

La galería combina una preview de Orbit de mayor tamaño con dos composiciones fotográficas. `src/styles/enhancements.css` contiene la dirección editorial y las animaciones: entradas escalonadas, terminal, órbitas, escaneo de documentos, gráfica, tarjetas sensibles al puntero y apertura de diálogos. La navegación fija indica la sección actual y una barra muestra el progreso de lectura. Las animaciones respetan movimiento reducido.

El fondo incluye un mundo tecnológico en Canvas 2D con proyección 3D: esfera rotatoria, continentes punteados ilustrativos, etiquetas derivadas del stack, anillos orbitales y partículas. Aparece de forma protagonista en el inicio y continúa como fondo al desplazarse. No requiere librerías 3D ni assets externos. Se limita a 30 FPS, pausa al ocultar la pestaña y se muestra estático con movimiento reducido. Implementación en `src/components/TechnologyWorld.tsx` y `src/styles/technology-world.css`.

Globo verificado en Chrome a 390, 768 y 1366 px: renderizado y movimiento de Canvas, más de 50 tecnologías, fondo al hacer scroll, ausencia de desbordamiento, interacción con proyectos y respuesta a cambios de la preferencia de movimiento reducido. Build de producción correcto. Capturas en `artifacts/world-*.png`.

La sección de contacto presenta una composición de dos columnas, canales de contacto directos, copiar correo con confirmación y alternativa ante errores, tarjetas de LinkedIn/GitHub y un diagrama animado de idea → conversación → solución. Incluye fondo luminoso, anillos de señal y un borde de luz animado, con movimiento reducido. Verificada en Chrome a 360, 390, 768 y 1366 px: disposición, enlaces, copia real al portapapeles, fallo de copia y animaciones; sin errores JavaScript. Build y `git diff --check` correctos. Capturas en `artifacts/contact-390.png` y `artifacts/contact-1366.png`.

## Deployment

Sitio: https://azazazaza1462-design.github.io/

Repositorio: https://github.com/azazazaza1462-design/azazazaza1462-design.github.io

GitHub Pages publica la carpeta `dist/` mediante `.github/workflows/deploy.yml`. Cada push a `main` ejecuta `npm ci`, valida TypeScript, compila y despliega el sitio. El flujo tambi?n permite ejecuci?n manual desde Actions.

Para actualizar:

```sh
npm run build
git add src public index.html
git commit -m "Update portfolio"
git push origin main
```

Revisar el resultado en Actions ? Deploy portfolio to GitHub Pages. No se requieren variables de entorno ni servidores locales encendidos. El dominio se refleja en canonical, OpenGraph, robots.txt y sitemap.xml. Si cambia el dominio, actualizar esos archivos. Para otro hosting est?tico se puede publicar directamente `dist/`.

## Comprobaciones recomendadas

Rediseño del 2026-10-09: `npm.cmd run build` completó TypeScript y Vite correctamente; `git diff --check` pasó. Revisión automatizada con Playwright y Chrome a 360, 390, 768, 1366 y 1920 px: sin desbordamiento horizontal, carga de ambas fotografías, filtros de proyectos, apertura y cierre de los cuatro casos con restauración de foco, los tres diseños en escritorio/móvil, navegación móvil y progreso de lectura. Movimiento reducido verificado y sin errores JavaScript. Capturas del rediseño en `artifacts/redesign-*.png`. Las comprobaciones siguientes corresponden a la versión anterior.

Validación realizada: build de producción y revisión automatizada en Chrome a 360, 390, 768, 1366 y 1920 px, sin desbordamiento horizontal. Se comprobó apertura y cierre con Escape de los tres casos de estudio, restauración del foco, navegación móvil y ausencia de errores JavaScript. Capturas locales disponibles en `artifacts/` (no incluidas en el despliegue).

Ejecutar `npm run build`, navegar con teclado, probar los filtros, abrir/cerrar los cuatro casos de estudio y revisar a 360, 390, 768, 1366 y 1920 px. Lighthouse debe ejecutarse contra una build de producción; no se afirma una puntuación sin medirla.
