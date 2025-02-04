const produto = {
  nome: "Caneta",
  preco: 2.5,
  detalhes: {
    categoria: "Material Escolar",
    estoque: 100,
    // info: {
    //   chave: {

    //   }
    // }
  },
};

Object.freeze(produto); // Congelamento do objeto no primeiro nível
console.log("Objeto congelado: ", produto);

//Tentar modificar os valores
produto.nome = "Lápis";
produto.detalhes.estoque = 50;

console.log("Tentativa de alteração após congelamento");
console.log("Produto: ", produto);

// Congelamento Profundo - Função
function deepFreeze(objeto) {
  Object.keys(objeto).forEach(key => {
    if (typeof objeto[key] === "object" && objeto[key] !== null) {
      deepFreeze(objeto[key]); //detalhes
    }
  });

  return Object.freeze(objeto);
}

// console.log(Object.keys(produto));
const produtoCongelado = deepFreeze(produto); // Produto original
produtoCongelado.detalhes.estoque = 30;
produtoCongelado.detalhes.novoCampo = "Teste";
console.log("Tentando alterar congelamento profundo: ", produto);
