/* exported initial */
// defining a function to return an array without the last index
// assigning a new variable initial to an empty array
// creating a for loop with the initialization expression i=0, the condition
// i < (array.length -1) (to omit the last index) and increments by 1
// the loop pushes the indexes of the array into the new array
// return the new array

function initial(array) {
  var initial = [];
  for (let i = 0; i < (array.length - 1); i++) {
    initial.push(array[i]);
  }
  return initial;
}
