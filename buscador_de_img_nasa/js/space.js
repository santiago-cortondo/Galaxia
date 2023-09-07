const buscar = document.getElementById("btnBuscar");
const contenedor = document.getElementById("contenedor");
contenedor.className = "card-container";

buscar.addEventListener("click", () => {
  const planeta = document.getElementById("inputBuscar").value;

  fetchNASAData(planeta)
    .then((data) => {
      displayData(data);
    })
    .catch((error) => {
      console.error("Error al cargar los datos:", error);
    });
});

function fetchNASAData(searchTerm) {
  const url = `https://images-api.nasa.gov/search?q=${searchTerm}`;
  return fetch(url).then((response) => response.json());
}

function displayData(data) {
  const items = data.collection.items;
  contenedor.innerHTML = "";

  items.forEach((item) => {
    const title = item.data[0].title;
    const description = item.data[0].description;
    const dateCreated = item.data[0].date_created;
    const imageUrl = item.links[0].href;

    const cardElement = createCard(title, description, dateCreated, imageUrl);
    contenedor.appendChild(cardElement);
  });
}

function createCard(title, description, dateCreated, imageUrl) {
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

  return cardElement;
}
