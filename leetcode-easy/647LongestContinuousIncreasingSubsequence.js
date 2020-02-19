/**
 * https://leetcode.com/problems/longest-continuous-increasing-subsequence/
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
  if (!nums || !nums.length) return 0

  let logest = 1
  let step = 1

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      step++
      if (step > logest) {
        logest = step
      }
    } else {
      step = 1
    }
  }

  return logest
};

console.log(findLengthOfLCIS([1,3,5,4,7]))
console.log(findLengthOfLCIS([2,2,2,2,2]))
