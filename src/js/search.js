
export function activarBuscadores() {
  const grid = document.getElementById("galeria-json");
  if (!grid) return;

  const botones = document.querySelectorAll(".btn-filtro");
  const buscador = document.getElementById("buscar");
  const ordenar = document.getElementById("ordenar");
  const vacio = document.querySelector(".galeria-vacia");

  let categoria = "todos";
  let texto = "";
  let orden = "reciente";

  function normalizar(txt) {
    return txt.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  function aplicarFiltros() {
    const items = Array.from(grid.querySelectorAll(".item"));

    let visibles = items.filter((item) => {
      const cats = item.dataset.categoria
        .split(",")
        .map((c) => c.trim().toLowerCase());

      const etiq = item.dataset.etiquetas
        .split(",")
        .map((e) => e.trim().toLowerCase());

      const titulo = item.querySelector("figcaption").innerText;

      const okCat =
        categoria === "todos" || cats.includes(categoria.toLowerCase());

      const okTexto =
        !texto ||
        normalizar(titulo).includes(normalizar(texto)) ||
        etiq.some((tag) => normalizar(tag).includes(normalizar(texto)));

      return okCat && okTexto;
    });

    //Ordenar
    if (orden === "az") {
      visibles.sort((a, b) =>
        a.querySelector("figcaption").innerText
          .trim()
          .localeCompare(
            b.querySelector("figcaption").innerText.trim(),
            "es",
            { sensitivity: "base" }
          )
      );
    } else if (orden === "vistos") {
      visibles.sort(
        (a, b) =>
          parseInt(b.dataset.vistas || "0", 10) -
          parseInt(a.dataset.vistas || "0", 10)
      );
    } else {
      visibles.sort(
        (a, b) =>
          new Date(b.dataset.fecha || "1970-01-01") -
          new Date(a.dataset.fecha || "1970-01-01")
      );
    }

    //Mostrar/Ocultar 
    items.forEach((item) => {
      if (visibles.includes(item)) {
        item.style.display = "inline-block";
      } else {
        item.style.display = "none";
      }
    });

    //Reordenar solo los visibles
    visibles.forEach((item) => grid.appendChild(item));
  }

  botones.forEach((btn) =>
    btn.addEventListener("click", () => {
      botones.forEach((b) => b.classList.remove("activo"));
      btn.classList.add("activo");
      categoria = btn.dataset.categoria;
      aplicarFiltros();
    })
  );

  buscador.addEventListener("input", (e) => {
    texto = e.target.value;
    aplicarFiltros();
  });

  ordenar.addEventListener("change", (e) => {
    orden = e.target.value;
    aplicarFiltros();
  });

  aplicarFiltros();
}
