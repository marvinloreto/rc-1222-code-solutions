/* exported capitalizeWord */

function capitalizeWord(word) {
  var cap = word[0].toUpperCase() + word.slice(1).toLowerCase();

  if (word.toLowerCase() === 'javascript') {
    cap = 'JavaScript';
  }
  return cap;
}
