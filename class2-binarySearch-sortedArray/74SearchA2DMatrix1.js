/**
 * Regard the 2D matrix as a 1D array.
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if (matrix.length === 0) {
    return false;
  }

  var start = 0;
  var num = matrix[0].length;
  var end = matrix.length * num - 1;
  var mid;

  while (start + 1 < end) {
    mid = start + Math.floor((end - start)/2);
    var row = getRow(mid, num);
    var col = getCol(mid, num);

    if (Array.isArray(matrix[row])) {
      if (matrix[row][col] === target) {
        return true;
      } else if (matrix[row][col] < target) {
        start = mid;
      } else {
        end = mid;
      }
    }
  }

  if(Array.isArray(matrix[getRow(start, num)]) 
    && matrix[getRow(start, num)][getCol(start, num)] === target) {
    return true;
  }

  if(Array.isArray(matrix[getRow(end, num)]) 
    && matrix[getRow(end, num)][getCol(end, num)] === target) {
    return true;
  }

  return false;
}

function getRow(position, average) {
  return Math.floor(position/average);
}

function getCol(position, average) {
  // Attention: 2%4 = 2, it should return 4 not 2. Don't forget when position === average.
  return position >= average ? position%average : position;
}

var matrix1 = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
];
console.log(searchMatrix(matrix1, 0)); // false
console.log(searchMatrix(matrix1, 1)); // true
console.log(searchMatrix(matrix1, 10)); // true
console.log(searchMatrix(matrix1, 23)); // true
console.log(searchMatrix(matrix1, 11)); // true
console.log(searchMatrix(matrix1, 50)); // true
var matrix2 = [[]]
console.log(searchMatrix(matrix2, 1)); // false
console.log(searchMatrix([[1],[3]], 3)) // true
