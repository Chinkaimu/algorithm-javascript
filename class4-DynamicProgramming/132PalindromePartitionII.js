/**
 * https://leetcode.com/problems/palindrome-partitioning-ii/
 * 核心点：
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
  if (!s || s.length <= 1) return 0

  const cuts = [0]
  const palindrome = [[true]]

  palindrome[1][1] = true
  if (s[1] === s[0]) {
    palindrome[0][1] = true
    cuts[1] = cuts[0] + 0
  } else {
    palindrome[0][1] = false
    cuts[1] = cuts[0] + 1
  }

  for (let i = 2; i < s.length; i++) {
    palindrome[i][i] = true

  }
};