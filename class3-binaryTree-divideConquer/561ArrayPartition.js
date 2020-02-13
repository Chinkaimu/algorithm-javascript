/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
  let sum = 0
  quickSort(nums, 0, nums.length - 1)

  for (let i = 0; i < nums.length; ) {
    sum += nums[i]
    i += 2
  }
  return sum
};

function quickSort (nums, start, end) {
  if (start >= end) return nums

  let i = start
  let j = end
  const pivot = nums[Math.floor(i + (j - i)/2)]
  // i、j 相等或相交，相等的时候是刚好到 pivot。相交的时候，i 以下的都是小于中间值的，j 以上都是大于中间值的。相等
  while (i <= j) {
    // 找到大于 pivot 的值
    while(nums[i] < pivot) {
      i++
    }
    // 找到小于 pivot 的值
    while(nums[j] > pivot) {
      j--
    }

    // i 左边都是
    if (i < j) {
      const temp = nums[i]
      nums[i] = nums[j]
      nums[j] = temp
      i++
      j--
      // 刚好走到中间的 pivot
    } else if (i === j) {
      i++
    }
  }

  quickSort(nums, start, j)
  quickSort(nums, i, end)

  return nums
}

// console.log(quickSort([1,2,3,4,5,6], 0, 5))
// console.log(quickSort([6,5,4,3,2,1], 0, 5))
// console.log(quickSort([3,2,6,5,4,1], 0, 5))
// console.log(quickSort([3,2,5,6,4,1,9,0], 0, 7))
// console.log(quickSort([3,2,1,5,4,6,7], 0, 6))
console.log(arrayPairSum([1,4,3,2]))