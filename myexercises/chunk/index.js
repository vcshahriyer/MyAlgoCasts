// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  // MY Solution.
  var arrlen = array.length;
  looplen = array.length / size;
  looplen = Math.ceil(looplen);
  var start = 0,
    end = size,
    arr = [],
    temp = [];
  for (var i = 0; i < looplen; i++) {
    for (var j = start; j < end; j++) {
      temp.push(array[j]);
    }
    start = j;
    if (end + size > arrlen) {
      end = arrlen;
    } else {
      end = end + size;
    }
    arr.push(temp);
    temp = [];
  }
  return arr;
}
module.exports = chunk;
