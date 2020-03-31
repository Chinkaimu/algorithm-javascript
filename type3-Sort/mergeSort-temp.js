/**
 * 合并排序 ---> 降序
 *  1. 分： 二分到不能再分
 *  2. 治： 将数组合并
 *  3. 合并需要额外空间
 */
function mergeSort(arr) {
  let temp = new Array(arr.length);

  sortHelper(arr, 0, arr.length - 1, temp);

  return arr;
}

function sortHelper(arr, start, end, temp) {
  // 递归终止条件
  if (start < end) {
    let mid = Math.floor((start + end)/2);

    sortHelper(arr, start, mid, temp);
    sortHelper(arr, mid + 1, end, temp);
    mergeHelper(arr, start, mid, end, temp);
  }
}

function mergeHelper(arr, start, mid, end, temp) {
  let left = start;
  // 右侧序列从 mid + 1 开始
  let right = mid + 1;
  let t = 0;

  // 左右序列逐个比较，大的先入 temp
  while (left <= mid && right <= end) {
    if (arr[left] > arr[right]) {
      temp[t++] = arr[left++];
    } else {
      temp[t++] = arr[right++];
    }
  }

  // 左右序列还有未比较的内容，全部入 temp
  while (left <= mid) {
    temp[t++] = arr[left++];
  }

  while (right <= end) {
    temp[t++] = arr[right++];
  }

  // 将 arr 中 start - end 的内容用 temp 去替换
  t = 0;
  while (start <= end) {
    arr[start++] = temp[t++];
  }
}

console.log(mergeSort([1,5,2,3,7,2]))