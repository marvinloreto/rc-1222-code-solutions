/* exported reverseWord */
// defining a function that writes the word in reverse
// setting a new variable reverse to an empty string
// creating a for loop with the initalization i = length of word minus 1,
// the condition i >= 0,
// and decreasing by 1
// in the loop we are setting the reverse to add and reassign itself with the index
// of the original word
// return reverse

function reverseWord(word) {
  var reverse = '';
  for (let i = word.length - 1; i >= 0; i--) {
    reverse += word[i];
  }
  return reverse;
}
