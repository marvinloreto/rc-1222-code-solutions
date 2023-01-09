/* exported Account */

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  var transaction = new Transaction('deposit', amount);
  if (Number.isInteger(amount) > 0 && amount > 0) {
    this.transactions.push(transaction);
    return true;
  }
  return false;
};

Account.prototype.withdraw = function (amount) {
  var transaction = new Transaction('withdrawal', amount);
  if (Number.isInteger(amount) > 0 && amount > 0) {
    this.transactions.push(transaction);
    return true;
  }
  return false;
};

Account.prototype.getBalance = function () {
  var balance = 0;
  this.transactions.forEach(transaction => {
    if (transaction.type === 'deposit') {
      balance += transaction.amount;
    } else if (transaction.type === 'withdrawal') {
      balance -= transaction.amount;
    }
  });
  return balance;
};
