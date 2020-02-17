/**
 * https://leetcode.com/problems/unique-paths-ii/
 * Dynamic programing
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  const n = obstacleGrid.length
  const m = obstacleGrid[0].length

  if (!obstacleGrid || !obstacleGrid.length) return 0
  if (obstacleGrid[0][0] === 1 || obstacleGrid[n - 1][m - 1] === 1) return 0


  const f = [[1]]

  for (let i = 1; i < m; i++) {
    f[0][i] = obstacleGrid[0][i] === 1 ? 0 : f[0][i - 1]
  }

  for (let j = 1; j < n; j++) {
    f[j] = []

    for (let i = 0; i < m; i++) {
      if (obstacleGrid[j][i]) {
        f[j][i] = 0
      } else {
        if (i === 0) {
          f[j][i] = f[j - 1][i]
        } else {
          f[j][i] = f[j - 1][i] + f[j][i - 1]
        }
      }
    }
  }

  console.log(f)
  return f[n - 1][m - 1]
};

console.log(uniquePathsWithObstacles([[0,1,0,0,0],[1,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]))