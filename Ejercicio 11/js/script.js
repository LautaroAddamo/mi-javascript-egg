const FRASE = document.getElementById("frase");
const RESULTADO = document.getElementById("frasefinal");

function transformar(){
    RESULTADO.innerHTML = stringLargo(FRASE.value);
}
const stringLargo = (string)  =>{
    string = string.split(" ");
    return string.sort((a,b) => b.length - a.length)[0]; 
}

function resetear(){
    let frase = document.getElementById("frase");
    let result = document.getElementById("frasefinal");

    frase.value = "";
    result.innerHTML = "";
}