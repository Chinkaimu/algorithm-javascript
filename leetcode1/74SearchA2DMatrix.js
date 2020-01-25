/**
 * 1. Find which row.
 * 2. Find target in the row.
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  var lastLen = matrix[matrix.length-1].length;
  if (matrix.length === 0 || target < matrix[0][0] || target > matrix[matrix.length-1][lastLen]) {
    return false;
  }

  return searchTarget(searchRow(matrix, target));
};

var searchTarget = function (array, target) {
  
}
var searchRow = function (array, target) {
  var start = 0;
  var end = array.length;
  var mid;

  // While start and end is adjacent or equal, it should break out.
  while (start + 1 < end) {
    mid = parseInt(start + (end - start)/2);
    if (array[mid] === target) {
      return mid;
    } else if (array[mid] < target) {
      start = mid;
    } else if (array[mid] > target) {
      end = mid;
    }
  }

  if (array[start] >= target && start > 1) {
    return start - 1;
  }

  if (array[end] >= target && end > 1) {
    return end - 1;
  }

  return array.length - 1;
}