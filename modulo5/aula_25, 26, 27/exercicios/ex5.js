// Verificar se a entrada é um número válido
// Você recebe uma entrada do usuário e precisa garantir que seja um número válido antes de
// realizar qualquer operação.

function isValidNumber() {
  let inputNumStr = "123abc";
  
  if (isNaN(inputNumStr)) return 'A entrada não é um número válido'; 
}

console.log(isValidNumber());