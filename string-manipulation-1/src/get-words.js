/* exported getWords */
// defining a function to split up a string into an array of words
// setting a new variable words to the value of strings being split at ' '
// creating an if condition where if the string is strictly equal to an empty string,
// return an empty array
// returning the new variable words

function getWords(string) {
  var words = string.split(' ');
  if (string === '') {
    return [];
  }
  return words;
}
