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
  var chank = [];
  var start = 0;
  while (start < array.length) {
    chank.push(array.slice(start, start + size));
    start += size;
  }
  return chank;
}
module.exports = chunk;

// MY Solution.
/*function chunk(array, size) {
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
}*/

// Solution1 from video
/*function chunk(array, size) {
    var chank = [];
    for (let element of array) {
      const lastel = chank[chank.length - 1];
      if (!lastel || lastel.length == size) {
        chank.push([element]);
      } else {
        lastel.push(element);
      }
    }
    return chank;
  }*/
