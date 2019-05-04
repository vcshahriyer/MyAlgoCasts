// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9
//   reverseInt(56832) === 23865

function reverseInt(n) {
  var rev = parseInt(
    n
      .toString()
      .split("")
      .reverse()
      .join("")
  );
  return rev * Math.sign(n);
}
module.exports = reverseInt;

// function reverseInt(n) {
//   if (n < 0) {
//     var sine = false;
//     n = -1 * n;
//   } else {
//     var sine = true;
//   }
//   var rev = 0;
//   while (n != 0) {
//     rev = rev * 10 + (n % 10);
//     n = n / 10;
//     n = parseInt(n);
//   }
//   if (sine === false) return -rev;
//   return rev;
// }
