/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  if (wordList.indexOf(endWord) === -1) return 0

  let queue = [beginWord]
  let len = 1

  while (queue.length > 0) {
    const next = []

    for (let current of queue) {
      if (current === endWord) {
        return len
      }
  
      for (let i = 0; i < wordList.length; i++) {
        if (canTransfer(current, wordList[i])) {
          next.push(wordList[i])
          // 不能直接删除内容，会导致长度变化
          wordList.splice(i, 1, "")
        }
      }
    }
    queue = next
    len++
  }

  return 0
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

console.log(ladderLength("hit", "cog", ["hot","cog","dot","dog","hit","lot","log"]))
console.log(ladderLength("a", "c", ["a","b","c"]))