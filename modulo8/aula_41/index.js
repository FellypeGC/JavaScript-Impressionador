//Evento de Submit
document.addEventListener('DOMContentLoaded', function () {
  let formulario = document.getElementById('meuFormulario');

  formulario.addEventListener('submit', function () {
    alert('Formulário enviado com sucesso');
  });
});

//Selecionando elemento
let campoTexto = document.getElementById('campoTexto');

//Evento de Change
campoTexto.addEventListener('change', function () {
  console.log('Campo de texto foi alterado: ' + campoTexto.value);
});

//Evento de Focus
campoTexto.addEventListener('focus', function () {
  console.log('Campo de Texto Focado!');
});

//Evento de Blur
campoTexto.addEventListener('blur', function () {
  console.log('Campo de texto Desfocado');
});