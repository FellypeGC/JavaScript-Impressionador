class BankAccount {

  _balance = 0;

  constructor(personName, initialBalance, address) {
    this.personName = personName;
    this.balance = initialBalance;
    this.address = address;
  }

  get balance() {
    return this._balance;
  }
  
  set balance(value) {
    if( Math.abs(this._balance - value) > 2000 ) {
      throw new Error('Não permitimos saques ou depósitos maiores que R$2000,00.');
    }
    this._balance = value;
  }

  printInfo() {
    console.log (
      `Essa conta pertence a ${
        this.personName
      }, residente do endereço ${
        this.address
      } e possui um saldo atual de ${
        Number(this._balance).toFixed(2)
      } reais.`
    );
  }
}

const ba1 = new BankAccount('Daniel', 2000, 'Rua que sobe e desce');
// ba1.balance = ba1.balance + 4000;
// ba1.balance = ba1.balance - 3000;
ba1.balance = ba1.balance - 1990;

console.log(ba1)