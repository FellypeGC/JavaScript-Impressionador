const input = document.getElementById('taskInput');
const ul = document.getElementById('taskList');

function addTask() {
  if (input.value !== "") {
    //Adicionar tarefa
    const li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = input.value;

    //Botão para remover a tarefa
    const removerBotao = document.createElement('button');
    removerBotao.textContent = 'Remover';
    removerBotao.onclick = () => {
      ul.removeChild(li);
    };
    li.appendChild(removerBotao);

    //Esvaziar input ao adicionar tarefa
    input.value = "";
  } else {
    alert('Insira uma tarefa.');
  }
}
