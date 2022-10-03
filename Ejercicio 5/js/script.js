const VALOR1 = document.getElementById("num1");
const VALOR2 = document.getElementById("num2");
const RESPUESTA = document.getElementById("respuesta");
const FINAL = document.getElementById("final");

let char = RESPUESTA.value.toUpperCase

function validar(){
    switch(RESPUESTA.value){
        case "S" :
        case "s" :
             FINAL.innerHTML = sumar(VALOR1.value, VALOR2.value);
        break;
        case "R" :
        case "r" :
            FINAL.innerHTML = restar(VALOR1.value, VALOR2.value);
        break;
        case "M":
        case "m":
             FINAL.innerHTML = multiplicar(VALOR1.value, VALOR2.value);
        break;
        case "D":
        case "d":
             FINAL.innerHTML = dividir(VALOR1.value, VALOR2.value);
        break;
        default: FINAL.innerHTML = "Opcion invalida"
    }
}
//usar el metodo parseInt para que haga el caluclo en vez de concatenar
function sumar(a, b){
let res = parseInt(a)+parseInt(b);
return res;
}
function restar(a,b){
    let res = parseInt(a)-parseInt(b);
    return res;
}
function multiplicar(a,b){
    let res = parseInt(a) * parseInt(b);
    return res;
}
function dividir(a,b){
    if(a <= 0 || b <= 0){
        return "No se puede dividir por 0";
    }else{
    let res = parseInt(a)/parseInt(b);
    return res;
    }
}
//Boton que borra los campos
function borrar(){
//document.querySelector(".reset").addEventListener("click", () => {
    let firstInput = document.getElementById("num1");
    let secondInput = document.getElementById("num2");
    let thirdInput = document.getElementById("respuesta");
    let response = document.getElementById("final");
    firstInput.value = "";
    secondInput.value = "";
    thirdInput.value = "";
    response.innerHTML = "";
  }


