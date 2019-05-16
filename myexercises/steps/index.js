// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  var output = "";
  for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= i; j++) {
      output += "#";
    }
    for (var k = j; k <= n; k++) {
      output += " ";
    }
    console.log(output);
    output = "";
  }
}

module.exports = steps;
