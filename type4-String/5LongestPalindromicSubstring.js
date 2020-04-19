const assert = require('assert').strict;
/**
 * 19:12 - 19:43 （30 mins）
 * 求最大值，BFS（一层层向下搜索）、DP（从小的符合条件的状态逐渐推广）
 * 动态规划 Dynamic programing
 * （1）状态定义：isPalindromic[x][y] x - y 是不是回文串
 * （2）初始化： 本身是回文串， step === 0 时候
 * （2）转化： isPalindromic[x][y] = s[x] === s[y] && isPalindromic[x + 1][y - 1]
 *  (3) 结果： 最长回文串
 * 
 */
var longestPalindrome = function (s) {
  if (typeof s !== 'string') return;

  let start = 0;
  let maxStep = 0;

  let isPalindromic = [[]];
  for (let step = 0; step < s.length; step++) {
    for (let i = 0; (i + step) < s.length; i++) {
      // TODO: 先判断首位是不是相等；判断 false 而不是 true 会更加简单
      if (step === 0) {
        isPalindromic[i] = [];
      } 
      if (s[i] !== s[i + step] || (step > 1 && !isPalindromic[i + 1][i + step - 1])){
        isPalindromic[i][i + step] = false;
      } else {
        isPalindromic[i][i + step] = true;
        start = i;
        maxStep = step;
      }
    }
  }

  return s.substring(start, start + maxStep + 1);
}


var longestPalindrome = function (s) {
  if (typeof s !== 'string') return;

  let start = 0;
  let maxStep = 0;

  let isPalindromic = [[]];
  for (let step = 0; step < s.length; step++) {
    for (let i = 0; (i + step) < s.length; i++) {
      // TODO: 先判断首位是不是相等；判断 false 而不是 true 会更加简单
      if (step === 0) {
        isPalindromic[i] = [];
        isPalindromic[i][i] = true;
      } else if (step === 1 && s[i] === s[i + step]){
        isPalindromic[i][i + step] = true;
      } else if (s[i] === s[i + step] && isPalindromic[i + 1][i + step - 1]){
        isPalindromic[i][i + step] = true;
      } else {
        isPalindromic[i][i + step] = false;
        continue;
      }

      start = i;
      maxStep = step;
    }
  }

  return s.substring(start, start + maxStep + 1);
}

/**
 * Test Case：黑盒，根据需求可存在哪些变量，所有变量考虑边界、普通情况、异常情况
 * 1. 错误输入：其他类型参数
 * 2. 边界：空字符串（不存在回文串）；整个回文串；；回文串在最前面；回文串在最后面；
 * 3. 普通场景：存在回文；存在多个回文串是否取最长
 * 3. 特殊场景：全部相同；全部不相同
 */
assert.equal(longestPalindrome(''),'');
assert.equal(longestPalindrome('ababb'),'bab');
assert.equal(longestPalindrome('bwacms'),'s');
assert.equal(longestPalindrome('aaaa'),'aaaa');
assert.equal(longestPalindrome('abbaacd'),'bbaa');
assert.equal(longestPalindrome('abccddccmdcccdddccc'),'cccdddccc');


