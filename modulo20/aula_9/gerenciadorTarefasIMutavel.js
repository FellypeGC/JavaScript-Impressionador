// Lista Original de tarefas
const tasks = [
  { id: 1, task: "Comprar leite", completed: false },
  { id: 2, task: "Estudar JavaScript", completed: false }
];

// Função para adicionar uma nova tarefa 
const addTask = (tasks, newTask) => [
  ...tasks,
  { id: Date.now(), task: newTask, completed: false }
];


// Adicionar uma nova Tarefa
const newTask = addTask(tasks, "Praticar imutabilidade");
console.log(newTask);
console.log("Original:", tasks);

// Função para marcar uma tarefa como concluída
const completeTask = (tasks, taskId) => {
  return tasks.map(task => task.id === taskId ? { ...task, completed: true } : task);
}

const completedTasks = completeTask(newTask, 1);
console.log("Completo:", completedTasks);
console.log("Original:", tasks);