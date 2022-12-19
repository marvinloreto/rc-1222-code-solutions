/* exported getValues */
// defining a function that gives us the values of an object
// assigning a new varible values to an empty array
// creating a for loop to get each key to access the object and push the property value
// into the new array
// return the new array

function getValues(object) {
  var values = [];
  for (var key in object) {
    values.push(object[key]);
  }
  return values;
}
