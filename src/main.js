//Importo el SCSS principal
import './styles/component/main.scss';

// Importo JS
import './js/footer.js';
import './js/gallery.js';
import './js/header.js';
import './js/lightbox.js';
import './js/search.js';

//Importo funciones
import { activarSwipe, focusTrap } from './js/a11y.js';
import { cargarGaleria } from './js/gallery.js';
import { anterior, initHeroSlider, siguiente } from './js/hero-slider.js';
import { activarPromo } from './js/lightbox.js';
import { activarBuscadores } from './js/search.js';

document.addEventListener('DOMContentLoaded', () => {
  // HERO primero
  initHeroSlider();
  activarPromo();
  focusTrap('#promo-modal', '.cerrar');
  activarSwipe('#slider', siguiente, anterior);

  // Galería y buscadores en paralelo (no bloquean LCP)
  cargarGaleria();
  activarBuscadores();
});
