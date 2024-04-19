function BankAccount(personName, initialBalance, address) {
  this.personName = personName;
  this.initialBalance = initialBalance;
  this.address = address;
}

const acc1 = new BankAccount('Daniel', 200, 'rua que sobe e desce e vai para a direita');
console.log(acc1);
console.log(typeof acc1);

const acc2 = new BankAccount('Lira', 200000, 'Brodway');
console.log(acc2);