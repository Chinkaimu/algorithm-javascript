/**
 * https://leetcode.com/problems/factorial-trailing-zeroes/
 * 计算 5 的次数
 * n/5 + n/25 + ...
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  let cur = 5, total = 0;

  // TODO: 考虑等于 5 的情况
  while (cur <= n) {
    total += Math.floor(n / cur);
    cur *= 5;
  }

  return total;
};