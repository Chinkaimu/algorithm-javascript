/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * 思路：一圈一圈旋转
 */
var rotate = function(matrix) {
  let temp = null;
  let lastIndex, len;

  let round = 0;
  while (round < Math.floor(matrix.length/2)) {
    // lastIndex of current round
    lastIndex = matrix.length - 1 - round;
    len = lastIndex - round + 1;
    temp = [...matrix[round]]
    
    // 上边，从右边向左边走。 x = round 不变， y = lastIndex -> round。
    // 等于左侧数据从上往下走。 x = round -> lastIndex， y = round 不变。
    for (let i = 0; i < len; i++) {
      matrix[round][lastIndex - i] = matrix[round + i][round];
    }
    // 左侧从上往下走。x = round -> lastIndex; y = round 不变。
    // 等于下边数据从左往右走 x = lastIndex 不变; y = round -> lastIndex
    for (let i = 0; i < len; i++) {
      matrix[round + i][round] = matrix[lastIndex][round + i];
    }

    // 下边数据从左往右走 x = lastIndex 不变; y = round -> lastIndex
    // 等于右侧数据从下往下走。 x = lastIndex -> round, y = lastIndex 不变。
    for (let i = 0; i < len; i++) {
      matrix[lastIndex][round + i] = matrix[lastIndex - i][lastIndex];
    }

    // 右侧数据从下往上走 x = lastIndex -> round; y = lastIndex 不变。
    // 等于存储的临时数据从后往前走 index = lastIndex -> round。
    for (let i = 0; i < len; i++) {
      matrix[lastIndex - i][lastIndex] = temp[lastIndex - i]
    }

    round++;
  }
};

const num1 = [[1, 2], [3, 4]];
rotate(num1);
console.log(num1);

// const num2 = [[1,2,3],[4,5,6],[7,8,9]];
// rotate(num2);
// console.log(num2);