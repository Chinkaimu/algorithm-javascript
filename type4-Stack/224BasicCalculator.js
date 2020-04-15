/**
 * https://leetcode.com/problems/basic-calculator/
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  if (s.length === 0) return 0;
  const stack = [];
  let sign = 1;
  let res = 0;

  for (let i = 0; i < s.length; i++) {
    let current = s.charAt(i);

    if (current >= '0') {
      let num = 0;
      while ( i < s.length && s[i] >= '0') {
        num = 10 * num + (s[i++] - '0');
      }
      // 多加了 1 位
      i--;
      res += sign * num;
    } else if (current === '+') {
      sign = 1;
    } else if (current === '-') {
      sign = -1;
    } else if (current === '(') {
      // 遇到做括号，存储之前的结果。将变量重置，先计算出括号中的内容。
      stack.push(res);
      stack.push(sign);
      res = 0;
      sign = 1;
    } else if (current === ')') {
      res *= stack.pop();
      res += stack.pop();
    }
  }

  return res;
};

module.exports = calculate;