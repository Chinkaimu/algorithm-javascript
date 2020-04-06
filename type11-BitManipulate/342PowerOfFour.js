/**
 * https://leetcode.com/problems/power-of-four/
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
  while (num >= 4) {
    if (num % 4 !== 0) {
      return false;
    }
    num = num >> 2;
  }

  return num === 1 ? true : false; 
};