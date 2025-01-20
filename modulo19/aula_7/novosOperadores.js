// Operador Spread (...) 
let lista = [1, 2, 3, 4, 5];
let novaLista = [...lista, 6, 7, 8, 9];
console.log(lista);
console.log(novaLista);

lista = [1, 2];
console.log(novaLista);

let objeto = {
  a: 1,
  b: 2,
  c: 3,
}

let novoObjeto = {...objeto, d: 4};
console.log(novoObjeto);

// Operador Rest (...)

// Rest Params
function somar(...numeros) {
  return numeros.reduce((total, numero) => total + numero, 0);
}

//console.log(somar(1, 2, 3, 4, 5)); // Output -> 15
//console.log(somar(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // Output -> 55

// Desestruturação do Array
let [primeiroElemento, segundoElemento, ...resto] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(primeiroElemento);
console.log(segundoElemento);
console.log(resto);

// Desestruturação Objeto
let { a, b, ...restante } = { a: 1, b: 2, c: 3, d: 4 };
console.log(a);
console.log(b);
console.log(restante);