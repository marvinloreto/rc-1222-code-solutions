/* exported lastChars */

function lastChars(length, string) {
  var last = string.slice((string.length - length));
  if (length > string.length) {
    return string;
  }
  return last;
}
