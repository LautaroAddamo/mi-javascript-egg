const LIMITE = document.getElementById("limite");
const FINAL = document.getElementById("final");




function validar(){
    let suma = 0;
    while (suma<=parseInt(LIMITE.value)) {
        let ingreso = prompt("Ingrese un numero");
        suma = parseInt(suma) + parseInt(ingreso);
    }
    FINAL.innerHTML = "Supero el limite de " + LIMITE.value + ". La suma actual es " + suma;
}


function resetear(){
    let input = document.getElementById("limite");
    let final = document.getElementById("final");
    input.value = "";
    final.innerHTML = "";
}

