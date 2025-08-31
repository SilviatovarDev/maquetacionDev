//Importo el SCSS principal
import "./styles/component/main.scss";

// Importo JS
import "./js/header.js";
import "./js/gallery.js";
import "./js/search.js";
import "./js/lightbox.js";
import "./js/footer.js";


//Importo funciones 
import { cargarGaleria } from "./js/gallery.js";
import { activarBuscadores } from "./js/search.js";
import { activarPromo } from "./js/lightbox.js";
import { initHeroSlider, siguiente, anterior } from "./js/hero-slider.js"; 
import { focusTrap, activarSwipe } from "./js/a11y.js";

document.addEventListener("DOMContentLoaded", async () => {
  await cargarGaleria();
  activarBuscadores();
  initHeroSlider();
  activarPromo();

  //a11y
  focusTrap("#promo-modal", ".cerrar");
  activarSwipe("#slider", siguiente, anterior);
});

