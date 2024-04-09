document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById('meuFormulario');

  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    let dados = new FormData(formulario);

    for (let [chave, valor] of dados.entries()) {
      console.log(chave + ":" + valor);
    }
  })
})