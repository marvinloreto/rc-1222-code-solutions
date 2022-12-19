/* exported getKeys */
// defining a function that will find the keys of a given object
// setting a new variable to an empty array;
// creating a for in loop that pushes the keys of an object into a new array
// return the array keys

function getKeys(object) {
  var keys = [];
  for (var key in object) {
    keys.push(key);
  }
  return keys;
}
