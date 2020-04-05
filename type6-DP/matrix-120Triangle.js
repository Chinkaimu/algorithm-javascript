/**
 * https://leetcode.com/problems/triangle/
 * sums[i][j] 表示到达[i, j]路径和的最小值（满足 1，求最小值），min[i][j] = Math.min(sums[i - 1][y], sums[i - 1][y - 1]) + value
 * 其他解法： Divide&Conquer
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  const sums = [];
  let miniSum;

  let n = triangle.length;
  let m;
  for (let x = 0; x < n; x++) {
    sums[x] = [];
    m = triangle[x].length;

    for (let y = 0; y < m; y++) {
      if (x === 0 && y === 0) {
        sums[x][y] = triangle[0][0];
      } else if (y === 0) {
        sums[x][y] = sums[x - 1][0] + triangle[x][y];
      } else if (y < m - 1){
        // TODO:要判断 miniSum[x - 1][y] 是否存在
        sums[x][y] = Math.min(sums[x - 1][y], sums[x - 1][y - 1]) + triangle[x][y];
      } else {
        sums[x][y] = sums[x - 1][y - 1] + triangle[x][y];
      }

      if (x === n - 1) {
        // TODO: 不能直接 miniSum 判断，在为 0 的情况下会为 false, undefined 判断
        miniSum = (miniSum === undefined) ? sums[x][y] : Math.min(miniSum, sums[x][y]);
      }
    }
  }

  // TODO: 注意审题，结果是最后一行的最小值。
  return miniSum;
}

const triangle = [[-1],[2,3],[1,-1,-1]];

console.log(minimumTotal(triangle));