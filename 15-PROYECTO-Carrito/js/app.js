//Variables para referenciar a objetos del documento
const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');

let listadoCarrito = [];
const agregarCurso = (e) => {
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const curso = e.target.parentElement.parentElement;
        const infoCurso = {
            imagen: curso.querySelector('img').src, 
            nombre: curso.querySelector('h4').textContent,
            precio: curso.querySelector('p.precio').textContent,
            id: curso.querySelector('.agregar-carrito').getAttribute('data-id'),
            cantidad: 1


        }
        console.log(infoCurso);
        agregarCarrito(infoCurso);
    }
}
const agregarCarrito = curso =>{
    listadoCarrito = [...listadoCarrito, curso];
    console.log(listadoCarrito);


}
const cargarEventsListener = () => {
    //Agregar funcion de carga de cursos
    listaCursos.addEventListener('click', agregarCurso);
}

cargarEventsListener();