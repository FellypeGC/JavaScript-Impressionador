function BankAccount(personName, initialBalance, address) {
  this.personName = personName;
  this.balance = initialBalance;
  this.address = address;

  this.printInfo = function () {
    console.log(
      `Essa conta pertence a ${
        this.personName
      }, residente do endereço '${
        this.address
      }' e possuí saldo de ${
        Number(this.balance).toFixed(2)
      } reais.`
    );
  };
}

const ba1 = new BankAccount('Daniel', 2000, 'Rua que sobe e desce');

ba1.printInfo();
console.log(ba1 instanceof BankAccount);