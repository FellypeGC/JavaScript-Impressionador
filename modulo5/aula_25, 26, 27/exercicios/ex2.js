// Somar valores numéricos de uma entrada de formulário
// Você recebe dois valores numéricos como string. Converta-os e some-os corretamente.

const sumNumValues = () => {
  const value1 = Number.parseInt('10');
  const value2 = Number.parseFloat('20.5');

  return value1 + value2;
}

const resultado = sumNumValues();
console.log(resultado);