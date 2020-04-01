/**
 * 找第一个大于等于 target 的数
 */
function binarySearch (sums, target) {
  let start = 0;
  let end = sums.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end)/2);

    // 如果是找到第一个大于 target 的数，则这里是 >=
    if (target > sums[mid]) {
      // 大于中间值，在右边
      start = mid + 1;
    } else {
      // 小于或等于中间值。
      // 如果左边找不到，则会重新走到 target > arr[mid]，start = mid + 1
      end = mid - 1;
    }
  }

  // 如果比当前数组都大，则会返回 (length + 1)
  return start;
}

console.log(binarySearch([0, 1, 2, 3, 4, 5], 3))
console.log(binarySearch([0, 1, 2, 2, 4, 5], 3))
console.log(binarySearch([0, 1, 2, 2, 4, 5], 9))