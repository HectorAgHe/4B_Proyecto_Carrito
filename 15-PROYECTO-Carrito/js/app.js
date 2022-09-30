//Variables para referenciar a objetos del documento
const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');


const agregarCurso = (e) => {
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        console.log("Presionaste el botón");
    }
}

const cargarEventsListener = () => {
    //Agregar funcion de carga de cursos
    listaCursos.addEventListener('click', agregarCurso);
}

cargarEventsListener();