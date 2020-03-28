function quickSort (nums, start = 0, end = nums.length - 1) {
  // 1. TODO: 终止递归的条件，很重要
  if (start >= end) return

  // 2. 指针初始化
  let i = start
  let j = end
  // 3. 取中间值作为分界点。
  const pivot = nums[Math.floor(i + (j - i)/2)]
  // 4. 循环条件： i、j 相等或相交，相等的时候是刚好到 pivot。相交的时候，i 以下的都是小于中间值的，j 以上都是大于中间值的。相等
  while (i <= j) {
    // 找到大于 pivot 的值
    while(nums[i] < pivot) {
      i++
    }
    // 找到小于 pivot 的值
    while(nums[j] > pivot) {
      j--
    }

    // 5. 交换条件：i < j，满足则交换数据
    if (i < j) {
      // 交换位置
      [nums[i], nums[j]] = [nums[j], nums[i]]
      // TODO: 这个不能忘记交换以后要继续往前走
      i++
      j--
      // 6. 刚好走到 pivot，给 i++ 跳出循环，也计算出下一轮排序的起点
    } else if (i === j) {
      // i + 1 以后 i > j 跳出循环
      i++
    }
  }

  // 左边起点是 start, 中点是 j
  quickSort(nums, start, j)
  // 左边起点是 i, 终点是 j
  quickSort(nums, i, end)

  // 可返回可不返回，不返回的话只是 quickSort 得不到排序后的结果
  // return nums
}

const nums = [2, 5, 8, 5, 1, 8]
console.log('quickSort', quickSort(nums))
console.log('nums', nums)
