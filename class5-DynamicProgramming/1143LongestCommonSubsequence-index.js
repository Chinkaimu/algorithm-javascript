/**
 * https://leetcode.com/problems/longest-common-subsequence/
 * Two sequence DP
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
  if (!text1 || !text1.length || !text2 || !text2.length) return 0

  // state
  let result = [[]]
  // initialize
  result[0][0] = text1[0] === text2[0] ? 1 : 0

  for (let i = 1; i < text1.length; i++) {
    result[i] = []
    result[i][0] = text1[i] === text2[0] ? 1 : result[i - 1][0]
  }

  for (let j = 1; j < text2.length; j++) {
    result[0][j] = text1[0] === text2[j] ? 1 : result[0][j - 1]
  }

  // function
  for (let i = 1 ; i < text1.length; i++) {
    for (let j = 1; j < text2.length; j++) {
      if (text1[i] === text2[j]) {
        result[i][j] = result[i - 1][j - 1] + 1
      } else {
        result[i][j] = Math.max(result[i - 1][j], result[i][j - 1])
      }
    }
  }

  // answer
  return result[text1.length - 1][text2.length - 1]
};

console.log(longestCommonSubsequence('abcde', 'ace'))
console.log(longestCommonSubsequence('abcde', 'fmn'))
console.log(longestCommonSubsequence("oxcpqrsvwf", "shmtulqrypy"))