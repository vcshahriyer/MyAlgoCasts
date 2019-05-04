// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  //My solution
  var checked = [],
    max = 0,
    temp = 0,
    maxchar = "";
  for (let char of str) {
    if (checked.includes(char)) {
    } else {
      for (var i = 0; i < str.length; i++) {
        if (char == str[i]) {
          temp++;
        }
      }
      checked.push(char);
      if (temp > max) {
        max = temp;
        maxchar = char;
      }
      temp = 0;
    }
  }
  return maxchar;
}

module.exports = maxChar;
