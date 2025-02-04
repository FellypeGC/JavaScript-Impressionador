const message = document.getElementById('message');

// Cria função addUser
function addUser(user) {
  message.textContent = `Usuário ${user} adicionado!`;
}

// Função deletar
function deleteUser(user) {
  message.textContent = `Usuário ${user} foi deletado!`;
}

// Função Atualizar
function updateUser(user, newInfo) {
  message.textContent = `Usuário ${user} foi atualizado com uma nova informação: ${newInfo}`;
}

export { addUser, deleteUser, updateUser }

// const managerUser = { addUser, deleteUser, updateUser };
// export default managerUser;