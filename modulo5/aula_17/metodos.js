const pessoa = {
  cidade: 'RJ',
  surf: true,
  falar: function () {
    console.log('falou');
  }
}

const carro = {
  modelo: 'Corolla',
  marca: 'Toyota',
}

const joao = Object.create(pessoa); // Herdade de um objeto
Object.assign(joao, carro); // Copiar as propriedades

joao.falar();
console.log(joao.cidade, joao.surf);

joao.nome = 'joao';
joao.idade = 30;

console.log(joao);
console.log(joao.hasOwnProperty('marca'));