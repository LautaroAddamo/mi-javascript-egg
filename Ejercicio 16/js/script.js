const RESULTADO = document.getElementById("resultado");

function mostrarArrays(){
    let array1 = Array.from({length: 5}, () => Math.floor(Math.random() * 100) );
    let array2 = Array.from({length: 5}, () => Math.floor(Math.random() * 100) );
    RESULTADO.innerHTML = `Primer array: ${array1}<br>

    Segundo array: ${array2}`;
}

