/**
 * https://leetcode.com/problems/climbing-stairs/
 * Dynamic programming
 * theme: Step i can come from step i-1 for one step or from step i-2 for 2 steps.
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  const f = [1, 1]
  for (let i = 2; i <= n; i++) {
    f[i] = f[i - 1] + f[i - 2]
  }
  return f[n]
};

// use no array
var climbStairs = function(n) {
  let before1 = 1
  let before2 = 1
  for (let i = 2; i <= n; i++) {
    const temp = before1 + before2
    before1 = before2
    before2 = temp
  }
  before2
};