/**
 * 降序，
 * 寻找第一个小于 target 的位置
 */

function binarySearch (arr, target) {
  let start = 0, end = arr.length - 1;
  let mid;

  while (start <= end) {
    mid = Math.floor((start + end)/2);

    if (arr[mid] >= target) {
      // 肯定在右边
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return start < arr.length ? nums[start] : -1;
}

const nums = [10, 8, 8, 5, 3, 1];
console.log(binarySearch(nums, 11));
console.log(binarySearch(nums, 8));
console.log(binarySearch(nums, 9));
console.log(binarySearch(nums, 0));