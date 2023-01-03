/* exported invert */

function invert(source) {
  var invert = {};
  for (var key in source) {
    invert[source[key]] = key;
  }
  return invert;
}
