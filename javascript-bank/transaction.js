/* exported Transaction */

function Transaction(type, amount) {
  this.type = type;
  this.amount = amount;
  return this.type + this.amount;
}
