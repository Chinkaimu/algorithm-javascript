/**
 * https://leetcode.com/problems/palindrome-partitioning/
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  const palindromes = getPalindrome(s)
  const result = []

  dfs([], 0)

  // 省略 originData, results
  function dfs(current, pos) {
    if (pos === s.length) {
      result.push(current)
      return
    }

    let substr = ""
    for (let i = pos; i < s.length; i++) {
      substr += s.charAt(i)

      if (palindromes[pos][i]) {
        dfs([...current, substr], i + 1)
      }
    }
  }

  return result
}

function getPalindrome(s) {
  const palindromes = []
  for (let i = 0; i < s.length; i++) {
    palindromes[i] = []
    palindromes[i][i] = true
  }

  // 重点： 外层循环需要是 step
  for (let step = 1; step < s.length; step++) {
    for (let j = 0; j < s.length; j++) {
      if ((j + step) < s.length) {
        palindromes[j][j + step] = s[j] === s[j + step] && (step === 1 ? true : palindromes[j + 1][j + step - 1])
      }
    }
  }
  return palindromes
}

var partition1 = function(s) {
  const palindromes = getPalindrome(s)
  const result = []
  const n = s.length - 1

  // 「节点分析」：分割线为节点，初始化没有分割线分割，上一次分割线的位置在 0
  dfs([], 0)

  function dfs(currentCuts, preCut) {
    // 「结果分析」：满足未分割段是回味串的节点是结果节点
    if (palindromes[preCut][n]) {
      // 「结果转化」：根据分割线划分出字符串
      if (preCut === 0) {
        result.push([s])
      } else {
        const strs = []
        let i = 0
        strs.push(s.substring(0, currentCuts[0]))
        while ((i + 1) < currentCuts.length) {
          strs.push(s.substring(currentCuts[i], currentCuts[i + 1]))
          i++
        }
        strs.push(s.substring(currentCuts[i]))
        result.push(strs)
      }
      // result.push(currentCuts)
    }

    for (let i = preCut + 1; i <= n; i++) {
      // DFS 的筛选条件：前面分割的已经是 palindrome，后面才有必要继续搜索。
      if (palindromes[preCut][i - 1]) {
        //「节点扩展」
        dfs([...currentCuts, i], i)
      }
    }
  }

  return result
};


console.log(partition('abba'))