const NUMERO = document.getElementById("num1");
const RESPUESTA = document.getElementById("final");


function validar(){
if(NUMERO.value % 2 == 0){
    RESPUESTA.innerHTML = "El numero es par";
}else{
    RESPUESTA.innerHTML = "El numero es impar"
}
}
function resetear(){
    let firstInput = document.getElementById("num1");
    let response = document.getElementById("final");
    firstInput.value = "";
    response.innerHTML = "";
}
