const boton = document.getElementById("btnBuscar");
const contenedor = document.getElementById("contenedor");

boton.addEventListener("click", function () {
  const planeta = document.getElementById("inputBuscar").value;
  var url = `https://images-api.nasa.gov/search?q=${planeta}`;
  
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
  contenedor.innerHTML = "";
  items.forEach((item) => {
    const imgSrc = item.links[0].href;
    const imgTitle = item.data[0].title;
    const img = document.createElement("img");
    img.src = imgSrc;
    img.alt = imgTitle;
    const title = document.createElement("h2");
    title.textContent = imgTitle;
    contenedor.appendChild(img);
    contenedor.appendChild(title);
  });
}

        
        

