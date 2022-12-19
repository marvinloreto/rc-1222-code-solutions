/* exported isUpperCased */
// defining a function to check if the word is in all upper case or not
// writing an if statement with the condition: if the word = WORD, then true. Else false

function isUpperCased(word) {
  if (word === word.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}
