/**
 * https://leetcode.com/problems/edit-distance/
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  // state: result[i][j] word1 的前 i 个字符最少需要用几次编辑可以变成 b 的前 j 个字符
  const result = []

  // initialize
  for (let i = 0; i <= word1.length; i++) {
    result[i] = []
    result[i][0] = i
  }

  for (let j = 0; j <= word2.length; j++) {
    result[0][j] = j
  }

  // function
  for (let i = 1; i <= word1.length; i++) {
    for (let j = 1; j <= word2.length; j++) {
      // 下标是个数 -1
      if (word1[i - 1] === word2[j - 1]) {
        result[i][j] = Math.min(result[i - 1][j - 1], result[i - 1][j] + 1, result[i][j - 1] + 1)
      } else {
        // 第1种情况是替换；第2种是删除；第3种是新插入
        result[i][j] = Math.min(result[i - 1][j - 1] + 1, result[i - 1][j] + 1, result[i][j - 1] + 1)
      }
    }
  }
  
  return result[word1.length][word2.length]
};