/**
 * https://leetcode.com/problems/jump-game/
 * Dynamic gramming
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  const can = [true]

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (can[j] && j + nums[i] >= i) {
        can[i] = true
        break
      }
    }
  }

  return can[nums.length - 1] ? true : false
};