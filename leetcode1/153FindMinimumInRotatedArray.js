/**
 * 核心思想：通过首尾相等的二分需要记录最小值解决结果由于 mid + 1 和 mid - 1 导致遗漏的问题
 * 可以通过记录两边的数据来解决
 * @param {number[]} nums
 * @return {number}
 */
var findMin1 = function(nums) {
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

  while (start <= end) {
    mid = start + Math.floor((end - start)/2)

    if (nums[mid] < nums[mid - 1]) {
      return nums[mid]
    } else if (nums[mid] < nums[start]) {
      end = mid - 1
    } else {
      start = mid + 1
    }
  }
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let left = 0;
  let right = nums.length - 1;
  let min = null

  while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      
      if(min === null || nums[mid] < min){
          min = nums[mid];
      }

      // When dividing the roated array into two halves, one must be sorted.
      if (nums[left] <= nums[mid]) { // Check if the left side is sorted
          min = Math.min(nums[left], min);
          left = mid + 1; // lets check right side in the next iteration of while loop
      } else {// Otherwise, the right side is sorted
          min = Math.min(nums[mid + 1], min);
          right = mid - 1; // lets check left side in the next iteration of while loop
      }
  }

  return min;
};

console.log(findMin([0, 1, 2]))
console.log(findMin([1, 2, 0]))
console.log(findMin([3,4,5,1,2]))