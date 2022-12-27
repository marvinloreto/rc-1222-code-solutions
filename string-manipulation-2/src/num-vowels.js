/* exported numVowels */
var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

function numVowels(string) {
  var number = 0;
  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      number++;
    }
  }
  return number;
}
