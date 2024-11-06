// Exercício 4
console.log('Ex 4');

const imoveis = [
  { id: 1, tipo: 'Apartamento', valor: 400000, disponivel: true, bairro: 'Centro' }, 
  { id: 2, tipo: 'Casa', valor: 550000, disponivel: false, bairro: 'Subúrbio' }, 
  { id: 3, tipo: 'Cobertura',valor: 900000, disponivel: true, bairro: 'Centro'  }, 
  { id: 4, tipo: 'Apartamento', valor: 300000,disponivel: false, bairro: 'Zona Sul' }, 
  { id: 5, tipo: 'Casa', valor: 700000, disponivel: true, bairro: 'Centro'  }
];

const imoveisDisponiveis = imoveis.filter(imovel => imovel.disponivel);
console.log(imoveisDisponiveis);

// Exercício 5
console.log('Ex 5');

const imoveisDeAltoValor = imoveis.filter(imovel => imovel.valor > 500000);
console.log(imoveisDeAltoValor);

// Exercício 6
console.log('Ex 6');
const imoveisNoCentro = imoveis.filter(imovel => imovel.bairro === 'Centro');

console.log(imoveisNoCentro);