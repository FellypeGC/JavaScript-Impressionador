console.log(1);
const result = setTimeout(
  () => write2OnConsoleAndReturnString((message) => {
  console.log(message);
  console.log(message + ' - mensagem escrita no console por uma segunda vez');
}), 2000);

function write2OnConsoleAndReturnString(callbackFunction) {
  console.log(2);
  callbackFunction('Procedure Completed');
}

() => {
  console.log('uma instrução só');
  console.log('Aqui temos um segundo log');
}

() => console.log('uma instrução só');