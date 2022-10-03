const ESTADO = document.getElementById("estado");//traigo la etiqueta p que tiene como id la palabra "estado"

let respuesta = prompt("Como esta el dia hoy?");


ESTADO.innerHTML = "el dia esta" + respuesta ;

//alert("El dia esta " + window.prompt("Como esta el dia hoy?"));
