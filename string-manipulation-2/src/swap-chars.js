/* exported swapChars */

function swapChars(firstIndex, secondIndex, string) {
  var swap = '';
  var first = string[firstIndex];
  var second = string[secondIndex];
  for (let i = 0; i < string.length; i++) {
    if (i !== firstIndex && i !== secondIndex) {
      swap = swap + string[i];
    } else if (i === firstIndex) {
      swap = swap + second;
    } else if (i === secondIndex) {
      swap = swap + first;
    }
  }
  return swap;
}
