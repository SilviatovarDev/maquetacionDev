document.addEventListener("DOMContentLoaded", () => {
  const boton = document.querySelector(".hamburguesa");
  const menu = document.getElementById("menu");
  // Encargado de abrir y cerrar el menú cuando hacemos clic en el botón
  boton.addEventListener("click", () => {
    const abierto = menu.classList.toggle("activo");
    boton.setAttribute("aria-expanded", abierto);
  });

  //  Encargado de cerrar el menú al hacer clic en un enlace
  menu.querySelectorAll("a").forEach(enlace => {
    enlace.addEventListener("click", () => {
      menu.classList.remove("activo");
      boton.setAttribute("aria-expanded", false);
    });
  });

  // Encargado de cerrar el menú con  la tecla Esc
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      menu.classList.remove("activo");
      boton.setAttribute("aria-expanded", false);
    }
  });
});