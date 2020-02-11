/**
 * @param {*} array 
 * @param {*} target 
 */
function binarySearch(array, target) {
  if (array.length === 0) {
    return [-1,-1];
  }

  let start = 0;
  let end = array.length - 1;
  let mid;

  while (start + 1 < end) {
    // parseInt 将一个字符串 string 转换为 radix 进制的整数。取整数用　Math.floor　更合适。
    mid = start + Math.floor((end - start)/2);
    if (array[mid] === target) {
      /** Can't stop while find the value, cause it maybe not the first position. */
      /** If we want to find the last position, we should use start here. */
      end = mid;
    } else if (array[mid] < target) {
      start = mid;
    } else if (array[mid] > target) {
      end = mid;
    }
  }

  /**
   * The first position is the start value or the end value.
   */
  if (array[start] === target) {
    return start;
  }

  /**
   * It's also find the first position not the last position.
   */
  if (array[end] === target) {
    return end;
  }

  return -1;
}

console.log(binarySearch([0,1,1],1))
console.log(binarySearch([5,7,8,8,8,10],8))