/**
 * https://leetcode.com/problems/jump-game-ii/
 * Dynamic Programing
 * thinking: minSteps[i] means the minimum steps to place i
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  if (!nums || !nums.length) return

  const minSteps = [0]

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (minSteps[j] !== undefined && j + nums[j] >= i) {
        minSteps[i] = minSteps[i] !== undefined ? Math.min(minSteps[i], minSteps[j] + 1) : minSteps[j] + 1
      }
    }
  }

  return minSteps[nums.length - 1] 
};

console.log(jump([2,3,1,1,4]))