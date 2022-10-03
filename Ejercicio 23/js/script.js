const PARRAFO = document.getElementById("parrafo");

let texto = PARRAFO.innerText;
let textovalue = texto.split(/[\s,\.,\"]+/);

let marcarTexto = () => (
  textovalue.forEach((palabra) => {
    if (palabra.length > 8) {
      texto = texto.split(palabra).join(`<mark>${palabra}</mark>`);
    }
  }),
  (PARRAFO.innerHTML = texto)
);