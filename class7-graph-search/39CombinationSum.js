/**
 * https://leetcode.com/problems/combination-sum/
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const result = []

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
      // 回溯，需要把 sum 值也恢复到没有加以前，它也算是 current 的一部分
      sum += candidates[i]
      dfs([...current, candidates[i]], sum, i)
      sum -= candidates[i]
    }
  }

  return result
};

console.log(combinationSum([2,3,6,7], 7))