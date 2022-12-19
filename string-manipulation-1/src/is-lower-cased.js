/* exported isLowerCased */
// defining a function to check if the word is in all lower case or not
// writing an if statement with the condition: if the word = word, then true. Else false

function isLowerCased(word) {
  if (word === word.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}
