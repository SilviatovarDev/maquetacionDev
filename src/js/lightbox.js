// Activa el modal 
export function activarPromo() {
  const btn = document.getElementById("promo-btn");
  const clickbtn = document.getElementById("clickbtn");
  const modal = document.getElementById("promo-modal");
  const cerrar = modal.querySelector(".cerrar");
  const contenido = modal.querySelector(".promo-contenido");

  let focusElem = null;

  function abrirModal() {
    focusElem = document.activeElement; 
    modal.classList.add("activo");
    modal.setAttribute("aria-hidden", "false");
    contenido.setAttribute("tabindex", "-1");
    contenido.focus(); 
    trapFocus(modal);
  }

  function cerrarModal() {
    modal.classList.remove("activo");
    modal.setAttribute("aria-hidden", "true");
    contenido.removeAttribute("tabindex");
    if (focusElem) focusElem.focus(); 
  }

  // Abrir modal con botón
  btn.addEventListener("click", abrirModal);

  // Cerrar modal con botón cerrar
  cerrar.addEventListener("click", cerrarModal);

  // Abrir modal con botón de promoción
  clickbtn.addEventListener("click", abrirModal);

  // Cerrar Esc
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("activo")) {
      cerrarModal();
    }
  });

  function trapFocus(element) {
    const focusables = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    element.addEventListener("keydown", (e) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    });
  }
}
