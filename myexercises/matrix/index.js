// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]
//  matrix(5)
//     [[1,  2,  3, 4,  5],
//     [16, 17, 18, 19, 6],
//     [15, 24, 25, 20, 7],
//     [14, 23, 22, 21, 8],
//     [13, 12, 11, 10, 9]]

function matrix(n) {
  let startRow = 0,
    startCl = 0,
    endRow = n - 1,
    endCl = n - 1,
    count = 1,
    result = new Array(n).fill(0).map(() => new Array(n).fill(0));

  while (startCl <= endCl && startRow <= endRow) {
    for (let i = startCl; i <= endCl; i++) {
      result[startRow][i] = count++;
    }
    startRow++;
    for (let i = startRow; i <= endRow; i++) {
      result[i][endCl] = count++;
    }
    endCl--;
    for (let i = endCl; i >= startCl; i--) {
      result[endRow][i] = count++;
    }
    endRow--;
    for (let i = endRow; i >= startRow; i--) {
      result[i][startCl] = count++;
    }
    startCl++;
  }
  return result;
}

module.exports = matrix;
