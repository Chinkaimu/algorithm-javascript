/**
 * 找最后一个等于 target 的值
 */
function binarySearch (arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start + 1 < end) {
    let mid = Math.floor((start + end)/2);

    // 一定在右边，或者就是 mid
    if (target >= arr[mid]) {
      start = mid;
    } else {
      end = mid;
    }
  }

  if (target === arr[end]) {
    return end;
  }

  if (target === arr[start]) {
    return start;
  }

  return -1;
}

const nums = [1, 2, 2, 3, 3, 4, 4, 5, 5, 5];
console.log('length', nums.length)
console.log(binarySearch(nums, 2))
console.log(binarySearch(nums, 5))
console.log(binarySearch(nums, 9))