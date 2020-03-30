/**
 * https://leetcode.com/problems/minimum-size-subarray-sum/
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  if (!nums || !nums.length) return 0

  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }

  if (sum < s) {
    return 0;
  }

  let minLength = nums.length
  let i = 0, j = nums.length - 1; 
  while (i < j) {
    if (nums[i] <= nums[j]) {
      sum -= nums[i];

      if (sum < s) {
        return minLength
      }
      minLength--;
      i++;
    } else {
      sum -= nums[j];

      if (sum < s) {
        return minLength
      }
      minLength--;
      j--;
    }
  }

  return minLength;
};