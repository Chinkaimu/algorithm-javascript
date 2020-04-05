/**
 * https://leetcode.com/problems/longest-common-subsequence/
 * longCommon1[i] 表示 text1 中取串到 i 位置与 text2 的最长匹配
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
  const longCommon1 = getLongCommon(text1, text2);
  const longCommon2 = getLongCommon(text2, text1);

  console.log(longCommon1);
  console.log(longCommon2);
  return Math.max(longCommon1[longCommon1.length - 1], longCommon2[longCommon2.length - 1]);
};

function getLongCommon(text1, text2) {
  const longCommon = [];

  let nextIndex = 0;
  let matching = false;
  for (let i = 0; i < text1.length; i++) {
    matching = false;

    for (let j = nextIndex; j < text2.length; j++) {
      if (text1.charAt(i) == text2.charAt(j)) {
        if (i === 0) {
          longCommon[i] = 1;
        } else {
          longCommon[i] = longCommon[i - 1] + 1;
        }

        // TODO: 下一次需要从 j + 1 位置开始
        nextIndex = j + 1;
        // TODO: 增加标记是否有匹配，不能 break 出去了被重写。
        matching = true;
        break;
      }
    }

    // TODO: 找不到相同，则等于上一次的最长子串
    // TODO: 更加要注意的是，i 可能为 0
    if (!matching) {
      if (i === 0) {
        longCommon[i] = 0;
      } else {
        longCommon[i] = longCommon[i - 1]
      }
    };
  }

  return longCommon;
}

const text1 = "oxcpqrsvwf", text2 = "shmtulqrypy" ;
console.log(longestCommonSubsequence(text1, text2))