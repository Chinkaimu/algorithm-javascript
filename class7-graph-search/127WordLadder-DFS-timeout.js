/**
 * https://leetcode.com/problems/word-ladder/
 * 解决方案：最短路径需要所有路径进行比较，所以用 DFS 找出所有路径。
 * 节点：字符串
 * 节点扩展：从 endWord 出发，能修改一次得到的节点是下一层节点。能被修改一次到下一层字符串；且前面没用过这个节点
 * 结果：能够到达 beginWord 节点路径的最小长度。
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  if (wordList.indexOf(endWord) === -1) return 0

  const result = []
  let shotestLength = 0

  dfs ([endWord], 0)

  // pos is target position
  function dfs (current, pos) {
    const len = current.length
    result[pos] = current.length
    const currentString = current[len - 1]

    // 注意： beginWord 不在 wordList 中
    if (canTransfer(currentString, beginWord)) {
      if (shotestLength === 0) {
        shotestLength = len + 1
      } else {
        shotestLength = Math.min(shotestLength, len + 1)
      }
      return shotestLength
    }

    // if (result[pos]) {
    //   return Math.min(shotestLength, len + result[pos])
    // }

    for (let i = 0; i < wordList.length; i++) {
      if (current.indexOf(wordList[i]) !== -1 || result[i]) {
        continue
      }
      if (shotestLength > 0 && (len + 1) >= shotestLength) {
        continue
      }
      if (canTransfer(wordList[i], currentString)) {
        dfs([...current, wordList[i]], i)
      }
    }
  }

  return shotestLength
};

function canTransfer (str1, str2) {
  let diffCount = 0
  for (let i = 0; i < str1.length; i++) {
    str1[i] !== str2[i] && diffCount++
    if (diffCount > 1) {
      return false
    }
  }
  return true
}

// "qa"
// "sq"
// ["si","go","se","cm","so","ph","mt","db","mb","sb","kr","ln","tm","le","av","sm","ar","ci","ca","br","ti","ba","to","ra","fa","yo","ow","sn","ya","cr","po","fe","ho","ma","re","or","rn","au","ur","rh","sr","tc","lt","lo","as","fr","nb","yb","if","pb","ge","th","pm","rb","sh","co","ga","li","ha","hz","no","bi","di","hi","qa","pi","os","uh","wm","an","me","mo","na","la","st","er","sc","ne","mn","mi","am","ex","pt","io","be","fm","ta","tb","ni","mr","pa","he","lr","sq","ye"]

console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log","cog"]))