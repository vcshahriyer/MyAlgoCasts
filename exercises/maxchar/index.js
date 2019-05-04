// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  var charmap = {},
    max = 0,
    maxchar = "";
  for (let char of str) {
    if (charmap[char]) {
      charmap[char] = charmap[char] + 1;
    } else {
      charmap[char] = 1;
    }
  }
  for (let char in charmap) {
    if (charmap[char] > max) {
      max = charmap[char];
      maxchar = char;
    }
  }
  return maxchar;
}

module.exports = maxChar;

// First unoptimized technique on the fly!

/*function maxChar(str) {
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
  */
