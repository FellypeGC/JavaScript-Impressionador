function fatorial(n) {
  // Caso Base: Se n for 0 ou 1, retornar 1
  if (n === 0 || n === 1) {
    return 1; // Condição de parada: fatorial de 0 e 1 é 1
  }
  // Chamada Recursiva: Se n for maior que 1, chamar a função novamente
  else {
    return n * fatorial(n - 1); // Chamada recursiva para calcular o fatorial
  }
}

console.log(fatorial(5)); // Saída: 120 ( 5 * 4 * 3 * 2 * 1)
