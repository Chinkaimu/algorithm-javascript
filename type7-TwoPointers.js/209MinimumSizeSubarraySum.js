/**
 * https://leetcode.com/problems/minimum-size-subarray-sum/
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  if (!nums || !nums.length) return 0

  let minSofar = Number.MAX_SAFE_INTEGER;
  let slow = 0;
  let fast = 0;
  let sum = 0;

  // 快指针外层循环，快指针指向数据加到 sum
  while (fast < nums.length) {
    sum += nums[fast];

    // 慢指针内层循环，慢指针指向数据出 sum
    while (sum >= s) {
      minSofar = Math.min(minSofar, fast - slow + 1);
      sum -= nums[slow++];
    }

    fast++;
  }

  return minSofar === Number.MAX_SAFE_INTEGER ? 0 : minSofar;
};