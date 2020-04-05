/**
 * https://leetcode.com/problems/jump-game-ii/
 * Dynamic Programing
 * thinking: minSteps[i] means the minimum steps to place i; minSteps[i] = undefined means we can't reach the place
 * @param {number[]} nums
 * @return {number}
 */

var jump = function(nums) {
  minSteps = [0];

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] && (nums[j] + j >= i)) {
        // TODO: there is one step from j to i if it can reach
        const currentMinsteps = minSteps[j] + 1;
        minSteps[i] = minSteps[i] ? Math.min(currentMinsteps, minSteps[i]) : currentMinsteps;
      }
    }
  }

  return minSteps[nums.length - 1];
}

// 不加任何过滤，双重循环求出 minSteps.
// TODO: 超时
var jump1 = function(nums) {
  minSteps = [0];

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] && (nums[j] + j >= i)) {
        // TODO: there is one step from j to i if it can reach
        const currentMinsteps = minSteps[j] + 1;
        minSteps[i] = minSteps[i] ? Math.min(currentMinsteps, minSteps[i]) : currentMinsteps;
      }
    }
  }

  return minSteps[nums.length - 1];
}