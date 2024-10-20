// Ejemplo 1: Cambiar el texto de un botón
let button = document.querySelector('#buy-button');

// Cambiar el texto del botón al hacer clic
button.addEventListener('click', () => {
    button.textContent = 'Añadido al carrito';
});

// Ejemplo 2: Mostrar un mensaje dinámicamente
let addButton = document.querySelector('#add-to-cart');
let message = document.querySelector('#message');

// Mostrar el mensaje al hacer clic en el botón
addButton.addEventListener('click', () => {
    message.style.display = 'block';
});

// Ejemplo 3: Simular carga de productos con setTimeout
let loadButton = document.querySelector('#load-products');
let productsDiv = document.querySelector('#products');

// Simular carga de productos
loadButton.addEventListener('click', () => {
    productsDiv.textContent = 'Cargando...';

    setTimeout(() => {
        productsDiv.textContent = 'Productos cargados: Televisor, Teléfono, Laptop';
    }, 2000); // Simula una carga de 2 segundos
});

// Ejemplo 4: Uso de fetch para obtener datos
let fetchButton = document.querySelector('#fetch-products');
let resultsDiv = document.querySelector('#product-results');

// Simular una búsqueda de productos con fetch
fetchButton.addEventListener('click', () => {
    resultsDiv.textContent = 'Buscando productos...';

    // Simulamos una petición a un servidor
    setTimeout(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then(data => {
                resultsDiv.textContent = 'Producto encontrado: ' + data.title;
            });
    }, 1000);
});

// Ejercicio Básico: Simular una compra en Amazon
let buyButton2 = document.querySelector('#buy-button-2');
let statusMessage = document.querySelector('#status-message');

buyButton2.addEventListener('click', () => {
    statusMessage.textContent = 'Compra en proceso...';

    // Simular retardo en la respuesta del servidor
    setTimeout(() => {
        statusMessage.textContent = 'Compra exitosa';
    }, 2000); // Simular un retardo de 2 segundos
});
