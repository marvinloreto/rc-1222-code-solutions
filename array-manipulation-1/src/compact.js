/* exported compact */
// defining a function that will compact an array
// assigning a new variable compact into an empty array
// creating a for loop with initialization i = 0, condition i < array.length
// and incrementing by 1
// started an if statment that if the value of the array at the index is not a truthy value,
// pass the value to the new index
// return compact array

function compact(array) {
  var compact = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== false && Number.isNaN(array[i]) === false && array[i] !== undefined && array[i] !== null && array[i] !== '' && array[i] !== 0) {
      compact.push(array[i]);
    }
  }
  return compact;
}
