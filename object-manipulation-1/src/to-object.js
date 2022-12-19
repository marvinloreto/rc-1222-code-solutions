/* exported toObject */
// creating a function toObject with the parameter keyValuePair
// setting a variable key to the value of the given array at index 0
// setting a variable value to the value of the given array at index 1
// setting a variable object to an empty object
// setting the variable value equal to an object at a given key
// return the new object

function toObject(keyValuePair) {
  var key = keyValuePair[0];
  var value = keyValuePair[1];
  var object = {};
  object[key] = value;

  return object;
}
