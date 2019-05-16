// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 0; j < n - i; j++) {
      str += " ";
    }
    for (let k = 0; k < i * 2 - 1; k++) {
      str += "#";
    }
    for (let j = 0; j < n - i; j++) {
      str += " ";
    }
    console.log(str);
  }
}

module.exports = pyramid;
