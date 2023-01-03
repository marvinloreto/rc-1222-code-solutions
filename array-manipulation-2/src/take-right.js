/* exported takeRight */
function takeRight(array, count) {
  var right = array.slice((array.length - count));
  if (count > array.length) {
    return array;
  }
  return right;
}
