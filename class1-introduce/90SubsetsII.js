/**
 * https://leetcode.com/problems/subsets-ii/
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  const result = []
  nums.sort()
  extend(result, [], nums, 0)
  return result
};

function extend (result, target, nums, pos) {
  result.push([...target])

  for (let i = pos; i < nums.length; i++) {
    // 只能出现一次
    if (pos != i && nums[i] === nums[i - 1]) {
      continue
    }
    target.push(nums[i])
    extend(result, target, nums, i + 1)
    target.pop()
  }
}

console.log(subsetsWithDup([1,2,2]))