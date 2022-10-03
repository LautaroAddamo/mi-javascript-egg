const RESULTADO = document.getElementById("resultado");
const ARRAY = document.getElementById("array");
let valores = [true, 5, false, "hola", "adios", 2];

let textoMayor = () => (valores[3].length > valores[4].length ? valores[3] : valores[4])
let booleanTrue = () => (valores[0] || valores[2] ? true : false);
let booleanFalse = () => (valores[0] && valores[2] ? true : false);
let suma = () => (valores[1] + valores[5]);
let resta = () => (valores[1] - valores[5]);
let division = () => (valores[1] / valores[5]);
let multiplicacion = () => (valores[1] / valores[5]);

function mostrar(){
    ARRAY.innerHTML = valores;

    RESULTADO.innerHTML = `La palabra mas larga es: ${textoMayor()}<br>
    Operadores necesarios ${booleanTrue()} y ${booleanFalse()}<br>
    La suma es: ${suma()}<br>
    La resta es: ${resta()}<br>
    La division es: ${division()}<br>
    La multiplicacion es: ${multiplicacion()}`
}