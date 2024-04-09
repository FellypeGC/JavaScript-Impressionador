document.addEventListener('DOMContentLoaded', function () {
  const formulario = document.getElementById('meuFormulario');

  formulario.addEventListener('submit', function (event) {
    resetarMensagensDeErro();

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
        exibirErro(campo, 'Campo obrigatório');
        camposValidos = false;
      }
    } // elemento 0, 1, 2, 3
    return camposValidos;
  }

  function compararValores() {
    const senha = document.getElementById('senha');
    const confirmarSenha = document.getElementById('confirmarSenha');

    if (senha.value !== confirmarSenha.value) {
      exibirErro(confirmarSenha, 'As senhas não coincidem.');
      return false;
    }
    return true;
  }

  function exibirErro(elemento, mensagem) {
    let mensagemErro = elemento.parentElement.querySelector('.error-message');
    mensagemErro.textContent = mensagem;
    mensagemErro.style.display = 'inline-block';
  }

  function resetarMensagensDeErro() {
    let mensagensErro = document.querySelectorAll('.error-message');

    for(let i = 0; i < mensagensErro.length; i++) {
      mensagensErro[i].textContent = '';
    }
  }
});