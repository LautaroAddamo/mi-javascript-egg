const MAXIMO = document.getElementById("max");
const MINIMO = document.getElementById("min");
const PROMEDIO = document.getElementById("promedio");
const SUMA = document.getElementById("suma");


function comenzar(){
    
    let ingreso = prompt("Ingrese un numero");
    let max = ingreso;
    let min;
    if (ingreso != 0) {
        min = ingreso;
    }
    
    let contador = 0;
    let suma = ingreso;
    while (ingreso != 0) {
        ingreso = prompt("Ingrese un numero");
        if (ingreso > max) {
            max = ingreso;
        }
        if (ingreso< min && ingreso!=0) {
            min = ingreso;
        }
        contador++;
        suma = parseInt(suma) + parseInt(ingreso);

    }
    let promedio = suma / contador;

    MAXIMO.innerHTML = "El numero maximo ingresado fue " + max;
    MINIMO.innerHTML = "El numero minimo ingresado fue " + min;
    PROMEDIO.innerHTML = "El promedio de los numeros ingresados fue " + promedio;
    SUMA.innerHTML = "La suma de los numeros ingresados fue " + suma;
}