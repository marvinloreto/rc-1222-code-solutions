/* exported chunk */
function chunk(array, size) {
  var chunk = [];
  var i = 0;
  var n = array.length;
  while (i < n) {
    chunk.push(array.slice(i, i += size));
  }
  return chunk;
}
