/**
 * https://leetcode.com/problems/permutations/
 * @param {number[]} nums
 * @return {number[][]}
 */
// Depth-First Search
var permute = function(nums) {
  const result = []
  dfs([])

  function dfs(current) {
    if (current.length === nums.length) {
      result.push(current)
    }

    for (let i = 0; i < nums.length; i++) {
      if (current.indexOf(nums[i]) === -1) {
        // 传递的参数是新数组，避免修改 current 的内容
        dfs([...current, nums[i]])
      }
    }
  }

  return result
};

console.log(permute([1,2,3]))