const RESULTADO = document.getElementById("resultado")

function calcular(){
    let formulario = document.getElementById("formulario");
    let radio = formulario.radio.value;
    
    RESULTADO.innerHTML = `El area es ${calcularArea(radio)}<br>
    El perimetro es ${calcularPerimetro(radio)}`;
}
function calcularArea(radio){
    return Math.PI * Math.pow(radio,2)
}

function calcularPerimetro(radio){
    return 2 * Math.PI * radio
}