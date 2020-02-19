/**
 * https://leetcode.com/problems/palindrome-partitioning-ii/
 * 核心点：
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
  if (!s || s.length <= 1) return 0

  const palindrome = getPalindrome(s)
  if (palindrome[0][s.length - 1]) return 0

  // initial
  const cuts = [0]
  for (let i = 1; i < s.length; i++) {
    if (palindrome[0][i]) {
      cuts[i] = 0
      continue
    } else {
      cuts[i] = i
    }

    for (let j = 0; j < i; j++) {
      if (palindrome[j + 1][i]) {
        cuts[i] = Math.min(cuts[i], cuts[j] + 1)
      }
    }
  }

  return cuts[s.length - 1]
};

function getPalindrome (s) {
  palindrome = []

  for (let i = 0; i < s.length; i++) {
    palindrome[i] = []
    palindrome[i][i] = true

    if (i + 1 < s.length) {
      palindrome[i][i + 1] = s[i] === s[i + 1]
    }
  }

  // o(n^2)
  for (let step = 2; step < s.length; step++) {
    for (let i = 0; i + step < s.length; i++) {
      palindrome[i][i + step] = palindrome[i + 1][i + step - 1] && s[i] === s[i + step]
    }
  }

  return palindrome
}

// Testcase
console.log(minCut(''))
console.log(minCut('aab'))
console.log(minCut('abc'))
console.log(minCut('abccba'))
console.log(minCut('abacabab'))


