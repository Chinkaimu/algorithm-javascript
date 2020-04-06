/**
 * https://leetcode.com/problems/power-of-two/
 * @param {number} n
 * @return {boolean}
 */

var isPowerOfTwo = function(n) {
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

