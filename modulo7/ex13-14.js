//? Requisito 13: Crie uma função que receba duas distâncias (distancia1 e distancia2) e retorne
//? qual pessoa está mais próxima, indicando "Pessoa 1" se a primeira distância for menor,
//? "Pessoa 2" se a segunda distância for menor, ou "Ambos estão a mesma distância" se as
//? distâncias forem iguais.

function calcularDistancia(distancia1, distancia2) {
  const pessoa1 = 'Pessoa 1';
  const pessoa2 = 'Pessoa 2';

  if (distancia1 < distancia2) {
    return pessoa1;
  } else if (distancia2 < distancia1) {
    return pessoa2;
  } else {
    return 'Ambos estão na mesma distância';
  }
}

console.log(calcularDistancia(10, 15));
console.log(calcularDistancia(20, 15));
console.log(calcularDistancia(30, 30));

//? Requisito 14: Crie uma função que receba um array de despesas e retorne um novo array
//? contendo "Alto Gasto" para despesas maiores que 100 e "Gasto Controlado" para despesas
//? iguais ou menores que 100.

function controleDespesas(despesas) {
  let newArray = [];
  for (let i = 0; i < despesas.length; i++) {
    if (despesas[i] > 100) {
      newArray.push('Alto Gasto');
    } else if (despesas[i] <= 100) {
      newArray.push('Gasto Controlado');
    }
  }
  return newArray;
}

const despesas = [150, 80, 200, 60, 120];
const resultado = controleDespesas(despesas);


console.log(resultado);