/**
 * https://leetcode.com/problems/subsets/
 *【深度优先搜索】
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const result = [];
  dfs(nums, result, [], 0);
  
  return result;
}

function dfs (nums, result, current, pos) {
  result.push(current);

  for (let i = pos; i < nums.length; i++) {
    dfs(nums, result, [...current, nums[i]], i + 1);
  }
}