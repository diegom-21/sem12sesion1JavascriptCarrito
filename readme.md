# Proyecto Carrito 

Aplicación web que simula un carrito de compras en línea. Los usuarios pueden agregar cursos al carrito, visualizar los cursos añadidos, eliminar cursos y vaciar completamente el carrito. También se utiliza localStorage para mantener la persistencia del carrito entre sesiones del navegador.

## Funcionalidades Principales

- **Agregar Cursos al Carrito**: Permite a los usuarios seleccionar cursos y añadirlos al carrito.
- **Mostrar Cursos en el Carrito**: Visualiza los cursos añadidos en una tabla dentro del carrito.
- **Eliminar Cursos del Carrito**: Permite a los usuarios eliminar cursos específicos del carrito.
- **Vaciar el Carrito**: Permite a los usuarios vaciar completamente el carrito.
- **Persistencia con Local Storage**: Almacena los datos del carrito en localStorage para mantener los cursos entre recargas de página y sesiones del navegador.

### Selectores del DOM

Se utilizan selectores del DOM para acceder a elementos clave de la página, como el contenedor del carrito, la lista de cursos y los botones de acción, permitiendo interactuar dinámicamente con el HTML.

### Event Listeners

La función loadListeners añade event listeners que gestionan las interacciones del usuario con el carrito. Incluye eventos de clic para agregar, eliminar y vaciar el carrito, y carga los datos del carrito desde localStorage al cargar la página.

### Agregar Curso al Carrito

La función addCourseShoppingBasket captura el clic en el botón "Agregar al carrito", obtiene la información del curso correspondiente y llama a readCourseToShoppingBasket para añadir el curso al carrito.

### Leer Datos del Curso y Añadirlo al Carrito

La función readCourseToShoppingBasket extrae los datos del curso seleccionado (ID, imagen, título, precio, cantidad) y verifica si ya está en el carrito. Si ya existe, incrementa su cantidad; si no, lo añade como un nuevo elemento al array coursesShoppingBasket.

### Mostrar Cursos en el Carrito

La función printCourseShoppingBasket renderiza los cursos añadidos en el carrito, actualizando el DOM con los datos de los cursos en coursesShoppingBasket. Borra el contenido anterior y genera nuevas filas para cada curso, mostrando detalles como imagen, título, cantidad, precio y un botón "X" para eliminar el curso.

### Eliminar Curso del Carrito

La función deleteCourse se activa al hacer clic en el botón "X", identifica el curso a eliminar mediante su data-id y lo remueve del array coursesShoppingBasket. Luego, actualiza la visualización del carrito.

### Vaciar Carrito

La función emptyShoppingBasket limpia completamente el array coursesShoppingBasket y actualiza la visualización del carrito para mostrar que está vacío. Se activa al hacer clic en el botón "Vaciar Carrito".

### Persistencia con Local Storage

La función synchronizeLocalStorage guarda el estado actual del carrito en localStorage para asegurar la persistencia de los datos. La función loadLocalStorage carga los datos del carrito desde localStorage al iniciar la aplicación, manteniendo el estado del carrito entre sesiones del navegador.
