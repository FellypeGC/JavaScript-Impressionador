console.log('Exercício 7');

const vendas = [
  { id: 1, valor: 1500 },
  { id: 2, valor: 2300 },
  { id: 3, valor: 3200 },
  { id: 4, valor: 4100 },
  { id: 5, valor: 1800 }
];

const faturamentoTotalDaEmpresa = vendas.reduce((total, venda) => total + venda.valor, 0);
console.log(faturamentoTotalDaEmpresa);

console.log('Exercício 8');

const avaliacoes =  [ 
  { cliente: 'João', pontuacao: 4 }, 
  { cliente: 'Maria', pontuacao: 5 }, 
  { cliente: 'Pedro', pontuacao: 3 }, 
  { cliente: 'Ana', pontuacao: 4 }, 
  { cliente: 'Lucas', pontuacao: 5 } 
];

const mediaAvaliacoes = avaliacoes.reduce((total, avaliacao) => total + avaliacao.pontuacao / avaliacoes.length, 0);
console.log(mediaAvaliacoes);

console.log('Exercício 9');

const produtosVendidos =  [ 
  { nome: 'Camisa', categoria: 'Vestuário' }, 
  { nome: 'Calça', categoria: 'Vestuário' }, 
  { nome: 'Notebook', categoria: 'Eletrônicos' }, 
  { nome: 'Celular', categoria: 'Eletrônicos' }, 
  { nome: 'Tênis', categoria: 'Calçados' }, 
  { nome: 'Meias', categoria: 'Vestuário' } 
];

const contagemPorCategoria = produtosVendidos.reduce((contagem, produto) => {
  contagem[produto.categoria] = (contagem[produto.categoria] || 0) + 1;
  return contagem;
}, {});

console.log(contagemPorCategoria);

