var x = 5;
var y = 3;
var z = 9;

var maximumValue = Math.max(x, y, z);

console.log('Maximum Value:', maximumValue);

var heroes = ['Spider-Man', 'Nightwing', 'Ghost Spider', 'Robin'];

var randomNumber = Math.random() * heroes.length;

var randomIndex = Math.floor(randomNumber);
console.log('Random Index:', randomIndex);

var randomHero = heroes[randomIndex];
console.log('Random Hero:', randomHero);

var library = [
  {
    title: 'Harry Potter and the Philosopher\'s Stone',
    author: 'J.K. Rowling'
  },

  {
    title: 'The Burning God',
    author: 'R.F. Kuang'
  },
  {
    title: 'A Darker Shade of Magic',
    author: 'V.E. Schwab'
  }];

var lastBook = library.pop();
console.log('Name of last book:', lastBook);

var firstBook = library.shift();
console.log('Name of first book:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('Library:', library);

var fullName = 'Marvin Loreto';

var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
