const FRASEFINAL = document.getElementById("frasefinal");
const FRASE = document.getElementById("frase");

function transformar(){
    
    FRASEFINAL.innerHTML = `La frase con espacios es: 
    ${ponerEspacios(FRASE.value)}`;

}
function ponerEspacios(string){
    return string.split("").join(" ");
}

function resetear(){
    let frase = document.getElementById("frase");
    let result = document.getElementById("frasefinal");

    frase.value = "";
    result.innerHTML = "";
}