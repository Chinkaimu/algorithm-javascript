/**
 * https://leetcode.com/problems/palindrome-partitioning-ii/
 * p[i] 表示 i 位置最少个数的回文串，分割数是 p[i] - 1（定义，满足 1，求最小值）。p[i] = p[j] + 1（方程）, 如果 （j + 1） -> i 是回文串。
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
  const p = [];
  const isP = getPalindrome(s);

  for (let i = 0; i < s.length; i++) {
    if (isP[0][i]) {
      p[i] = 1;
      continue;
    }

    for (let j = 0; j < i; j++) {
      if (isP[j + 1][i]) {
        // TODO: 注意 undefined 的情况
        p[i] = p[i] === undefined ? (p[j] + 1) : Math.min(p[i], p[j] + 1);
      }
    }
  }

  return p[s.length - 1] - 1;
}

function getPalindrome(s) {
  const isPlindrome = [];

  for (let x = 0; x < s.length; x++) {
    isPlindrome[x] = [];
    isPlindrome[x][x] = true;
  }

  for (let count = 1; count < s.length; count++) {
    for (let index = 0; index + count < s.length; index ++) {
      if (count === 1) {
        isPlindrome[index][index + count] = s.charAt(index) === s.charAt(index + count)
      } else {
        isPlindrome[index][index + count] = s.charAt(index) === s.charAt(index + count) && isPlindrome[index + 1][index + count - 1]
      }
    }
  }

  return isPlindrome;
}

console.log(minCut('aab'));