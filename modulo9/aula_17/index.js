function criarElemento() {
  const ul = document.getElementById('lista-de-elementos');
  const body = document.body;
  const novaLi = document.createElement('li');
  const novoInput = document.createElement('input');

  // novaLi.appendChild(novoInput);
  // ul.appendChild(novaLi);
  body.appendChild(novoInput);
}