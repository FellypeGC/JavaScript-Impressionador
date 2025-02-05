// Exemplo Base: Representando um usuário.
//const user = { nome: "Ana", idade: 34 }; // Objeto Original - Ele não pode ser alterado.
// user.nome = "Rebeca";

// const user2 = user;
// user2.nome = "Daniel";

// const user2 = { ...user };
// user2.nome = "Rebeca";
// console.log(user);

const user = { nome: "Ana", idade: 34 }; // Objeto Original
//Adicionamos uma propriedade
const updateUser = { ...user, email: "ana@example.com" }; // Objeto Copiado
console.log("Usuário com o email adicionado: ", updateUser);

// Remover propriedade
const { idade, ...userWithoutAge} = updateUser;
console.log("Removi idade: ", userWithoutAge);

// Atualizar propriedade
const updateUserName = { ...user, nome: "Caroline"} // - Copiado Objeto ->  user ; userWithoutAge
console.log("Usuário Atualizado: ", updateUserName);

// console.log(updateUser);
// console.log(user);