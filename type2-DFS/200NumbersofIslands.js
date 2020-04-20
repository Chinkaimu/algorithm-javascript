/**
 * https://leetcode.com/problems/number-of-islands/
 * solution - 21:25 - 21:56 (30mins)：
 *    // TODO: N tree，想思路太慢了。
 *    找到一个 islands, number ++，DFS 连接的 islands 不能作为单独陆地， flag[n][n] 做标记（或者直接将其标记为 0）。
 *    找下一个独立的 islands
 * data: flag[][]; num;
 * result: num
 * 
 * coding: 21:57 - 20:04（7）
 * debugging: 20:04 - 10:20（16）
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  if (!grid || !grid.length) return 0;

  let num = 0;
    
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        num++;
        dfs(i, j, grid);
      }
    }
  }

  return num;
};

function dfs(i, j, grid) {
  // 递归终止的条件
  if ( i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] === '0') {
    return;
  }

  if (grid[i][j] === '1') {
    grid[i][j] = '0';
    dfs(i + 1, j, grid);
    dfs(i, j + 1, grid)
    // TODO: 还可以向 上、左 走，遍历过的地方会变为 0 ， 不会重复使用
    dfs(i, j - 1, grid);
    dfs(i - 1, j, grid);
  }
}

console.log(numIslands([["1","1","1"],["0","1","0"],["1","1","1"]]));