/**
 * https://leetcode.com/problems/kth-largest-element-in-an-array/
 * @param {number} k
 * @param {*} nums 
 */
var findKthLargest = function(nums, k) {
  if (k > nums.length) return;

  let start = 0;
  let end = nums.length - 1;

  while (true) {
    let left = start;
    let right = end;
    let pivot = nums[Math.floor((left + right)/2)];
  
    while (left <= right) {
      while (nums[left] > pivot) {
        left++;
      }

      while (nums[right] < pivot) {
        right--;
      }

      if (left <= right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
      }
    }

    // left 有可能超出界限
    // 2 种指针存在情况： right pivotIndex left; right left(left 可能指向原来的 pivot)。可能是 3 部分存在。
    // 所以中间位置是 right + 1
    if ((k - 1) <= right) {
      end = right;
    } else if ((k - 1) >= left){
      start = left;
    } else {
      // 不在左边，不在右边，就是在中间。
      return nums[right + 1];
    }
  }
}

console.log(findKthLargest([-1, 2, 0], 2));  // 0 出错一次
console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)); // 5
console.log(findKthLargest([1], 1));  // 1 出错一次
