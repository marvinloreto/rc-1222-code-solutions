const takeAChance = require('./take-a-chance');

const greeting = takeAChance('Marvin');

greeting.then(value => {
  console.log(value);
}).catch(error => {
  console.error(error.message);
});
