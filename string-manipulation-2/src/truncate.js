/* exported truncate */

function truncate(length, string) {
  var truncate = string.slice(0, length) + '...';
  return truncate;
}
