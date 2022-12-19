/* exported countdown */

function countdown(number) {
  var array = [];

  for (let i = 0; i <= number; i++) {
    array.unshift(i);
  }
  return array;
}
