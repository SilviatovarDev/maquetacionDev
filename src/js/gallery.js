//Función que carga la galería desde el JSON y genera HTML
export function cargarGaleria() {
  const grid = document.getElementById("galeria-json");
  if (!grid) return;

  fetch("data/gallery.json")
    .then(res => res.json())
    .then(data => {
      grid.innerHTML = data
        .map((item) => {
          if (item.src.type === "image") {
            return `
              <figure class="item"
                data-categoria="${item.category}"
                data-etiquetas="${item.tags.join(",")}"
                data-vistas="${item.views}"
                data-fecha="${item.createdAt}">
                
                <picture>
                  <!--pantallas<= 768px-->
                  <source srcset="${item.src.small}" media="(max-width: 768px)">
                  <img 
                    src="${item.src.jpg}" 
                    alt="${item.title}" 
                    width="${item.width}" 
                    height="${item.height}" 
                    loading="lazy">
                </picture>

                <figcaption>${item.title}</figcaption>
              </figure>
            `;
          } else {
           return `
  <figure class="item"
    data-categoria="${item.category}"
    data-etiquetas="${item.tags.join(",")}"
    data-vistas="${item.views}"
    data-fecha="${item.createdAt}">
    
    <video autoplay muted loop playsinline poster="${item.src.poster || ""}">
      <!-- Versión móvil -->
      <source src="${item.src.small}" type="video/mp4" media="(max-width: 768px)">
      <!-- Versión escritorio -->
      <source src="${item.src.mp4}" type="video/mp4" media="(min-width: 769px)">
      Tu navegador no soporta el video.
    </video>
    
    <figcaption>${item.title}</figcaption>
  </figure>
`;
          }
        })
        .join("");
    })
    .catch((err) => console.error("Error cargando galería:", err));
}
