/**
 * https://leetcode.com/problems/climbing-stairs/
 * ways[i] = ways[i - 1] + ways[i - 2]
 * @param {number} n
 * @return {number}
 */
// 进化版：一直只是需要前面 2 个值，所以把前面 2 个值记录下来即可。
var climbStairs = function(n) {
  let lastWays = 1; // 0
  let lastLastWays = 1; // 1

  let temp;
  for (let i = 2; i <= n; i++) {
    temp = lastLastWays + lastWays;

    lastLastWays = lastWays;
    lastWays = temp;
  }

  return lastWays;
}


// 使用数组记录
var climbStairs1 = function(n) {
  const ways = [1, 1];

  for (let i = 2; i <= n; i++) {
    ways[i] = ways[i - 2] + ways[i - 1]
  }

  return ways[n];
};

console.log(climbStairs(3))