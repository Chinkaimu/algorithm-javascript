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
    let mid = Math.floor((left + right)/2);

    while (left <= right) {
      let pivot = nums[mid];
      nums[left] > pivot && left++;
      nums[right] < pivot && right--;

      if (left <= right) {
        left < right && ([nums[left], nums[right]] = [nums[right], nums[left]]);
        left++;
        right--;
      }
    }
    console.log(nums);
    console.log(left);
    // left 左边的数都比它大
    if ((k - 1) === left) {
      return nums[left];
    } else if ((k - 1) < left) {
      end = left;
    } else {
      start = left;
    }
  }
}

console.log(findKthLargest([3,2,1,5,6,4], 2));