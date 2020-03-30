/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  const sums = [];

  for (let step = 0; step < nums.length; step++) {
    for (let i = 0; i < nums.length; i++) {
      if (step === 0) {
        if (nums[i] >= s) {
          return 1
        }
        sums[i] === undefined && (sums[i] = [])
        sums[i][i] = nums[i]
      } else {
        sums[i][i + step] = sums[i][i + step - 1] + nums[i + step]
        if (sums[i][i + step] >= s) {
          return step + 1
        }
      }
    }
  }

  return 0
};