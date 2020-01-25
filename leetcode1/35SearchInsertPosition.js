/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  if (nums.length === 0 || target <= nums[0]) {
      return 0;
  }
  
  if (target > nums[nums.length - 1]) {
      return nums.length;
  }
  
  let start = 0;
  let end = nums.length - 1;
  let mid;
  
  while (start + 1 < end) {
      mid = parseInt(start + (end - start)/2);
      
      if (nums[mid] === target) {
          return mid;
      } else if (nums[mid] < target) {
          start = mid;
      } else {
          // nums[mid] > target
          end = mid;
      }
  }
  
  // It's all >=
  if (nums[start] >= target) {
      return start;
  } else if (nums[end] >= target) {
      return end;
  }
};