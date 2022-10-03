const RESULTADO = document.getElementById("persona");


function mostrar(){
    let persona = {
        nombre: "Lautaro",
        sexo: "Hombre",
        peso: 93,
        altura: 191
    }
    /*for (const key in persona) {
        RESULTADO.innerHTML = `${key} : ${persona[key]}`
    }*/
    console.log(persona);

    RESULTADO.innerHTML = 
        `Nombre: ${persona.nombre}<br>
        Sexo: ${persona.sexo}<br>
        Peso(kg): ${persona.peso}<br>
        Altura(cms): ${persona.altura}`;
}


console.log(typeof persona);