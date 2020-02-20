/**
 * https://leetcode.com/problems/longest-common-subsequence/
 * Two sequence DP
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
  if (!text1 || !text1.length || !text2 || !text2.length) return 0

  // state: 2 个文本在 1 个长度时多少匹配，2个长度时多少匹配。
  let result = [[]]
  // initialize
  for (let i = 0; i <= text1.length; i++) {
    result[i] = []
    result[i][0] = 0
  }

  for (let j = 0; j <= text2.length; j++) {
    result[0][j] = 0
  }

  // function
  for (let i = 1 ; i <= text1.length; i++) {
    for (let j = 1; j <= text2.length; j++) {
      // 这里需要是下标，下标是个数减去 1
      if (text1[i - 1] === text2[j - 1]) {
        result[i][j] = result[i - 1][j - 1] + 1
      } else {
        // 可能存在 text1[i - 1] === text2[j] 和 text1[i] === text2[j - 1] 的情况。这样的话会相差一个长度。
        result[i][j] = Math.max(result[i - 1][j], result[i][j - 1])
      }
    }
  }

  // answer
  return result[text1.length][text2.length]
};

console.log(longestCommonSubsequence('abcde', 'ace'))
console.log(longestCommonSubsequence('abcde', 'fmn'))
console.log(longestCommonSubsequence("oxcpqrsvwf", "shmtulqrypy"))