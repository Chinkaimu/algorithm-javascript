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
        left < right && ([nums[left], nums[right]] = [nums[right], nums[left]]);
        left++;
        right--;
      }
    }

    // left 有可能超出界限
    // 2 种指针存在情况： right pivotIndex left; right left(left 可能指向原来的 pivot)
    if (right + 1 === k - 1) {
      return nums[right + 1]
    } else if ((k - 1) < left) {
      end = right;
    } else {
      start = left;
    }
  }
}

console.log(findKthLargest([-1,2,0], 2));  // 0
console.log(findKthLargest([3,2,1,5,6,4], 2)); // 5
console.log(findKthLargest([1], 1)); // 1
