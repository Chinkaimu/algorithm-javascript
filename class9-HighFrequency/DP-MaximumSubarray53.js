/**
 * https://leetcode.com/problems/maximum-subarray/
 * @param {number[]} nums
 * @return {number}
 * 思路：
 *  * 关键点，找到新一轮计算和的地方。
 */
function maxSubArray(A) {
  var prev = 0;
  var max = -Number.MAX_VALUE;

  for (var i = 0; i < A.length; i++) {
    // 如果前面的点加起来不如 A[i] 大，则前面的全部不要只留下 A[i]（从上一个整数到当前整数，中间的负数太多把正数抵消了，干脆整数也全都抛弃，重新开始。重置 prev）。重新开始一轮新的加和计算。
    prev = Math.max(prev + A[i], A[i]);
    // 存储当前最大值
    max = Math.max(max, prev);
  }
  return max;
}

console.log(maxSubArray([-2, 1]))