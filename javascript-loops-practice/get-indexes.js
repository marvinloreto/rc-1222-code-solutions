/* exported getIndexes */

function getIndexes(array) {
  var indexes = [];
  for (var index in array) {
    indexes.push(Number(index));
  }
  return indexes;
}
