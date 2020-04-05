/**
 * https://leetcode.com/problems/longest-common-subsequence/
 * result[x][y] 从 text1 的 0 - x 与 text2 的 0 - y 的最长匹配
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
  const result = [[]];

  result[0][0] = text1.charAt(0) === text2.charAt(0) ? 1 : 0;

  for (let x = 1; x < text1.length; x++) {
    result[x] = [];
    result[x][0] = text1.charAt(x) === text2.charAt(0) ? 1 : result[x - 1][0];
  }

  for (let y = 1; y < text2.length; y++) {
    result[0][y] = text1.charAt(0) === text2.charAt(y) ? 1 : result[0][y - 1];
  }

  for (let x = 1; x < text1.length; x++) {
    for (let y = 1; y < text2.length; y++) {
      if (text1.charAt(x) === text2.charAt(y)) {
        result[x][y] = result[x - 1][y - 1] + 1;
      } else {
        result[x][y] = Math.max(result[x - 1][y], result[x][y - 1]);
      }
    }
  }

  return result[text1.length - 1][text2.length - 1];
};

const text1 = "oxcpqrsvwf", text2 = "shmtulqrypy" ;
console.log(longestCommonSubsequence(text1, text2))