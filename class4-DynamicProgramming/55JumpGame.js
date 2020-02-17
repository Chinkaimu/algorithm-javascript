/**
 * https://leetcode.com/problems/jump-game/
 * Dynamic gramming
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  const f = [true]

  for (let i = 0; i < nums.length; i++) {
    if (f[i]) {
      for (let j = 0; j <= nums[i]; j++) {
        if (i + j === nums.length - 1) {
          return true
        }
        if (i + j < nums.length - 1) {
          f[i + j] = true
        }
      }
    }
  }

  return f[nums.length - 1] ? true : false
};

console.log(canJump([2,3,1,1,4]))
console.log(canJump([3,2,1,0,4]))