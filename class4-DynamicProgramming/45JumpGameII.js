/**
 * https://leetcode.com/problems/jump-game-ii/
 * Dynamic Programing
 * thinking: minSteps[i] means the minimum steps to place i
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  if (!nums || !nums.length || nums.length === 1) return 0

  // jump 能走到 maxReach，maxReach 有 steps 步
  /**
   * if maxReach >= nums.length - 1 return jump
   */
  let maxReach = nums[0]
  let steps = nums[0]
  let jump = 1

  if (maxReach >= nums.length - 1) return jump

  for (let i = 1; i < nums.length; i++) {
    // the next jump we arrived the index of (nums.length - 1)
    if (i + nums[i] >= nums.length - 1) {
      return jump + 1
    }
    maxReach = Math.max(maxReach, i + nums[i])
    steps--

    if (steps === 0) {
      jump++
      // important: it is not sure which index get the maxReach。The next (maxReach - i) has the next jump
      steps = maxReach - i
    }
  }
};

console.log(jump([2,3,1,1,4]))
console.log(jump([1,2]))
console.log(jump([3,4,3,1,0,7,0,3,0,2,0,3]))
