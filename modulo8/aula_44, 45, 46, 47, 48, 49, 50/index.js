document.addEventListener('DOMContentLoaded', function () {
  const formulario = document.getElementById('meuFormulario');

  formulario.addEventListener('submit', function (event) {
    if (!validarCamposObrigatorios()) {
      event.preventDefault(); // Impede a submissão do formulário se houver erros
    }

    if (!compararValores()) {
      event.preventDefault();
    }
  });

  function validarCamposObrigatorios() {
    let camposObrigatorios = document.querySelectorAll('.obrigatorio');
    let camposValidos = true;

    for (let i = 0; camposObrigatorios.length > i; i++) {
      let campo = camposObrigatorios[i];

      if (campo.value === '' || campo.value === null) {
        console.log('campo obrigatorio');
        camposValidos = false;
      }
    } // elemento 0, 1, 2, 3
    console.log(camposValidos)
    return camposValidos;
  }

  function compararValores() {
    const senha = document.getElementById('senha');
    const confirmarSenha = document.getElementById('confirmarSenha');

    if (senha.value !== confirmarSenha.value) {
      console.log('As senhas não coincidem.');
      return false;
    }
    return true;
  }
});