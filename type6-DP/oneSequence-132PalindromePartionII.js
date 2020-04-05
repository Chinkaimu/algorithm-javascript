/**
 * https://leetcode.com/problems/palindrome-partitioning-ii/
 * p[i] 表示 i 位置最少个数的回文串，分割数是 p[i] - 1（定义，满足 1，求最小值）。p[i] = p[j] + 1（方程）, 如果 （j + 1） -> i 是回文串。
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
  const p = [];

  for (let i = 0; i < s.length; i++) {
    if (isPlindrome(s, 0, i)) {
      p[i] = 1;
      continue;
    }

    for (let j = 0; j < i; j++) {
      if (isPlindrome(s, j + 1, i)) {
        // TODO: 注意 undefined 的情况
        p[i] = p[i] === undefined ? (p[j] + 1) : Math.min(p[i], p[j] + 1);
      }
    }
  }

  return p[s.length - 1] - 1;
}

function isPlindrome(s, i, j) {
  while (i < j) {
    if (s.charAt(i) !== s.charAt(j)) {
      return false;
    }
    i++;
    j--;
  }

  return true;
}

console.log(minCut('aabaa'));