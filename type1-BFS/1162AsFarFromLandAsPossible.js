/**
 * https://leetcode.com/problems/as-far-from-land-as-possible/
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function(grid) {
  if (!grid || !grid.length) return -1;

  const lastIndex = grid.length - 1;
  let maxDis = 0;
  const pointQueue = [];
  let hasWater = false;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        pointQueue.push({
          x: i,
          y: j,
          step: 0
        })
      } else {
        hasWater = true;
      }
    }
  }

  if (!hasWater) {
    return -1;
  }

  let step, x, y
  while (pointQueue.length > 0) {
    const point = pointQueue.shift();

    maxDis = Math.max(point.step, maxDis);

    step = point.step + 1;
    if (point.x > 0 && grid[x = point.x - 1][y = point.y] === 0) {
      grid[x][y] = step;
      pointQueue.push({x, y, step});
    }

    if (point.y > 0 && grid[x = point.x][y = point.y - 1] === 0) {
      grid[x][y] = step;
      pointQueue.push({x, y, step})
    }

    if (point.x < lastIndex && grid[x = point.x + 1][y = point.y] === 0) {
      grid[x][y] = step;
      pointQueue.push({x, y, step})
    }


    if (point.y < lastIndex && grid[x = point.x][y = point.y + 1] === 0) {
      grid[x][y] = step;
      pointQueue.push({x, y, step})
    }
  }

  // 没有改变说明不能到达
  return maxDis === 0 ? -1 : maxDis
};