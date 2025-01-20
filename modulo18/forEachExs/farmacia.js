const medicamentos = [
  { nome: "Paracetamol", estoque: 150, preco: 5.99 },
  { nome: "Amoxicilina", estoque: 80, preco: 9.5 },
  { nome: "Ibuprofeno", estoque: 200, preco: 7.8 },
];

medicamentos.forEach((medicamento) => {
  const ul = document.querySelector('.ul-stock-product');
  const li = document.createElement('li');
  ul.appendChild(li);

  li.textContent = `Nome medicamento: ${medicamento.nome}. Quantidade de estoque: ${medicamento.estoque}`;
});

medicamentos.forEach((medicamento) => {
  const ulPrice = document.querySelector('.price');
  const li = document.createElement('li');
  ulPrice.appendChild(li);

  li.textContent = `Nome: ${medicamento.nome} Preço R$${medicamento.preco.toFixed(2)}`;
});


let medicamentosEmFalta = 0;
const nomesMedicamentosEmFalta = []; // Array para armazenar os nomes em falta

medicamentos.forEach((medicamento) => {
  if (medicamento.estoque === 0) {
    medicamentosEmFalta += 1;
    nomesMedicamentosEmFalta.push(medicamento.nome); // Adicionar os nomes ao Array
  } 

  const totalLackStock = document.querySelector('.total-lack');
  totalLackStock.textContent = `Total de medicamentos em falta: ${medicamentosEmFalta}`;
  const lackStock = document.querySelector('.lack');
  lackStock.textContent = `Medicamentos em Falta: ${nomesMedicamentosEmFalta}`;

  if (medicamentosEmFalta > 0) {
    lackStock.textContent = `Medicamentos em falta: ${nomesMedicamentosEmFalta.join(', ')}`
  } else {
    lackStock.textContent = `Todos os medicamentos estão disponíveis!`;
  }
});