/**
 * 找到第一个等于 target 的数
 */

function binarySearch (arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let mid;

  // 相邻时退出
  while (start + 1 < end) {
    mid = Math.floor((start + end)/2);

    // 一定在右边
    if (target > arr[mid]) {
      start = mid;
    } else {
      // target <= arr[mid], 一定在左边
      end = mid;
    }
  }

  if (target === arr[start]) {
    return start;
  }
  
  if (target === arr[end]) {
    return end;
  }

  return -1;
}

console.log(binarySearch([0, 1, 2, 2, 2, 3, 4, 5, 5, 5], 5));