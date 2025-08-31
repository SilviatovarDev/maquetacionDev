
//Creo el evento para el botón que nos desplazara hacia arriba  
document.addEventListener("DOMContentLoaded", () => {
  const btnArriba = document.querySelector(".btn-arriba");

  btnArriba.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
