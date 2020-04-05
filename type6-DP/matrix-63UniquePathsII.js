/**
 * https://leetcode.com/problems/unique-paths-ii/
 * Dynamic programing
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  const n = obstacleGrid.length;
  const m = Array.isArray(obstacleGrid[0]) && obstacleGrid[0].length;

  const paths = [[]];

  for (let y = 0; y < m; y++) {
    if (obstacleGrid[0][y] === 1) {
      paths[0][y] = 0;
    } else {
      // TODO: y 的位置应该由 y - 1 的位置推导出来
      if (y === 0) {
        paths[0][y] = 1;
      } else {
        paths[0][y] = paths[0][y - 1];
      }
    }
  }

  for (let x = 1; x < n; x++) {
    paths[x] = [];

    for (let y = 0; y < m; y++) {
      if (obstacleGrid[x][y] === 1) {
        paths[x][y] = 0;
        continue;
      }

      if (y === 0) {
        // TODO: x 的位置应该由 x - 1 的位置推导出来
        paths[x][y] = paths[x - 1][y];
      } else {
        paths[x][y] = paths[x - 1][y] + paths[x][y - 1];
      }
    }
  }

  return paths[n - 1][m - 1];
}

console.log(uniquePathsWithObstacles([[1],[0]]))