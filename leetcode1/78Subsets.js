/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const result = []
  extend(result, [], nums, 0)
  return result
};

/**
 * 
 * @param {*} result 最终数组
 * @param {*} target 需要加入到结果中的数组，初始值是 []，每次在上一次的基础上进行增加，只能增加后面的数值
 * @param {*} nums 原数组
 * @param {*} lastIndex 上次处理的最大下标+1
 */
function extend(result, target, nums, pos) {
  result.push([...target])

  for (let i = pos; i < nums.length; i++) {
    target.push(nums[i])
    extend(result, target, nums, i + 1)
    // 回溯
    target.pop()
  }
  
  return result
}

console.log(subsets([1,2,3]))
console.log(subsets([]))
