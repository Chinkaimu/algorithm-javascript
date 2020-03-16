/**
 * https://leetcode.com/problems/majority-element-ii/
 * reference:https://leetcode.com/problems/majority-element-ii/discuss/233570/Javascript-Solution
 * @param {number[]} nums
 * @return {number[]}
 */
// 条件合并优化
var majorityElement = function(nums) {
  let candidate1, count1 = 0
  let candidate2, count2 = 0

  for (let i = 0; i < nums.length; i++) {
    if (candidate1 === nums[i]) {
      count1++
    } else if (candidate2 === nums[i]){
      count2++
    } else if (count1 === 0) {
      candidate1 = nums[i]
      count1++
    } else if (count2 === 0) {
      candidate2 = nums[i]
      count2++
    } else {
      count1--
      count2--
    }
  }

  count1 = 0
  count2 = 0
  for (let i = 0; i < nums.length; i++) {
    candidate1 === nums[i] && count1++
    candidate2 === nums[i] && count2++
  }

  const n = Math.floor(nums.length/3)
  if (count1 > n && count2 > n) {
    return [candidate1, candidate2]
  } 
  if (count1 > n) {
    return [candidate1]
  }
  if (count2 > n) {
    return [candidate2]
  }

  return []
};

var majorityElement1 = function(nums) {
  let candidate1, count1 = 0
  let candidate2, count2 = 0

  for (let i = 0; i < nums.length; i++) {
    // Mark： 不能等于候选数据
    if (count1 === 0 && nums[i] !== candidate2) {
      candidate1 = nums[i]
      count1++
      continue
    }
    if (count2 === 0 && nums[i] !== candidate1) {
      candidate2 = nums[i]
      count2++
      continue
    }

    if (candidate1 === nums[i]) {
      count1++
      continue
    } else if (candidate2 === nums[i]){
      count2++
      continue
    } else {
      count1--
      count2--
    }
  }

  count1 = 0
  count2 = 0
  for (let i = 0; i < nums.length; i++) {
    candidate1 === nums[i] && count1++
    candidate2 === nums[i] && count2++
  }

  const n = Math.floor(nums.length/3)
  if (count1 > n && count2 > n) {
    return [candidate1, candidate2]
  } 
  if (count1 > n) {
    return [candidate1]
  }
  if (count2 > n) {
    return [candidate2]
  }

  return []
};

console.log(majorityElement([1,2,3]))
console.log(majorityElement([1,1,1,3,3,2,2,2]))
