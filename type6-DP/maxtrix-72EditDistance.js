/**
 * https://leetcode.com/problems/edit-distance/
 * minEdit[x][y] 表示 word1 的 0 - x 改为 word2 的 y 所需要进行的最小修改。
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  const minEdits = [[0]];

  for (let y = 0; y <= word2.length; y++) {
    minEdits[0][y] = y;
  }

  for (let x = 1; x <= word1.length; x++) {
    minEdits[x] = [];

    for (let y = 0; y <= word2.length; y++) {
      if (y === 0) {
        minEdits[x][0] = x;
        continue;
      }

      // 1. 新增一个数，加一次修改
      const count1 = minEdits[x][y - 1] + 1;
      // 2. 修改一个（最后一个值相等的话则不需要修改）
      // TODO: minEdits 的坐标是表示个数，它比 word 的 index 大 1，所以这里一定要记得减 1
      const count2 = (word1.charAt(x - 1) === word2.charAt(y - 1)) ? minEdits[x - 1][y - 1] : (minEdits[x - 1][y - 1] + 1);
      // 3. 删除一个
      const count3 = minEdits[x - 1][y] + 1;

      minEdits[x][y] = Math.min(count1, count2, count3);
    }
  }


  return minEdits[word1.length][word2.length];
}

console.log(minDistance('horse', 'ros'))