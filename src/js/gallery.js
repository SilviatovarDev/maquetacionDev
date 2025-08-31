//Función que recoge los datos creados en el archivo json, recorriendo los elementos y creando el elemento html con las propiedades que he definido en el archivo.
export function cargarGaleria() {
  const grid = document.getElementById('galeria-json');
  if (!grid) return;

  fetch('data/gallery.json')
    .then((res) => res.json())
    .then((data) => {
      grid.innerHTML = data
        .map(
          (item) => `
        <figure class="item" 
          data-categoria="${item.category}" 
          data-etiquetas="${item.tags.join(',')}" 
          data-vistas="${item.views}" 
          data-fecha="${item.createdAt}">
          ${
            item.src.type === 'image'
              ? `<img src="${item.src.jpg}" alt="${item.title}" width="${item.width}" height="${item.height}" loading="lazy">`
              : `<video autoplay muted loop playsinline 
                     poster="${item.src.poster || ''}">
                   <source src="${item.src.mp4}" type="video/mp4">
                 </video>`
          }
          <figcaption>${item.title}</figcaption>
        </figure>
      `
        )
        .join('');
    })
    .catch((err) => console.error('Error cargando galería:', err));
}
