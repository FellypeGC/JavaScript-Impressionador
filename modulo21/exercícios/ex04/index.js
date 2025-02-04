// Importação das funções
import { addUser, deleteUser, updateUser } from "./userManager.js";

document.getElementById('addUserBtn').addEventListener('click', () => {
  const userName = document.getElementById('userName').value;
  addUser(userName);
});

document.getElementById('deleteUserBtn').addEventListener('click', () => {
  const userName = document.getElementById('userName').value;
  deleteUser(userName);
});

document.getElementById('updateUserBtn').addEventListener('click', () => {
  const userName = document.getElementById('userName').value;
  const newUserInfo = document.getElementById('newUserInfo').value;
  updateUser(userName, newUserInfo);
});

