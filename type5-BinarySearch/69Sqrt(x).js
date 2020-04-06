/**
 * https://leetcode.com/problems/sqrtx/
 * 使用二分查找法实现.
 * 范围是1~x/2
 * 算法复杂度 O(logn)
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if (x === 0 || x === 1) return x;

  let start = 1;
  let end = Math.floor(x / 2);

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    const value1 = mid ** 2;
    const value2 = (mid + 1) ** 2;

    if (value1 === x || (x > value1 && x < value2)) {
      return mid;
    }
    
    if (x < value1) {
      end = mid - 1;
    } else if (x > value1) {
      start = mid + 1;
    }
  }

  return null;
};