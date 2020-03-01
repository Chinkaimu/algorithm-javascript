/**
 * https://leetcode.com/problems/combination-sum-ii/submissions/
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  const result = []
  // 整数数组的 sort 需要传入比较函数进行比较
  candidates.sort((a, b) => a - b)
  dfs ([], 0, 0)

  function dfs (current, sum, pos) {
    if (sum === target) {
      result.push(current)
      return
    }

    for (let i = pos; i < candidates.length; i++) {
      if (sum > target) {
        return
      }

      // 上一次取的位置是 pos - 1; 如果这次取的是 pos 那么相同的数是接连取的，没问题
      // 但如果上一次位置不是 pos - 1; 而这次位置要取 pos + i 的位置，而这个位置 pos + i - 1 相等，前面那个应该先被取
      if (i !== pos && candidates[i] === candidates[i - 1]) {
        // 重点：这里是跳过直接下一个，不是返回
        continue
      }
      // 回溯，需要把 sum 值也恢复到没有加以前，它也算是 current 的一部分
      sum += candidates[i]
      dfs([...current, candidates[i]], sum, i + 1)
      sum -= candidates[i]
    }
  }

  return result
};

console.log(combinationSum2([10,1,2,7,6,1,5], 8))
console.log(combinationSum2([2,5,2,1,2], 5))