/**
 * find 8 in [1,2,3,4,5,6,7,9,10,14]
 */
 // 相邻退出循环
function binarySearch (arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let pivot

  // 如果用小于等于的话可能相交也可能相等。让他们在相邻的位置退出循环。
  // 相邻的 start，end 没有机会计算 pivot 然后与 target 进行比较。
  while (start + 1 < end) {
    pivot = Math.floor((end - start) / 2);

    if (arr[pivot] === target) {
      return pivot;
    } else if (arr[pivot] < target) {
      start = pivot;
    } else {
      end = pivot;
    }
  }

  if (arr[start] === target) {
    return start;
  }

  if (arr[end] === target) {
    return end;
  }
}

console.log(binarySearch([1,2,3,4,5,6], 2))