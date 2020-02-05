function binarySearch (array, target) {
  if (!array || !array.length) return -1

  let start = 0
  let end = array.length - 1
  let mid

  /**
   * 偶数会走到相等
   */
  while (start <= end) {
    mid = parseInt(start + (end - start)/2)

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