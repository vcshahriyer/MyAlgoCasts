// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  var a,
    b,
    temp = 0;
  a = stringA
    .replace(/[^\w]/g, "")
    .toUpperCase()
    .split("")
    .sort();
  b = stringB
    .replace(/[^\w]/g, "")
    .toUpperCase()
    .split("")
    .sort();
  if (a.length != b.length) {
    return false;
  } else {
    for (var i = 0; i < a.length; i++) {
      if (a[i] == b[i]) {
        temp++;
      }
    }
  }
  if (temp == a.length && temp == b.length) return true;
  return false;
}

module.exports = anagrams;
