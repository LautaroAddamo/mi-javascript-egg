const FRASE = document.getElementById("frase");
const RESULTADO = document.getElementById("frasefinal");

function tipoDeDato(){
    RESULTADO.innerHTML = dato(FRASE.value);
}

function dato(string){
    return dato = (string)  => typeof string; 

}
    

function resetear(){
    let frase = document.getElementById("frase");
    let result = document.getElementById("frasefinal");

    frase.value = "";
    result.innerHTML = "";
} 