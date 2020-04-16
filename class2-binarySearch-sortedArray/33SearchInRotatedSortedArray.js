/**
 * https://leetcode.com/problems/search-in-rotated-sorted-array/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let start = 0
  let end = nums.length - 1
  let mid

  // 至少 2 个数才会进入这个循环
  while (start + 1 < end) {
    mid = start + Math.floor((end - start)/2)

    if (nums[mid] === target) {
      return mid
    }
    
    if (nums[mid] > nums[start]) {
      // nums[mid] > nums[start] && nums[mid] < nums[end]
      if (nums[mid] > target && nums[start] <= target) {
        end = mid
      } else {
        start = mid
      }
    } else {
      if (nums[mid] < target && nums[end] >= target) {
        start = mid
      } else {
        end = mid
      }
    }
  }

  if (nums[start] === target) {
    return start
  }

  if (nums[end] === target) {
    return end
  }

  return -1
};

console.log(search([0, 1, 2, 3, 4], 2))
console.log(search([4,5,6,7,0,1,2], 0))
console.log(search([4,5,6,7,0,1,2], 3))
console.log(search([5,1,3], 5))
console.log(search([6,7,1,2,3,4,5], 6))
console.log(search([5,1,2,3,4], 1))
console.log(search([5,1,2,3,4], 4))