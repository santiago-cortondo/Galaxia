function mostrarDatosNASA() {
    // URL de la API de la NASA
    const apiUrl = "https://images-api.nasa.gov/search?q=andromeda";
  
    // Realizamos una solicitud GET a la API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Accedemos a los resultados de la búsqueda
        const resultados = data.collection.items;
  
        // Verificamos si hay resultados
        if (resultados.length === 0) {
          console.log("No se encontraron resultados.");
          return;
        }
  
        // Iteramos a través de los resultados y mostramos la información que desees
        resultados.forEach((resultado) => {
          const datos = resultado.data[0];
          console.log("Título:", datos.title);
          console.log("Descripción:", datos.description);
          console.log("Enlace:", datos.nasa_id);
          console.log("Fecha de creación:", datos.date_created);
          console.log("Thumbnail URL:", datos.thumbnail_url);
          console.log("----------");
        });
      })
      .catch((error) => {
        console.error("Ocurrió un error al cargar los datos:", error);
      });}