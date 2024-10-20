# Manipulación del DOM y Asincronismo en JavaScript

Este proyecto presenta ejemplos básicos de **manipulación del DOM** y **asincronismo en JavaScript**, que se aplican en sitios web como Amazon para mejorar la experiencia del usuario. A continuación, se explican cada uno de los ejemplos implementados en el archivo `sin.js`.

## Contenidos

- [Manipulación del DOM y Asincronismo en JavaScript](#manipulación-del-dom-y-asincronismo-en-javascript)
  - [Contenidos](#contenidos)
  - [Requisitos](#requisitos)
  - [Ejemplo 1: Cambiar el texto de un botón](#ejemplo-1-cambiar-el-texto-de-un-botón)
    - [Flujo:](#flujo)
  - [Ejemplo 2: Mostrar un mensaje dinámicamente](#ejemplo-2-mostrar-un-mensaje-dinámicamente)
    - [Flujo:](#flujo-1)
  - [Ejemplo 3: Simular la carga de productos](#ejemplo-3-simular-la-carga-de-productos)
    - [Flujo:](#flujo-2)
  - [Ejemplo 4: Uso de `fetch` para obtener datos](#ejemplo-4-uso-de-fetch-para-obtener-datos)
    - [Flujo:](#flujo-3)
  - [Simular una compra en Amazon](#simular-una-compra-en-amazon)
    - [Flujo:](#flujo-4)
  - [Cómo ejecutar](#cómo-ejecutar)
  - [Autor : Mathias Teran](#autor--mathias-teran)

## Requisitos

Este proyecto solo requiere un navegador web para su funcionamiento, ya que los ejemplos están implementados con HTML, CSS y JavaScript puro.

## Ejemplo 1: Cambiar el texto de un botón

Este ejemplo muestra cómo modificar el texto de un botón al hacer clic sobre él, utilizando el método `addEventListener` para detectar la acción del usuario.

- **Elemento HTML involucrado**: Botón con `id="buy-button"`
- **Descripción**: Al hacer clic en el botón "Comprar ahora", el texto cambia a "Añadido al carrito".
  
```javascript
let button = document.querySelector('#buy-button');

button.addEventListener('click', () => {
    button.textContent = 'Añadido al carrito';
});
```

### Flujo:
1. El botón es seleccionado usando `document.querySelector`.
2. Se escucha el evento `click` en el botón.
3. Al hacer clic, se cambia el texto del botón.

## Ejemplo 2: Mostrar un mensaje dinámicamente

Este ejemplo muestra cómo cambiar el estilo CSS de un elemento dinámicamente para mostrar u ocultar un mensaje cuando se hace clic en un botón.

- **Elementos HTML involucrados**: 
  - Botón con `id="add-to-cart"`
  - Párrafo con `id="message"` que inicialmente está oculto.

```javascript
let addButton = document.querySelector('#add-to-cart');
let message = document.querySelector('#message');

addButton.addEventListener('click', () => {
    message.style.display = 'block';
});
```

### Flujo:
1. Se seleccionan el botón y el párrafo con `document.querySelector`.
2. Se escucha el evento `click` en el botón.
3. Al hacer clic, se cambia el estilo del párrafo para que se muestre (`display: block`).

## Ejemplo 3: Simular la carga de productos

Este ejemplo simula la carga de productos usando `setTimeout` para retrasar la actualización de la lista de productos.

- **Elementos HTML involucrados**:
  - Botón con `id="load-products"`
  - `div` con `id="products"` para mostrar los productos.

```javascript
let loadButton = document.querySelector('#load-products');
let productsDiv = document.querySelector('#products');

loadButton.addEventListener('click', () => {
    productsDiv.textContent = 'Cargando...';

    setTimeout(() => {
        productsDiv.textContent = 'Productos cargados: Televisor, Teléfono, Laptop';
    }, 2000); // Simula una carga de 2 segundos
});
```

### Flujo:
1. Se seleccionan el botón y el contenedor de productos.
2. Al hacer clic, se muestra un mensaje de "Cargando...".
3. Después de 2 segundos (`setTimeout`), se actualiza el contenido con los productos cargados.

## Ejemplo 4: Uso de `fetch` para obtener datos

Este ejemplo utiliza la API de `fetch` para simular la obtención de productos desde un servidor, lo cual es común en sitios web que buscan productos dinámicamente.

- **Elementos HTML involucrados**:
  - Botón con `id="fetch-products"`
  - `div` con `id="product-results"` donde se muestran los resultados.

```javascript
let fetchButton = document.querySelector('#fetch-products');
let resultsDiv = document.querySelector('#product-results');

fetchButton.addEventListener('click', () => {
    resultsDiv.textContent = 'Buscando productos...';

    setTimeout(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then(data => {
                resultsDiv.textContent = 'Producto encontrado: ' + data.title;
            });
    }, 1000);
});
```

### Flujo:
1. Se seleccionan el botón y el div donde aparecerán los resultados.
2. Al hacer clic, se simula una búsqueda de productos con un mensaje.
3. Después de 1 segundo (`setTimeout`), se realiza una solicitud `fetch`.
4. Cuando la respuesta llega, se actualiza el contenido con el título del producto.

## Simular una compra en Amazon

Este ejercicio simula una compra en Amazon, mostrando un mensaje de "Compra en proceso" y luego un mensaje de "Compra exitosa" después de un breve retardo.

- **Elementos HTML involucrados**:
  - Botón con `id="buy-button-2"`
  - Párrafo con `id="status-message"` para mostrar el estado de la compra.

```javascript
let buyButton2 = document.querySelector('#buy-button-2');
let statusMessage = document.querySelector('#status-message');

buyButton2.addEventListener('click', () => {
    statusMessage.textContent = 'Compra en proceso...';

    setTimeout(() => {
        statusMessage.textContent = 'Compra exitosa';
    }, 2000); // Simular un retardo de 2 segundos
});
```

### Flujo:
1. Al hacer clic en el botón de compra, se muestra un mensaje de estado.
2. Después de 2 segundos (`setTimeout`), se actualiza el mensaje para indicar que la compra fue exitosa.

## Cómo ejecutar

1. Descarga todos los archivos en un mismo directorio.
2. Abre el archivo `index.html` en tu navegador.
3. Interactúa con los botones y observa cómo el contenido cambia dinámicamente.

Este proyecto muestra cómo se puede manipular el DOM y realizar operaciones asíncronas, conceptos clave en el desarrollo de aplicaciones web dinámicas como Amazon.

## Autor : Mathias Teran
