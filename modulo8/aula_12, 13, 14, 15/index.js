// getElementByTagName: Seleciona elementos pelo nome da tag.
const titulo = document.getElementsByTagName('h2');
console.log('Selecionando pela tag h2: ', titulo)

// getElementsByClassName: Seleciona elementos por classe.
const paragrafosItens = document.getElementsByClassName('texto-lista');
console.log('Selecionando por nome da classe: ', paragrafosItens);

// querySelector: Seleciona um elemento usando um seletor CSS.
const destacado = document.getElementById('destacado');
console.log('Selecionando por ID: ', destacado)

// querySelector: Seleciona um elemento usando um seletor CSS.
const destacadoSelector = document.querySelector('#destacado');
console.log('Selecionando ID por seletor CSS: ', destacadoSelector);

// querySelectorAll: Seleciona todos os elementos que correspondem a um seletor CSS.
const allPItens = document.querySelectorAll('.texto-lista');
console.log('Selecionando múltiplos elementos por seletor CSS: ', allPItens);

// getElementsByName: Seleciona elementos pelo atributo name.
const inputName = document.getElementsByName('username');
console.log('Selecionando por atributo name (username): ', username);

// querySelectorAll('*'): Seleciona todos os elementos no documento.
const allElements = document.querySelectorAll('*');
console.log('Selecionando TODOS os elementos: ', allElements);