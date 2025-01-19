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

  li.textContent = `Nome: ${medicamento.nome} Preço ${medicamento.preco}`;
});


let medicamentosEmFalta = 0;

medicamentos.forEach((medicamento) => {
  const lackStock = document.querySelector('.lack');

  if (medicamento.estoque === 0) {
    medicamentosEmFalta += 1;
    lackStock.innerHTML += `Nome dos medicamento ${medicamento.nome}`
    lackStock.innerHTML += `<p>Total de medicamentos faltando: ${medicamentosEmFalta}</p>`;
  } 
});


