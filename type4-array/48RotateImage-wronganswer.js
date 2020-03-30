/**
 * https://leetcode.com/problems/rotate-image/
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * It is not the solution.
 */
// 只走了一步
var rotate = function(matrix) {
  const lastIndex = matrix.length - 1;
  const pivot = Math.floor(matrix.length/2);

  let round = 0;
  while (round < pivot) {
    const temp = matrix[round][round];

    let x = round;
    let y = round;

    while (x <= (lastIndex - round - 1)) {
      matrix[x][y] = matrix[++x][y];
    }
    // x = lastIndex - round

    while (y <= (lastIndex - round - 1)) {
      matrix[x][y] = matrix[x][++y];
    }
    // y = lastIndex - round

    while ( x > round) {
      matrix[x][y] = matrix[--x][y];
    }
    // x = round

    while (y > (round + 1)) {
      matrix[x][y] = matrix[x][--y];
    }
    // y = round + 1

    matrix[x][y] = temp;

    round++;
  }
};

const num1 = [[1, 2], [3, 4]];
rotate(num1);
console.log(num1);

const num2 = [[1, 2, 3], [8, 9, 4], [7, 6, 5]];
rotate(num2);
console.log(num2);

// 转换时没有对应上
var rotate = function(matrix) {
  let temp = null;
  let lastIndex = matrix.length - 1;

  let round = 0;
  while (round < Math.floor(matrix.length/2)) {
    const temp = [...matrix[round]];

    // lastIndex of current round
    lestIndex = matrix.length - 1 - round;

    // y 是横向数据。需要从右边向左边走。
    for (let y = lastIndex; y >= round; y--) {
      matrix[round][y] = matrix[lastIndex - y][round];
    }

    for (let x = round; x <= lastIndex; x++) {
      matrix[x][round] = matrix[lastIndex][x];
    }

    for (let y = round; y <= lastIndex; y++) {
      matrix[lastIndex][y] = matrix[lastIndex - y][lastIndex]
    }

    for (let x = 0; x <= lastIndex; x++) {
      matrix[x][lastIndex] = temp[x]
    }

    round++;
  }
};

