/**
 * https://leetcode.com/problems/jump-game/
 * Greedy
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let farest = nums[0]

  for (let i = 1; i < nums.length; i++) {
    if (i <= farest && i + nums[i] > farest) {
      farest = i + nums[i]

      if (farest > nums.length - 1) {
        return true
      }
    }
  }

  return farest > nums.length - 1
};