const PERIMETRO = document.getElementById("perimetro");
const AREA = document.getElementById("area");

class Circulo{
    constructor(radio){
        this.radio = radio;
    }
}

const crearCirculo = () => {
    let radio = document.getElementById("radio");
    return new Circulo(radio.value);//siempre el .value, si no lo pongo, envio la etiqueta
}

function calcularArea(Circulo){
    return Math.PI * Math.pow(Circulo.radio,2)
}

function calcularPerimetro(Circulo){
    return 2 * Math.PI * Circulo.radio
}

function mostrarPerimetro(){
let circulo = crearCirculo();

PERIMETRO.innerHTML = `El perimetro es ${calcularPerimetro(circulo)}`;
}

function mostrarArea(){
let circulo = crearCirculo();

AREA.innerHTML = `El area es ${calcularArea(circulo)}`;
}


