/**
 * Danamic programing from top to bottom
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  if (!grid || !grid.length) return 0
  const m = grid.length
  const n = grid[0].length
  // definite
  const f = []
  f[0] = [grid[0][0]]

  // initialize
  for (let y = 1; y < n; y++) {
    f[0][y] = f[0][y-1] + grid[0][y]
  }

  // function
  for (let x = 1; x < m; x++) {
    f[x] = []
    for (let y = 0; y < n; y++) {
      if (y === 0) {
        f[x][y] = f[x - 1][y] + grid[x][y]
      } else {
        f[x][y] = Math.min(f[x - 1][y], f[x][y - 1]) + grid[x][y]
      }
    }
  }

  // answer
  console.log(f)
  return f[m-1][n-1]
};

console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]]))