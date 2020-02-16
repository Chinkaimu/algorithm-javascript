/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  const hash = []
  return dfs(0, 0, triangle, hash)
};

function dfs (x, y, a, hash) {
  if (a && x === a.length) {
    return 0
  }

  if (hash[x] && hash[x][y] !== undefined) {
    return hash[x][y]
  }
  
  if (!hash[x]) {
    hash[x] = []
  }
  hash[x][y] = Math.min(dfs(x + 1, y, a, hash), dfs(x + 1, y + 1, a, hash)) + a[x][y]
  return hash[x][y]
}

console.log(minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]]))