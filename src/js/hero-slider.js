let slides, puntos, indice = 0;

function mostrarSlide(n) {
  slides.forEach((s, i) => {
    const video = s.querySelector("video");
    if (i === n) {
      s.classList.add("activo");
      if (video) {
        video.currentTime = 0;
        video.play();
      }
    } else {
      s.classList.remove("activo");
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    }
    if (puntos && puntos[i]) {
      puntos[i].setAttribute("aria-current", i === n ? "true" : "false");
    }
  });
  indice = n;
}

export function siguiente() {
  mostrarSlide((indice + 1) % slides.length);
}

export function anterior() {
  mostrarSlide((indice - 1 + slides.length) % slides.length);
}

export function initHeroSlider() {
  slides = document.querySelectorAll(".slide");
  const btnPrev = document.querySelector(".flecha.izquierda");
  const btnNext = document.querySelector(".flecha.derecha");
  const puntosContainer = document.getElementById("puntos");

  if (!slides.length || !puntosContainer) return;

  // bullets
  puntosContainer.innerHTML = "";
  slides.forEach((_, i) => {
    const btn = document.createElement("button");
    btn.setAttribute("aria-label", `Ir a la diapositiva ${i + 1}`);
    if (i === 0) btn.setAttribute("aria-current", "true");
    puntosContainer.appendChild(btn);
    btn.addEventListener("click", () => mostrarSlide(i));
  });

  puntos = puntosContainer.querySelectorAll("button");

  // flechas
  btnNext.addEventListener("click", siguiente);
  btnPrev.addEventListener("click", anterior);

  // Evento para pasar al siguiente slide cuando un video termina
  slides.forEach((s) => {
    const video = s.querySelector("video");
    if (video) {
      video.addEventListener("ended", siguiente);
    }
  });

  mostrarSlide(0);
}
