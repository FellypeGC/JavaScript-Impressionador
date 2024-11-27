function criarElementoInnerText() {
  const ul = document.getElementById('lista-de-elementos');

  const body = document.body;

  const novaLi = document.createElement('li');
  novaLi.innerText = 'Novo input com InnerText';

  const novoInput = document.createElement('input');

  novaLi.appendChild(novoInput);
  ul.appendChild(novaLi);
}

function criarElementoInnerHtml() {
  const ul = document.getElementById('lista-de-elementos');
  const novaLi = document.createElement('li');

  novaLi.innerHTML = '<p>Novo parágrafo</p>';
  ul.appendChild(novaLi);
}

function criarElementoTextContent() {
  const ul = document.getElementById('lista-de-elementos');
  const novaLi = document.createElement('li');
  const novoInput = document.createElement('input');

  novaLi.textContent = 'Atribuindo conteúdo TextContent';
  ul.appendChild(novaLi);
  novaLi.appendChild(novoInput);
}

// innerText - texto  - estilização css: elementos ocultos
// textContent - texto
// innerHTML - conteudo html e texto

