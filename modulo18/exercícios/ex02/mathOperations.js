export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function multiply(a, b) {
  if (process.env.NODE_ENV === 'development') {
    console.log('Ambiente de desenvolvimento.');
    return a * b;
  } else {
    let error = 'Estamos em outro ambiente. Não podemos utilizar a função';
    return error;
  }
}
