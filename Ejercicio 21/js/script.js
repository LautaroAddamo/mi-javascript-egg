const RESULTADO = document.getElementById("resultado");

const Persona = {
    nombre: "nombre",
    edad: "edad",
    sexo: "sexo",
    peso: "peso",
    altura: "altura",
  };
  
  function mostrar() {
    RESULTADO.innerHTML = `Los atributos son: <br> ${Object.values(Persona)}`;
  }
