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
    let i = -1;
    while(++i < len) {
      matrix[round][lastIndex - i] = matrix[round + i][round];
    }
    // 左侧从上往下走。x = round -> lastIndex; y = round 不变。
    // 等于下边数据从左往右走 x = lastIndex 不变; y = round -> lastIndex
    i = -1;
    while(++i < len) {
      matrix[round + i][round] = matrix[lastIndex][round + i];
    }

    // 下边数据从左往右走 x = lastIndex 不变; y = round -> lastIndex
    // 等于右侧数据从下往下走。 x = lastIndex -> round, y = lastIndex 不变。
    i = -1;
    while(++i < len) {
      matrix[lastIndex][round + i] = matrix[lastIndex - i][lastIndex];
    }

    // 右侧数据从下往上走 x = lastIndex -> round; y = lastIndex 不变。
    // 等于存储的临时数据从后往前走 index = lastIndex -> round。
    i = -1;
    while(++i < len) {
      matrix[lastIndex - i][lastIndex] = temp[lastIndex - i]
    }

    round++;
  }
};

const num1 = [[1, 2], [3, 4]];
rotate1(num1);
console.log(num1);

const num2 = [[1,2,3],[4,5,6],[7,8,9]];
rotate1(num2);
console.log(num2);

function rotate1 (matrix) {
  let mLastIndex = matrix.length - 1;

  for (let round = 0; round < Math.floor(matrix.length/2); round++) {
    const lastIndex = mLastIndex - round;

    for (let index = round; index < lastIndex; ++index) {
      let temp = matrix[round][index];

      // 上边，x = round 固定。
      // 第 index 数等于左侧 从下往上第 index 数。 lastIndex - index (这里的 index 包含了 round， 减多了，加回去就是 mLastIndex)
      matrix[round][index] = matrix[mLastIndex - index][round];

      // 左侧， y = round 固定。
      // 从下往上第 index 数，等于下边从右往左第 index 数。 
      matrix[mLastIndex - index][round] = matrix[lastIndex][mLastIndex - index];

      // 下边，y = lastIndex 固定。
      // 从右往左第 index 数据，等于右侧从上往下第 index 数。(这里的 index 已经加上了 round)
      matrix[lastIndex][mLastIndex - index] = matrix[index][lastIndex];

      // 右边，等于存储的 temp
      matrix[index][lastIndex] = temp;
    }
  }
}