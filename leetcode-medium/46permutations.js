/**
 * https://leetcode.com/problems/permutations/
 * @param {number[]} nums
 * @return {number[][]}
 */
// Breadth first search
var permute = function(nums) {
  const result = []
  dfs([])

  function dfs(current) {
    if (current.length === nums.length) {
      result.push(current)
    }

    for (let i = 0; i < nums.length; i++) {
      if (current.indexOf(nums[i]) === -1) {
        dfs([...current, nums[i]])
      }
    }
  }

  return result
};

console.log(permute([1,2,3,4]))