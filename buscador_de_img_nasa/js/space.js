const boton = document.getElementById("btnBuscar");
const contenedor = document.getElementById("contenedor");

boton.addEventListener("click", function () {
  const planeta = document.getElementById("inputBuscar").value; // Mover esta línea aquí
  
  const url = `https://images-api.nasa.gov/search?q=${planeta}`;
  
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      mostrarDatos(data);
    })
    .catch((error) => {
      console.error("Error al cargar los datos:", error);
    });
});

function mostrarDatos(data) {
  const items = data.collection.items;
  contenedor.innerHTML = ""; // Limpiar el contenedor antes de agregar nuevas tarjetas
  
  items.forEach((item) => {
    const title = item.data[0].title;
    const description = item.data[0].desc;
    const dateCreated = item.data[0].dateCreated; // Asumiendo que tienes esta propiedad en tu objeto 'data'
    const imageUrl = item.links[0].href;

    const cardElement = document.createElement("div");
    cardElement.className = "col-lg-4 col-md-6 mb-4";
    cardElement.innerHTML = `
      <div class="card">
        <img src="${imageUrl}" class="card-img-top" alt="${title}">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${description}</p>
          <p class="card-text">Fecha de Creación: ${dateCreated}</p>
        </div>
      </div>`;

    contenedor.appendChild(cardElement);
  });
}
