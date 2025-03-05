class Endereco {
  constructor(rua, cidade, estado) {
    this.rua = rua;
    this.cidade = cidade;
    this.estado = estado;
  }

  // Método para formatar o endereço completo
  getCompleteAddress() {
    return `${this.rua}, ${this.cidade}, ${this.estado}`;
  }
}

class Pessoa {
  constructor(nome, idade, endereco) {
    this.nome = nome;
    this.idade = idade;
    this.endereco = endereco; // Tipo objeto -> Armazenar um objeto da classe Endereço
  }

  // Método exibir detalhes da pessoa
  getDetails() {
    return `Nome: ${this.nome}, Idade: ${this.idade}, Endereço: ${this.endereco.getCompleteAddress()}`;
  }
}

// Criar um endereço
const enderecoJoao = new Endereco("Rua das Flores, 123", "São Paulo", "SP");
// console.log(enderecoJoao);

// Criar uma pessoa
const joao = new Pessoa("João Ramires", 30, enderecoJoao);
console.log(joao);
console.log(joao.getDetails());

// Associação simples 1:1

// Agregação
class Roda {
  constructor(tipo) {
    this.tipo = tipo;
  }
}

class Carro {
  constructor(modelo) {
    this.modelo = modelo;
    this.rodas = []; // Agregação de rodas
  }

  adicionarRoda(roda) {
    this.rodas.push(roda);
  }
}

const carro = new Carro("SUV");
console.log(carro);
carro.adicionarRoda(new Roda("Dianteira Esquerda"));
carro.adicionarRoda(new Roda("Dianteira Direita"));
console.log(carro.rodas.map((roda) => roda.tipo))