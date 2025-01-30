const soma = (a, b) => {
  return a + b;
};
// console.log(soma(10, 5));

const quadrado = (x) => {
  return x * x;
};
// console.log(quadrado(5));

const calcularArea = (largura, altura) => {
  const area = largura * altura;
  return area;
};
// console.log(calcularArea(8, 6));

const objeto = {
  nome: 'Jose',
  metodo: function () {
    console.log(`Nome: ${this.nome}`);
  }
}

objeto.metodo();

// THIS LÉXICO

// const pessoa = {
//   nome: 'Jose',
//   saudacao: function () {
//     setTimeout(() => {
//       console.log(`Olá, ${this.nome}`);
//     }, 2000);
//   }
// }

const pessoa = {
  nome: 'Jose',
  saudacao: () => console.log(`Nome: ${this.nome}`)
}

pessoa.saudacao();