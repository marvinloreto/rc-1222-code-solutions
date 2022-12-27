/* exported capitalizeWords */

function capitalizeWords(string) {
  var words = string.split(' ');
  var arrayString = '';
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
    arrayString = arrayString + words[i] + ' ';
  }
  return arrayString.slice(0, string.length);
}
