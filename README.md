# José Adolfo Ramos Carmona — Portfolio

Portafolio profesional de Software Engineer, enfocado en backend .NET, full-stack, cloud e integración de IA. Diseño oscuro responsive con visuales SVG/CSS originales, tres casos de estudio y contenido separado de los componentes.

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

Tres conceptos originales de interfaces web (SaaS, arquitectura y e-commerce) implementados en CSS/SVG. Son marcas ficticias y propuestas visuales, no proyectos de clientes. Cada concepto se puede ampliar en un di?logo y alternar entre composici?n de escritorio y m?vil. Contenido en `src/data/designs.ts`; presentaci?n en `src/components/WebDesigns.tsx`.

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

Validación realizada: build de producción y revisión automatizada en Chrome a 360, 390, 768, 1366 y 1920 px, sin desbordamiento horizontal. Se comprobó apertura y cierre con Escape de los tres casos de estudio, restauración del foco, navegación móvil y ausencia de errores JavaScript. Capturas locales disponibles en `artifacts/` (no incluidas en el despliegue).

Ejecutar `npm run build`, navegar con teclado, abrir/cerrar los tres casos de estudio y revisar a 360, 390, 768, 1366 y 1920 px. Lighthouse debe ejecutarse contra una build de producción; no se afirma una puntuación sin medirla.
