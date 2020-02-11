/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (!matrix || !matrix.length) return false
    if (!matrix[0] || !matrix[0].length) return false

    let row = matrix.length - 1

    for (let col = 0; col < matrix[0].length; col++) {
      row = binarySearch2(matrix, col, row, target)
      if (matrix[row][col] === target) return true
      if (row === 0 ) {
        binarySearch1(matrix[0], col, target)
      } else {
        row--
      }
    }
    return false
};

function binarySearch2 (matrix, col, row, target) {
  // 大于当列最后一个数时，需要返回下一行的下标或者最大行的下标
  /**
   * 先考虑边界值
   */
  if (target > matrix[row][col]) return row < matrix.length - 1 ? (row + 1) : (matrix.length - 1)

  let start = 0
  let end = row
  let mid

  while (start + 1 < end) {
    mid = start + Math.floor((end - start)/2);

    if (matrix[mid][col] === target) {
      return mid
    } else if (matrix[mid][col] < target) {
      start = mid
    } else if (matrix[mid][col] > target) {
      end = mid
    }
  }

  // 也可能相等
  if (matrix[start][col] >= target) {
    return start
  }
  if (matrix[end][col] >= target) {
    return end
  }
}

function binarySearch1 (array, end, target) {
  let start = 0
  let mid

  while (start + 1 < end) {
    mid = start + Math.floor((end - start)/2);
    if (array[mid] === target) {
      return true
    } else if (array[mid] < target) {
      start = mid
    } else if (array[mid] > target) {
      end = mid
    }
  }

  if (array[start] === target || array[end] === target) return true
}

const matrix = [
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]

console.log(searchMatrix(matrix, 1))
console.log(searchMatrix(matrix, 15))
console.log(searchMatrix(matrix, 5))
console.log(searchMatrix(matrix, 30))
console.log(searchMatrix(matrix, 0))
console.log(searchMatrix([], 0))
console.log(searchMatrix([[]], 0))
