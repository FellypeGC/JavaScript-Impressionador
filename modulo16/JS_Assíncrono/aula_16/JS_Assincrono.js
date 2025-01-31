// CALLBACK HELL

async function tarefa1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Tarefa 1 concluída');
      resolve();
    }, 1000);
  });
}

async function tarefa2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Tarefa 2 concluída');
      resolve();
    }, 1000);
  });
}

async function tarefa3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Tarefa 3 concluída');
      resolve();
    }, 1000);
  });
}

// Resolução Async/Await
async function realiazarTarefas() {
  await tarefa1();
  await tarefa2();
  await tarefa3();
}

realiazarTarefas();

// tarefa1()
//   .then(() => tarefa2())
//   .then(() => tarefa3())
//   .then(() => console.log('Todas as tarefas concluídas!'));