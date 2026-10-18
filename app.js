// Obtenemos los elementos de HTML
const btnGenerar = document.getElementById('btn-generar');
const imagenPerrito = document.getElementById('imagen-perrito');

// ESTA ES LA FUNCIÓN QUE CONSUME LA API PÚBLICA
function consumirAPI() {
    // 1. Llamamos a la URL de la API pública
    fetch('https://dog.ceo/api/breeds/image/random')
        // 2. Convertimos la respuesta a formato JSON
        .then(respuesta => respuesta.json())
        // 3. Usamos los datos (la URL de la imagen) para cambiar la foto
        .then(datos => {
            imagenPerrito.src = datos.message;
        })
        // 4. Capturamos cualquier error en caso de que falle
        .catch(error => {
            console.error('Error al consumir la API:', error);
            alert('Hubo un problema al buscar el perrito.');
        });
}

// Cuando se haga clic en el botón, se ejecuta la función que llama a la API
btnGenerar.addEventListener('click', consumirAPI);