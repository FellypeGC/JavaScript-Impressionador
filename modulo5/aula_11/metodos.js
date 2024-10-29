let frutas = ['maçã', 'melão', 'manga'];

console.log(frutas.includes('manga'));
console.log(frutas.includes('kiwi'));

console.log(frutas.every( // todos os elementos
  function(fruta) {
    return fruta.includes('m');
  }
));

console.log(frutas.some( // algum elemento
  function(fruta) {
    return fruta.includes('k');
  }
));

console.log(frutas.join(', '));