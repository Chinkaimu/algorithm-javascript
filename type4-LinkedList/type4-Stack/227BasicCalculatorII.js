/**
 * https://leetcode.com/problems/basic-calculator-ii/
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  let res = 0;
  let stack = [];
  let sign = 1;

  for (let i = 0; i < s.length; i++) {
    let current = s[i];
    if (current >= '0') {
      let num = '';
      while (i < s.length && s[i] >= '0') {
        num += s[i++];
      }
      i--;
      stack.push(sign * num);
    } else if (current === '+') {
      sign = 1;
    } else if (current === '-') {
      sign = -1;
    } else if (current === '*' || current === '/') {
      let right = '';
      i++;
      // TODO: deal the space
      while (i < s.length && s[i] >= '0' || s[i] === ' ') {
        right += s[i++];
      }
      i--;
      // TODO: the sign has been pushed by the left
      // TODO: Math.floor(-1.5) = Math.floor(-2), so the sign should be seperated from left operator first
      let left = stack.pop();
      let tempSign = left >= 0 ? 1 : -1;
      left = Math.abs(left);
      current === '*' && stack.push(left * right * tempSign);
      current === '/' && stack.push(Math.floor(left / right) * tempSign);
    }
  }

  stack.forEach(val => {
    res += val;
  })

  stack = null;
  return res;
};

module.exports = calculate;