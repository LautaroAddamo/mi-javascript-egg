const RESULTADO = document.getElementById("resultado");
const MODIFICAR = document.getElementById("modificar");
    let array1 = Array.from({length: 10}, () => Math.floor(Math.random() * 100) );

function mostrarArrays(){

   
    RESULTADO.innerHTML = `Array: ${array1}`;
}

function quitarFinal(){
    let arrayAux = array1.splice(8,10);
    MODIFICAR.innerHTML = `Modificado: ${array1}` 
}