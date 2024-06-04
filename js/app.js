// VARIABLES
const shoppingBasket = document.getElementById('shoppingBasket');
const shoppingBasketList = document.querySelector('#shoppingBasketList tbody');
const clearShoppingBasket = document.getElementById('clearShoppingBasket');
const courseList = document.getElementById('courseList');
let coursesShoppingBasket = [];

// Cargar Event Listeners
loadListeners();

function loadListeners() {
    // Agregar curso al carrito
    courseList.addEventListener('click', addCourseShoppingBasket);

    // Eliminar curso del carrito
    shoppingBasketList.addEventListener('click', deleteCourse);

    // Vaciar carrito
    clearShoppingBasket.addEventListener('click', emptyShoppingBasket);

    // Cargar carrito de Local Storage
    document.addEventListener('DOMContentLoaded', loadLocalStorage);
}

// FUNCIONES
function addCourseShoppingBasket(e) {
    if (e.target.classList.contains('addShoppingBasket')) {
        const courseSelected = e.target.parentElement.parentElement;
        readCourseToShoppingBasket(courseSelected);
    }
}

function readCourseToShoppingBasket(courseSelected) {
    const dataCourseSelected = {
        id: courseSelected.querySelector('a').getAttribute('data-id'),
        image: courseSelected.querySelector('img').src,
        title: courseSelected.querySelector('h4').textContent,
        price: courseSelected.querySelector('.precio span').textContent,
        quantity: 1,
    };

    // Verificar si el curso ya está en el carrito
    const exists = coursesShoppingBasket.some(course => course.id === dataCourseSelected.id);
    if (exists) {
        // Actualizar cantidad
        coursesShoppingBasket = coursesShoppingBasket.map(course => {
            if (course.id === dataCourseSelected.id) {
                course.quantity++;
                return course;
            } else {
                return course;
            }
        });
    } else {
        // Agregar curso al carrito
        coursesShoppingBasket = [...coursesShoppingBasket, dataCourseSelected];
    }

    printCourseShoppingBasket();
}

function printCourseShoppingBasket() {
    shoppingBasketList.textContent = '';

    coursesShoppingBasket.forEach((course) => {
        const { id, image, title, price, quantity } = course;

        const row = document.createElement('tr');

        row.innerHTML = `
        <td><img src="${image}" alt="${title}" /></td>
        <td>${title}</td>
        <td>${quantity}</td>
        <td>${price}</td>
        <td><a class="deleteCourse" data-id="${id}" href="#">X</a></td>
      `;

        shoppingBasketList.appendChild(row);
    });

    synchronizeLocalStorage();
}

function deleteCourse(e) {
    if (e.target.classList.contains('deleteCourse')) {
        const courseId = e.target.getAttribute('data-id');

        // Eliminar del arreglo de cursos
        coursesShoppingBasket = coursesShoppingBasket.filter(course => course.id !== courseId);

        printCourseShoppingBasket();
    }
}

function emptyShoppingBasket() {
    coursesShoppingBasket = [];
    printCourseShoppingBasket();
}

function synchronizeLocalStorage() {
    localStorage.setItem('coursesShoppingBasket', JSON.stringify(coursesShoppingBasket));
}

function loadLocalStorage() {
    coursesShoppingBasket = JSON.parse(localStorage.getItem('coursesShoppingBasket')) || [];
    printCourseShoppingBasket();
}
