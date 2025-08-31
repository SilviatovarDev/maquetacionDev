PRUEBA TÉCNICA

Proyecto de maquetación web realizado con HTML, SCSS y JavaScript (ES Modules).  
Incluye un slider con vídeos, galería dinámica desde JSON, un lightbox accesible, un diseño responsive  accesibilidad (A11y).  


1. Decisiones técnicas

- SCSS: Uso de variables, mixins y arquitectura por componentes.

- Mixins: creados para media queries y responsive con @mixin.

- JSON dinámico: la galería carga imágenes y vídeos desde un archivo gallery.json.

- Hero Slider: implementado en JS nativo, con autoplay de vídeos, navegación con flechas, bullets accesibles y swipe en móvil.

- Lightbox accesible: botón flotante que abre modal, cierre con Esc y aria-labels.

- Accesibilidad (A11y):

    - Navegación completa por teclado.

    - Roles ARIA (role="dialog", aria-hidden, aria-current).

    - Contrastes AA mínimo y foco visible.

    - : imágenes optimizadas, loading="lazy", vídeos con poster y CSS/JS minificado con Vite.

- SEO: estructura semántica con encabezados, etiquetas alt en imágenes, metadatos.





2. Checklist

- Teclado completo: header, slider, filtros, lightbox. (X)

- Atributos ARIA donde aporten. (X)

- Contraste AA mínimo. (X)

- Focus visible y gestionado. (X)

- Etiquetas y descripciones correctas (aria-label, aria-describedby). (X)