class Wallet {
  constructor(username) {
    this._username = username; // Propriedade privada
  }

  // Getter para acessar o username
  get username() {
    return `Usuário: ${this._username}`; // personalizando a forma do get
  }

  // Setter para modificar o username
  set username(newUsername) {
    if (typeof newUsername === "string" && newUsername.length >= 3) {
      return this._username = newUsername;
    } else {
      console.error("username deve ser uma string!");
    }
  }
}

const wallet = new Wallet("Isaac");
console.log(wallet.username); // GET
wallet.username = "12"; // SET
console.log(wallet.username); // GET