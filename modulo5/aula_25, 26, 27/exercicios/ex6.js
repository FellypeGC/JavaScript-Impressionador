// Verificar se o número é finito
// Você quer garantir que um número não seja Infinity ou NaN antes de usá-lo em cálculos.

function verifyFiniteNumber() {
  let num = 1 / 0;
  let notNumber = NaN;
  let string = Number('abc');

  if (isFinite(num) || (isNaN(string, notNumber))) {
    return 'O número é infinito ou não é um número';
  }
}

console.log(verifyFiniteNumber());