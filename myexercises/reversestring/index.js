// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  var newstr = "";
  for (i = str.length; i > 0; i--) {
    newstr += str[i - 1];
  }
  return newstr;
}

module.exports = reverse;
