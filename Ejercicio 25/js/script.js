const RESULTADO = document.getElementById("resultado");

function mostrar(){
    let formulario = document.getElementById("formulario");

    let nombre = formulario.nombre.value;
    let apellido = formulario.apellido.value;

    RESULTADO.innerHTML = `El nombre es: ${nombre}<br>
    El apellido es: ${apellido}`
}