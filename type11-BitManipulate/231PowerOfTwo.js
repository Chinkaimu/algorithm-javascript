/**
 * https://leetcode.com/problems/power-of-two/
 * 技巧： 
 *   如果是 2 的幂，则 (n - 1) & n === 0
 *   通过 n - (n - 1) & n 还能求第一个 1 位。
 * @param {number} n
 * @return {boolean}
 */

var isPowerOfTwo = function (n) {
  if (n <= 0 ) return false;
  return (n - 1) & n === 0;
}


var isPowerOfTwo2 = function(n) {
  if(n < 1){
    return false
  }
  
  while(n > 1){
    if(n % 2 !== 0){
      return false
    }
    n = n >> 1
  }
  return true
};

var isPowerOfTwo1 = function(n) {
  while (n >= 2) {
    n = n/2;
  }

  return n === 1 ? true : false;
};

