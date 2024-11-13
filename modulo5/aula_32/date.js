// Classe vs Instância 

class Carro {
  marca = 'Toyota';
  modelo = 'Corolla';
  ano = 2024;

  ligar() {
    console.log('Carro ligado');
  }

  desligar() {
    console.log('Carro desligado');
  }

  exibirInformacoes() {
    console.log(`O carro é de modelo: ${Carro.modelo} da marca ${Carro.marca}, do ano de ${Carro.ano}`);
  }
}

// Classe
const classeCarro = new Carro(); // Criar
console.log(classeCarro.modelo);


// Objeto simples
const carro = {
  marca: 'Toyota',
  modelo: 'Corolla',
  ano: 2024,
}

// console.log(carro.modelo);

// Objeto Global Date
console.log(Math); 
console.log(new Date()); // Classe do JavaScript 

const dataAtual = new Date(); // Criando uma instância do objeto/classe DATE
console.log(dataAtual);
