/**
 * https://leetcode.com/problems/broken-calculator/
 * @param {number} X
 * @param {number} Y
 * @return {number}
 */
var brokenCalc = function(X, Y) {
  if (X > Y) return X - Y;

  let res = 0;
  while (X < Y) {
    if ( Y % 2 === 0) {
      Y = Y/2;
    } else {
      Y = Y + 1;
    }
    res++;
  }

  return res + X - Y;
};