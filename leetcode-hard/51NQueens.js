/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  const result = []

  dfs([], undefined)

  function dfs(current) {

    if (current.length === n) {
      let stringArray = []
      for (let i of current) {
        let arr = []
        for (let j = 0; j < n; j++) {
            arr[j] = j === i ? 'Q' : '.'
        }
        stringArray.push(arr.join(''))
      }

      result.push(stringArray)
      // result.push(current)
    }
    const step = current.length

    for (let i = 0; i < n; i++) {
      let needDFS = true
      for (let j = 0; j < step; j++) {
        if (current[j] === i) {
          needDFS = false
          break
        }
        if (current[j] < i && (current[j] - j) === (i - step)) {
          needDFS = false
          continue
        }
        if (current[j] > i && (current[j] + j) === (i + step)) {
          needDFS = false
          continue
        }
      }
      needDFS && dfs([...current, i], i)
    }
  }

  return result
};

console.log(solveNQueens(5))

const arr = [["Q....","..Q..","....Q",".Q...","...Q."],["Q....","...Q.",".Q...","....Q","..Q.."],[".Q...","...Q.","Q....","..Q..","....Q"],[".Q...","....Q","..Q..","Q....","...Q."],["..Q..","Q....","...Q.",".Q...","....Q"],["..Q..","....Q",".Q...","...Q.","Q...."],["...Q.","Q....","..Q..","....Q",".Q..."],["...Q.",".Q...","....Q","..Q..","Q...."],["....Q",".Q...","...Q.","Q....","..Q.."],["....Q","..Q..","Q....","...Q.",".Q..."]]

function change (arr) {
  const result = []
  let itemResult = null
  for (let item of arr) {
    itemResult = []
    let code = -1
    for (let str of item) {
      code = str.indexOf('Q')
      itemResult.push(code)
    }
    result.push(itemResult)
  }
  return result
}
console.log(change(arr))