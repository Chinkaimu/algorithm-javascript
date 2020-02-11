function binarySearch (array, target) {
  if (!array || !array.length) return -1

  let start = 0
  let end = array.length - 1
  let mid

  /**
   * 偶数会走到相等
   * 与循环条件是相邻的进行比较，start 和 end 相邻时首先计算 mid 是 start 计算 start 是不是 target 然后再看 end 是不是满足条件。该算法对于找第一个和最后一个不是很合适。
   * 所以，需要查找第一个或者最后一个位置的时候用相邻作为循环条件比较合适。
   */
  while (start <= end) {
    mid = start + Math.floor((end - start)/2);

    if (array[mid] === target) {
      return mid
    } else if (array[mid] < target){
      start = mid + 1
    } else {
      end = mid - 1
    }
  }

  return -1
}

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(binarySearch(arr1, 0))
console.log(binarySearch(arr1, 1))
console.log(binarySearch(arr1, 10))
console.log(binarySearch(arr1, 6))
console.log(binarySearch(arr1, 5))

console.log(binarySearch(arr2, 0))
console.log(binarySearch(arr2, 1))
console.log(binarySearch(arr2, 9))
console.log(binarySearch(arr2, 6))
console.log(binarySearch(arr2, 5))

console.log(binarySearch([5, 7, 7, 8, 8], 7))
console.log(binarySearch([5, 7, 7, 7, 7, 8, 8], 7))