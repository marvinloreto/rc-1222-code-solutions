/* exported reverse */
// defining a function that reverses the submitted array
// setting a new variable reverse to an empty array
// creating a for loop with the initalization i = 0, the conditon i < array.length
// and incrementing by 1
// in the loop we are setting the reverse[i] to equal
// the indexes of the array minus the index location.
// return reverse

function reverse(array) {
  var reverse = [];
  for (let i = 0; i < array.length; i++) {
    reverse[i] = array[array.length - i - 1];
  }
  return reverse;
}
