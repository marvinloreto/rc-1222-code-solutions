function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

console.log('Number of seconds:', convertMinutesToSeconds(5));

function greet(name) {
  var greeting = 'Hey, ' + name;
  return greeting;
}

console.log('Greeting:', greet('Spider-Man'));

function getArea(width, height) {
  var area = width * height;
  return area;
}

console.log('Value of Area:', getArea(17, 42));

function getFirstName(person) {
  var name = person.firstName;
  return name;
}

console.log('First Name:', getFirstName({ firstName: 'Peter', lastName: 'Parker' }));

function getLastElement(array) {
  var lastIndex = array.length - 1;
  var lastElement = array[lastIndex];
  return lastElement;
}

console.log('Last Element:', getLastElement(['web', 'suit', 'web-fluid', 'backpack']));
