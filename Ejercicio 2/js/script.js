const RESULTADO = document.getElementById("resultado");
const RADIO = document.getElementById("radio");

function resultado(){

    const AREA = Math.PI * Math.pow(RADIO.value, 2);
    const PERIMETRO = 2 * Math.PI * RADIO.value;

    RESULTADO.innerHTML = 
    "El area es " + AREA +"<br>" 
    + " El perimetro es " + PERIMETRO;
}
