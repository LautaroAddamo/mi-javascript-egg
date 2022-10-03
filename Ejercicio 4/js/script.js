const RESPUESTA = document.getElementById("respuesta");
const CARACTER = document.getElementById("caracter");


function validar(){
    if(CARACTER.value == "S" || CARACTER.value == "N" || CARACTER.value == "s" || CARACTER.value == "n"){
        RESPUESTA.innerHTML = "Correcto";
    }else{
        RESPUESTA.innerHTML = "Incorrecto";
    }
}