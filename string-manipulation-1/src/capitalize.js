/* exported capitalize */

// defining a function that capitalizes the first character of a string
// assigning a new variable cap to have the value of the first letter of the string
// being capitalized and concatenating with the rest of the string, with
// the original first letter being sliced and making sure the rest of the string is
// in lower case.

function capitalize(word) {
  var cap = word[0].toUpperCase() + word.slice(1).toLowerCase();
  return cap;
}
