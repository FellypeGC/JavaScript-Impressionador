// Object Literal
const account1 = {
  name: 'Daniel Porto',
  accountNumber: '12345678-9',
  balance: 500,
  displayBalance: function() {
    console.log(
      `Account number ${this.accountNumber} has a total balance of ${this.balance}.`
    );
  },
};

const account2 = {
  name: 'João Lira',
  accountNumber: '98765432-1',
  balance: 50000,
  displayBalance: function () {
    console.log(
      `Account number ${this.accountNumber} has a total balance of ${this.balance}.`
    );
  },
};