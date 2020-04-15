/**
 * https://leetcode.com/problems/broken-calculator/
 * @param {number} X
 * @param {number} Y
 * @return {number}
 */
var brokenCalc = function(X, Y) {
  let step = 0;
  let queue = [X];
  while (queue.length > 0) {
    let size = queue.length;

    while (size-- > 0) {
      const current = queue.shift();
      if (current === Y) return step;

      queue.push(current * 2);
      queue.push(current - 1);
    }
    step++;
  }
};

