/**
 * https://leetcode.com/problems/longest-increasing-subsequence/
 * DP
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  if (!nums || !nums.length) return 0

  // definition and initialization
  let maxLength = 1
  let maxLengths = [1]

  // function
  for (let i = 1; i < nums.length; i++) {
    maxLengths[i] = 1
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        maxLengths[i] = Math.max(maxLengths[i], maxLengths[j] + 1)
      }
    }

    if (maxLengths[i] > maxLength) {
      maxLength = maxLengths[i]
    }
  }

  // answer
  return maxLength
};

console.log(lengthOfLIS([10,9,2,5,3,7,101,18]))
console.log(lengthOfLIS([10,5,3,7,101,18]))
console.log(lengthOfLIS([1,2,3,4,5,6,7]))