/**
 * https://leetcode.com/problems/minimum-path-sum/
 * miniSum[x][y] 表示到达[x, y]路径和的最小值（满足 1，求最小值），minSum[x][y] = Math.min(minSum[x - 1][y], minSum[x][y - 1]) + value
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  const n = grid.length;
  const m = Array.isArray(grid[0]) && grid[0].length;

  const minSum = [];
  
  for (let x = 0; x < n; x++) {
    minSum[x] = [];

    for (let y = 0; y < m; y++) {
      if (x === 0 && y === 0) {
        minSum[0][0] = grid[0][0];
      } else if (x === 0 && y !== 0) {
        minSum[0][y] = minSum[0][y - 1] + grid[x][y];
      } else if (y === 0 && x !== 0) {
        minSum[x][0] = minSum[x - 1][0] + grid[x][y];
      } else {
        minSum[x][y] = Math.min(minSum[x - 1][y], minSum[x][y - 1]) + grid[x][y];
      }
    }
  }

  return minSum[n - 1][m - 1];
}

console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]]))