# React + Ionic - Aplicación de Wishlist

## Descripción

Esta es una aplicación móvil desarrollada con **Ionic React** como prueba técnica para *Double V Partners* que permite a los usuarios buscar productos en una tienda en línea y agregarlos a una lista de deseos (*wishlist*). La aplicación utiliza una API pública para obtener los datos de los productos y permite a los usuarios:
- Buscar productos por nombre.
- Agregar productos a una lista de deseos persistente.
- Ver y eliminar productos de la lista de deseos.

### Tecnologías utilizadas:
- **Ionic React**: Para la interfaz de usuario y navegación.
- **React Context**: Para el manejo global del estado de la *wishlist*.
- **TypeScript**: Para un desarrollo más seguro y estructurado.
- **CSS**: Para los estilos y diseño responsivo.
- **API pública**: `https://api.escuelajs.co/api/v1/products` (*esta se limito con un `/?offset=0&limit=50` para traer únicamente 50 productos y hacer pruebas con ello*).

## Requisitos

- **Node.js**: Asegúrate de tener [Node.js](https://nodejs.org/) instalado en tu máquina.
- **Ionic CLI**: Debes instalar el CLI de Ionic para ejecutar la aplicación.
    ```bash
    npm install -g @ionic/cli
    ```

## Instalación y Ejecución

Sigue estos pasos para clonar y ejecutar el proyecto en tu máquina local:

1. **Clona el repositorio**:
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    ```

2. **Navega a la carpeta del proyecto**:
    ```bash
    cd nombre-del-proyecto
    ```

3. **Instala las dependencias**:
    ```bash
    npm install
    ```

4. **Ejecuta la aplicación**:
    ```bash
    ionic serve
    ```
    Esto iniciará un servidor local y podrás ver la aplicación en tu navegador accediendo a `http://localhost:8100`.

## Características

- **Búsqueda de Productos**: La aplicación permite buscar productos por nombre. La barra de búsqueda es fija y se mantiene visible al hacer scroll.
- **Agregar a Wishlist**: Los productos se pueden agregar a una lista de deseos mediante el botón "Add to Wishlist".
- **Visualización de Wishlist**: Los productos añadidos a la lista de deseos se muestran en una página específica donde se puede ver la imagen, descripción y eliminar productos de la lista.
- **Persistencia de Datos**: La lista de deseos se guarda en `localStorage`, por lo que los productos se mantienen incluso al recargar la página o cerrar la aplicación.

## Consideraciones

1. **Persistencia**: La *wishlist* utiliza `localStorage` para mantener los productos agregados.
2. **Estructura de Código**: La aplicación sigue una arquitectura basada en componentes reutilizables. Además, utiliza el Context API de React para manejar el estado global de la *wishlist*.
3. **Estilos y Diseño**: La aplicación incluye diseño responsivo para adaptarse a diferentes tamaños de pantalla, utilizando flexbox para organizar las *cards* de los productos.

<!-- ## Posibles Mejoras

- **Sincronización de Datos**: Implementar una sincronización con una base de datos remota para que la *wishlist* esté disponible en múltiples dispositivos.
- **Filtros Avanzados**: Agregar más opciones de filtrado, como por categoría o rango de precios, utilizando la funcionalidad de filtrado de la API. -->

## Estructura de Archivos

El proyecto está organizado en las siguientes carpetas:
- **components/**: Contiene los componentes reutilizables como `ProductCard`, `WishlistCard` y `ProductList`.
- **context/**: Incluye el `WishlistContext` para manejar el estado global de la *wishlist*.
- **pages/**: Contiene las páginas principales de la aplicación (`Home.tsx`, `WishlistPage.tsx`).
- **services/**: Incluye los archivos relacionados con la API `api.ts`.
<!-- - **theme/**: Contiene archivos CSS para personalizar los estilos globales de la aplicación. -->
