/* Exercício 7: Crie um sistema de fila que herde de EventEmitter. A fila deve permitir
 adicionar "tarefas" (strings) e processá-las uma por vez a cada 2 segundos, emitindo um evento
 taskProcessed cada vez que uma tarefa for completada. Quando todas as tarefas forem
 processadas, emita um evento allTasksProcessed. */

/*  Exercício 8: Crie um sistema de log que herda de EventEmitter e registra todos os eventos
 emitidos, como login, logout e error. O sistema deve armazenar as mensagens de log e,
 ao final de cada dia (simulado por um intervalo de tempo de 5 segundos), emita um evento
 dailyLogReport com um resumo de todos os logs do dia. */