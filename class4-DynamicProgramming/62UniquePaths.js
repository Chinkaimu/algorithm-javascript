/**
 * 16:26 - 
 * https://leetcode.com/problems/unique-paths/
 * Dynamic programing
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  if (!m || !n) return

  const f = [[]]

  // initialize
  for (let i = 0; i < m; i++) {
    f[0][i] = 1
  }

  // function
  for (let j = 1; j < n; j++) {
    f[j] = []

    for (let i = 0; i < m; i++) {
      if (i === 0) {
        f[j][i] = 1
      } else {
        f[j][i] = f[j - 1][i] + f[j][i - 1]
      }
    }
  }

  // answer
  return f[n - 1][m - 1]
};