/* exported isVowel */
// defining a function that will tell if a character is a vowel or not
// making an if statement where if the character is a vowel, return true,
// if not, return false

function isVowel(char) {
  if (char === 'a' || char === 'A' || char === 'e' || char === 'E' || char === 'i' ||
    char === 'I' || char === 'o' || char === 'O' || char === 'u' || char === 'U') {
    return true;
  } else {
    return false;
  }
}
