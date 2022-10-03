const FRASEFINAL = document.getElementById("frasefinal");
const FRASE = document.getElementById("frase");

function transformar(){
    
    FRASEFINAL.innerHTML = `La frase dada vuelta es:
     ${darVuelta(FRASE.value)}`;

}
//funcion flecha
const darVuelta = (string) => {
   return string.split("").reverse().join("");
} 


function resetear(){
    let frase = document.getElementById("frase");
    let result = document.getElementById("frasefinal");

    frase.value = "";
    result.innerHTML = "";
}