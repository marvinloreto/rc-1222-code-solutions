/* exported tail */
// defining a function to return an array without the first index
// assigning a new variable tail to an empty array
// create a for loop with initialization expression i=1 (to omit the first index)
// the conditon i < length of array, and is incrementing by 1
// the loop pushes the index of the submitted array into a new array
// return the new array

function tail(array) {
  var tail = [];
  for (let i = 1; i < array.length; i++) {
    tail.push(array[i]);
  }
  return tail;
}
