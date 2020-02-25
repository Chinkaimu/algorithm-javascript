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