class Member {
  constructor(fullname, email, password) {
    this.fullname = fullname;
    this.email = email;
    this.password = password;
  }

  authenticate(email, password) {
    return email === this.email && password === this.password ? "Login bem-sucedido" : "Falha no Login";
  }
}

const alice = new Member("Alice Johnson", "alice@email.com", "password123"); 
const authenticate1 = alice.authenticate("alice@email.com", "password123"); // Login bem-sucedido. 
const authenticate2 = alice.authenticate("alice@email.com", "wrongpassword"); // Falha no login. 

console.log(authenticate1);
console.log(authenticate2);