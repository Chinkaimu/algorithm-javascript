/**
 * https://leetcode.com/problems/longest-increasing-subsequence/
 * lens[i] 表示 i 位置最长的增长子序列， lens[i] = nums[j] + 1， 如果前面找到 j 使得 nums[j] < nums[i]。
 * 其他解法：二分查找
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  // TODO: 0 需要单独处理
  if (nums.length === 0) {
    return 0;
  }

  const lens = [1];
  let maxLen = 1;

  for (let i = 1; i < nums.length; i++) {
    lens[i] = 1;
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        lens[i] = Math.max(lens[i], lens[j] + 1);
      }
    }

    maxLen = Math.max(maxLen, lens[i])
  }

  return maxLen;
};

console.log(lengthOfLIS([10,9,2,5,3,7,101,18]))