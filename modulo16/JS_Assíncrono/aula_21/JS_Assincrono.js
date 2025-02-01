// 1° tarefa síncrona
console.log('Início'); // 1° execução

// 1° macrotasks - adicionada a fila de macrotasks
setTimeout(() => {
  console.log('setTimeout 1');
}, 0); // 7° execução

// 1° microtasks - adiciona a fila microtasks
Promise.resolve().then(() => {
  console.log('Promise 1');
}); // 3° execução - 1° micro da fila

// 2° microtasks - adiciona a fila microtasks
queueMicrotask(() => {
  console.log('queueMicrotask 1');
}); // 4° execução - 2° micro da fila

// Criando queueMicrotask com Promise - ?? (3° microtasks - fila das microtasks)
queueMicrotask(() => {
  Promise.resolve().then(() => console.log('queueMicrotask 2'));
}); // 6° execução - 4° micro da fila

// 2° tarefa macrotasks - adiciona a fila macrotasks
setTimeout(() => {
  console.log('setTimeout 2');
}, 0); // 8° execução - 2° fila de macro

// Criando queueMicrotask com setTimeout - ?? (4° microtarefa - fila de microtasks - ERRADO) - 3° tarefa macro
queueMicrotask(() => {
  setTimeout(() => console.log('queueMicrotask 3'), 0);
}); // 9° execução - 3° fila de macro

// 5° microtasks
Promise.resolve().then(() => {
  console.log('Promise 2');
}); // 5° execução - 3° micro da fila

// 2° tarefa síncrona
console.log('Fim');