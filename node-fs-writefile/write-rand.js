const fs = require('fs');

const randomNumber = String(Math.random());
fs.writeFile('random.txt', randomNumber + '\n', 'utf8', err => {
  if (err) throw err;
});
