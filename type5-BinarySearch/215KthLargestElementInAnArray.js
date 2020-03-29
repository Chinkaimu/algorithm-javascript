/**
 * https://leetcode.com/problems/kth-largest-element-in-an-array/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 时间复杂度： O(n*logK)
 */
var findKthLargest = function(nums, k) {
  if (!nums || !nums.length) return
  if (k > nums.length) return

  return quickSelect(nums, k)
};

function quickSelect (nums, k, start = 0, end = nums.length - 1) {
  const pivot = nums[start + Math.floor((end - start) / 2)];

  let l = start;
  let r = end;

  while (l <= r) {
    while (nums[l] > pivot) {
      l++;
    }
    // 找到大于或等于 pivot 的内容
    while (nums[r] < pivot) {
      r--;
    }
    
    if (l <= r) {
      [nums[l], nums[r]] = [nums[r], nums[l]]
      l++;
      r--;
    }
  }

  // check if Kth largest element is in the left part
  if (start + k - 1 <= r) return quickSelect(nums, k, start, r);
  
  // check if Kth largest element is in the right part
  // k - (l - start) the count find in this turn
  if (start + k - 1 >= l) return quickSelect(nums, k - l + start, l, end, )

  // return the pivot
  return nums[r + 1]
}


console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4))