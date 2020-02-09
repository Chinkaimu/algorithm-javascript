/**
 * 核心思想：有降序就有谷
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  if (nums.length === 1) {
    return nums[0]
  }

  let start = 0
  let end = nums.length - 1
  if (nums[0] < nums[end]) {
    return nums[0]
  }

  if (nums[end] < nums[end - 1]) {
    return nums[end]
  }

  let mid

  while (start + 1 < end) {
    mid = start + Math.floor((end - start)/2)

    if (nums[mid] < nums[mid - 1]) {
      return nums[mid]
    } else if (nums[mid] < nums[start]) {
      end = mid
    } else {
      start = mid
    }
  }

  if (nums[start] < nums[start - 1]) {
    return nums[start]
  }

  if (nums[end] < nums[end - 1]) {
    return nums[end]
  }
};