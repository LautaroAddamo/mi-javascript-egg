const EDAD = document.getElementById("respuesta");

const RESPUESTA = document.getElementById("edad")
function validar(){

    if(RESPUESTA.value <= 18){//PONE SIEMPRE EL .VALUE
        EDAD.innerHTML = "Sos menor de edad";
    }else{
        EDAD.innerHTML = "Sos mayor de edad";
    }
        
}