/* exported ransomCase */

function ransomCase(string) {
  var ransomCase = '';
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      ransomCase = ransomCase + string[i].toLowerCase();
    } else {
      ransomCase = ransomCase + string[i].toUpperCase();
    }
  }
  return ransomCase;
}
