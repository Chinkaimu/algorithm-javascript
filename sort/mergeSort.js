const mergeSort = function (arr) {
  let temp = new Array(arr.length)

  sortHelper(arr, 0, arr.length - 1, temp)
}

function sortHelper (arr, left, right, temp) {
  if (left < right) {
    let mid = Math.floor((left + right)/2)
    sortHelper(arr, left, mid, temp)
    sortHelper(arr, mid + 1, right, temp)
    mergeHelper(arr, left, mid, right, temp)
  }
}

function mergeSort (arr, left, mid, right, temp) {
  let i = left // 做序列指针
  let j = mid + 1 // 右序列指针
  let t = 0 // 临时数组指针

  while (i <= mid && j <= right) {
    if (arr[i] <= arr[j]) {
      temp[t++] = arr[i++]
    } else {
      temp[t++] = arr[j++]
    }
  }
  while (i <= mid) {
    temp[t++] = arr[i++]
  }
  while (j <= right) {
    temp[t++] = arr[j++]
  }
  t = 0
  
  // 将 temp 中元素全部拷贝到原数组
  while (left <= right) {
    arr[left++] = temp[t++]
  }
}