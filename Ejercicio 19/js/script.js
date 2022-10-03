const RESULTADO = document.getElementById("resultado");

const arrayA = Array.from({length: 20}, () => Math.floor(Math.random() * 100) );
let arrayB = new Array(20);



function mostrarArrayA(){
    alert(`${arrayA}`)
}
function mostrarArrayOrdenado(){
    let arrayOrdenado = arrayA.sort(function(a,b){return a-b});
    alert(`${arrayOrdenado}`)
}

let obtenerDiezValores = () => arrayA.slice(0,10);

function unirArrays(){
    for (let i = 0; i < arrayB.length; i++) {
        if (i<10) {
            arrayB[i] = arrayA[i];
        }else{
            arrayB[i] = 0.5;
        }
        
    }
    return arrayB;
}

function mostrarArrayB(){
    alert(`${unirArrays()}`)
}

