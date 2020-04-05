/**
 * 4.5
 * https://leetcode.com/problems/unique-paths/
 * Dynamic programing
 * @param {number} m
 * @param {number} n
 * @return {number}
 * there are choice down first or right first. if there is just down or right, there is just 1 path.
 */
var uniquePaths = function(m, n) {
  if (!m || !n) return 0;

  const paths = [[]];

  for (let y = 0; y < m; y++) {
    paths[0][y] = 1;
  }

  for (let x = 1; x < n; x++) {
    paths[x] = [1];

    for (let y = 1; y < m; y++) {
      paths[x][y] = paths[x - 1][y] + paths[x][y - 1];
    }
  }

  return paths[n - 1][m - 1];
}