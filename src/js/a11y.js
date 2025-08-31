export function focusTrap(modalSelector, closeSelector) {
  const modal = document.querySelector(modalSelector);
  if (!modal) return;

  const btnCerrar = modal.querySelector(closeSelector);

  function trap(e) {
    if (!modal.classList.contains("activo")) return;

    const focusables = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const primer = focusables[0];
    const ultimo = focusables[focusables.length - 1];

    if (e.key === "Tab") {
      if (e.shiftKey) {
        if (document.activeElement === primer) {
          e.preventDefault();
          ultimo.focus();
        }
      } else {
        if (document.activeElement === ultimo) {
          e.preventDefault();
          primer.focus();
        }
      }
    }

    if (e.key === "Escape") {
      modal.classList.remove("activo");
      modal.setAttribute("aria-hidden", "true");
      btnCerrar.focus();
    }
  }

  document.addEventListener("keydown", trap);
}

// deslizar hero-slider
export function activarSwipe(sliderSelector, callbackNext, callbackPrev) {
  const slider = document.querySelector(sliderSelector);
  if (!slider) return;

  let primerX = 0;
  let ultimoX = 0;

  slider.addEventListener("touchstart", e => {
    primerX = e.touches[0].clientX;
  });

  slider.addEventListener("touchend", e => {
    ultimoX = e.changedTouches[0].clientX;
    const diff = ultimoX - primerX;

    if (Math.abs(diff) > 50) {
      if (diff < 0) {
        callbackNext();
      } else {
        callbackPrev();
      }
    }
  });
}
