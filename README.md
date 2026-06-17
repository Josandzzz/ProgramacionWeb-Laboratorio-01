# ProgramacionWeb-Laboratorio-01

**Estudiante:** Joseph Andres Moya Pichardo
**Curso:** Programación en Ambiente Web I (ISW-521) — UTN
**Laboratorio #1:** Landing Page Responsiva
**Tema elegido:** Portafolio profesional personal

Landing page de un portafolio personal de desarrollador web, construida con
HTML5 semántico, CSS3 nativo (Flexbox y Grid) y JavaScript nativo, sin
frameworks externos.

## Estructura del proyecto

```
.
├── index.html          # Documento principal (HTML5 semántico)
├── css/
│   └── styles.css      # Estilos: Flexbox, Grid, media queries, temas
├── js/
│   └── main.js         # Tema claro/oscuro (localStorage) + menú móvil
└── img/
    ├── proyecto-01.svg # Imagenes ejemplo para los proyectos
    ├── proyecto-02.svg
    └── proyecto-03.svg
```

## Requerimientos cubiertos

- **HTML5 semántico:** `<header>`, `<nav>`, `<main>`, `<section>`,
  `<article>`, `<aside>` y `<footer>`; sin tablas para el layout.
- **CSS3 nativo:** Flexbox (navegación, hero, tarjetas) y CSS Grid
  (habilidades y proyectos); responsividad con dos breakpoints (`900px`
  y `600px`).
- **Accesibilidad (WCAG 2.1):** `alt` descriptivo en imágenes, atributos
  ARIA (`aria-label`, `aria-expanded`, `aria-pressed`, `role`), contraste
  de texto ≥ 4.5:1 y navegación completa por teclado con foco visible.
- **Web Storage:** el tema claro/oscuro se guarda en `localStorage`
  (clave `portafolio-tema`) y se reaplica al recargar la página.
