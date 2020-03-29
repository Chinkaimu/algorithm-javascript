/**
 * https://leetcode.com/problems/kth-largest-element-in-an-array/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  if (!nums || !nums.length) return
  if (k > nums.length) return

  k--;
  let start = 0;
  let end = nums.length - 1;
  let i, j, pivot;

  while (true) {
    i = start;
    j = end;
    pivot = nums[Math.floor((j - i) / 2)]

    while (i <= j) {
      while (nums[i] > pivot) {
        i++;
      }
      while (nums[j] < pivot) {
        j--;
      }
      
      if (i < j) {
        [nums[i], nums[j]] = [nums[j], nums[i]]
        // TODO: 交换以后要继续往下走
        i++;
        j--;
      } else if (i === j) {
        i++
      }
    }

    console.log(nums)
    console.log(j)
    if (k === j) {
      return nums[k]
    } else if (k > j) {
      start = i
    } else if (k < j) {
      end = j
    }
  }
};

console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4))