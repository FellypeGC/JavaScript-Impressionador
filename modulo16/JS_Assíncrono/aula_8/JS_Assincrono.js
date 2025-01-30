// Arrow Function
// () => {}
  
const minhaFuncao = () => console.log('Sou uma arrow function');
minhaFuncao();

// setTimeout(() => {
//   console.log('Estou dentro do setTimeout utilizando uma arrow function');
// }, 2000);

let contador = 5;

let intervalo = setInterval(() => {
  console.log('Contador está no número: ' + contador);
  contador--;

  // Quando o contador chegar a 0 - precisa parar o intervalo
  if (contador < 0) {
    clearInterval(intervalo);
  }
}, 1000);

console.log(intervalo);

let intervalo2 = setInterval(() => {
  console.log('Este não tem parada');

  if (contador === 3) {
    clearInterval(intervalo2);
  }
}, 3000);