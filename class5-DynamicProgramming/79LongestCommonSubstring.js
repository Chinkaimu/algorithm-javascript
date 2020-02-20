/**
 * https://www.lintcode.com/problem/longest-common-substring/description
 * @param A: A string
 * @param B: A string
 * @return: the length of the longest common substring.
 */
const longestCommonSubstring = function (A, B) {
  if (!A || !A.length || !B || !B.length) return 0

  const result = []
  let maxLength = 0

  for (let i = 0; i <= A.length; i++) {
    result[i] = []
    result[i][0] = 0
  }

  for (let j = 0; j <= B.length; j++) {
    result[0][j] = 0
  }


  for (let i = 1; i <= A.length; i++) {
    for (let j = 1; j <= B.length; j++) {
      if (A[i - 1] === B[j - 1]) {
        result[i][j] = result[i - 1][j - 1] + 1
        maxLength = Math.max(maxLength, result[i][j])
      } else {
        result[i][j] = 0
      }
    }
  }

  return maxLength
}

console.log(longestCommonSubstring('abcd', 'ac'))
console.log(longestCommonSubstring('abcde', 'bdde'))