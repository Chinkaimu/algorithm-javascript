/**
 * 1. Find which row.
 * 2. Find target in the row.
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if (matrix.length === 0) {
    return false;
  }

  if (Array.isArray(matrix[0]) && target < matrix[0][0]) {
    return false;
  }

  if (Array.isArray(matrix[matrix.length-1])) {
    var len = matrix[matrix.length - 1].length;
    if (target > matrix[matrix.length - 1][len]) {
      return false;
    }
  }

  var row = searchRow(matrix, target);
  if (typeof row === 'boolean') {
    return row;
  }
  return searchTarget(matrix[row], target);
};

var searchTarget = function (array, target) {
  var start = 0;
  var end = array.length - 1;
  var mid;

  while (start + 1 < end) {
    mid = parseInt(start + (end - start)/2);
    if (array[mid] === target) {
      return true;
    } else if (array[mid] < target) {
      start = mid;
    } else if (array[mid] > target) {
      end = mid;
    }
  }

  if (array[start] === target || array[end] === target) {
    return true;
  }

  return false;
}

var searchRow = function (array, target) {
  var start = 0;
  var end = array.length - 1;
  var mid;

  // While start and end is adjacent or equal, it should break out.
  while (start + 1 < end) {
    mid = parseInt(start + (end - start)/2);
    if (array[mid][0] === target) {
      return true;
    } else if (array[mid][0] < target) {
      start = mid;
    } else if (array[mid][0] > target) {
      end = mid;
    }
  }

  if (array[start] === target) {
    return true;
  }

  if (array[end] === target) {
    return true;
  }

  if (array[start][0] > target && start >= 1) {
    return start - 1;
  }

  if (array[end][0] > target && end >= 1) {
    return end - 1;
  }

  return array.length - 1;
}

var matrix1 = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
];
console.log(searchMatrix(matrix1, 0));
console.log(searchMatrix(matrix1, 1));
console.log(searchMatrix(matrix1, 10));
console.log(searchMatrix(matrix1, 23));
console.log(searchMatrix(matrix1, 11));
console.log(searchMatrix(matrix1, 50));

