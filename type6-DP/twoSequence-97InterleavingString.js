/**
 * https://leetcode.com/problems/interleaving-string/
 * f[i][j] 表示 s1 的前 i 个字符和 s2 的前 j 个字符能否交替组成 s3 的前 i+j 个字符
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
  const f = [[]];
  f[0][0] = true;

  // s1 去 i 个数，下标 i - 1。
  for (let i = 1; i <= s1.length; i++) {
    f[i] = [];
    f[i][0] = f[i - 1][0] && s1[i - 1] === s3[i - 1]
  }

  for (let j = 1; j <= s2.length; j++) {
    f[0][j] = f[0][j - 1] && s2[j - 1] === s3[j - 1];
  }

  // i 表示取 i 个数
  for (let i = 1; i <= s1.length;i++) {
    for (let j = 1; j <= s2.length; j++) {
      // s1 取 i 个数（下标 i - 1）， s2 取 j 个数（下标 j - 1）
      // s3 有 i+j 个数，下标是 i + j - 1
      // 前面的能构成交叉串 + 尾数相同
      f[i][j] = (f[i - 1][j] && s1[i - 1] === s3[i + j - 1]) || (f[i][j - 1] && s2[j - 1] === s3[i + j - 1])
    }
  }

  return f[s1.length][s2.length];
};