const addNumbers = require('./add');
const subtractNumbers = require('./subtract');
const multiplyNumbers = require('./multiply');
const divideNumbers = require('./divide');

const x = Number(process.argv[2]);
const operation = process.argv[3];
const y = Number(process.argv[4]);

if (operation === 'plus') {
  console.log('result:', addNumbers(x, y));
} else if (operation === 'minus') {
  console.log('result:', subtractNumbers(x, y));
} else if (operation === 'times') {
  console.log('result:', multiplyNumbers(x, y));
} else if (operation === 'over') {
  console.log('result:', divideNumbers(x, y));
} else {
  console.log('invalid operation:', operation);
}
