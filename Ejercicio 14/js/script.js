const RESULTADO = document.getElementById("resultado");


class Libro{
    constructor(isbn,autor,titulo,cantidadHojas){
        this.isbn = isbn;
        this.autor = autor;
        this.titulo = titulo;
        this.cantidadHojas = cantidadHojas;
    }
}

const crearLibro = () => {
    let formulario = document.getElementById("formulario");
    return new Libro(formulario.isbn.value,
        formulario.autor.value,
        formulario.titulo.value,
        formulario.cantidadHojas.value);
}

function mostrarLibro(){
    const Librito = crearLibro();
    RESULTADO.innerHTML = `El numero de ISBN es: ${Librito.isbn} <br> El titulo del libro es: ${Librito.titulo} <br> El autor del libro es: ${Librito.autor} <br> La cantidad de paginas es: ${Librito.cantidadHojas}`
    
   
}




        