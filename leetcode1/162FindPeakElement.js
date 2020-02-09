/**
 * 核心思想：有升续就有峰
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  if (!nums || !nums.length) return -1
    
  let start = 0
  let end = nums.length - 1
  let mid

  while (start <= end) {
    mid = start + Math.floor((end - start)/2);

    if ((nums[mid] > nums[mid - 1] || !nums[mid - 1]) && (nums[mid] > nums[mid + 1] || !nums[mid+1])) {
      return mid
    } else if (nums[mid] > nums[mid - 1] || !nums[mid - 1]) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }

  return -1
};

const nums = [1,2,3,1]
console.log(findPeakElement(nums))
console.log(findPeakElement([1,2,1,3,5,6,4]))
console.log(findPeakElement([1,2]))
console.log(findPeakElement([3,2]))
console.log(findPeakElement([1,2,3]))
