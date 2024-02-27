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

//Os PASSOS 2 AO 8 SERÃO IMPLEMENTADOS DENTRO DA FUNÇÃO addTask().


//Passo 8 - Lidar com tarefas vazias:
//Caso o campo de entrada esteja vazio no momento de adicionar, exiba um alerta pedindo para inserir uma tarefa.

//Passo 9 -  Testar a funcionalidade:
//Teste sua implementação interagindo com o campo de entrada, adicionando tarefas e removendo-as utilizando o botão de remoção.
