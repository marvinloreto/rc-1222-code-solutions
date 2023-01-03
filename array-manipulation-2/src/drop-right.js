/* exported dropRight */

function dropRight(array, value) {
  var dropRight = array.slice(0, array.length - value);
  return dropRight;
}
