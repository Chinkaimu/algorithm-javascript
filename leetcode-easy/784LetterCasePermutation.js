/**
 * https://leetcode.com/problems/letter-case-permutation/
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
  return [S, ...permutationHelper(S, S.length - 1)]
};

// 重点：结果要一层一层添加
function permutationHelper (target, pos) {
  let result = []
  let nextResult = []
  // 保证 target 不更改
  let newTarget
  while(pos >= 0) {
    let char = changeResult(target.charAt(pos))
    if (char) {
      newTarget = target.substring(0, pos) + char + target.substring(pos + 1)
      result.push(newTarget)
      nextResult = [...nextResult, ...permutationHelper(newTarget, pos - 1)]
    }
    pos--
  }

  return [...result, ...nextResult]
}

function changeResult (char) {
  if (char >= 'A' && char <= 'Z') {
    return String.fromCharCode(char.charCodeAt() + 32)
  }
  if (char >= 'a' && char <= 'z') {
    return String.fromCharCode(char.charCodeAt() - 32)
  }
  return undefined
}

console.log(letterCasePermutation('a1b2'))

// 参考答案: Depth-First Search
var letterCasePermutation = function(S) {
  let result = [];
  dfs("", 0);

  // 闭包，使用函数体外的变量，减少参数传递
  function dfs(current, i){
      if(current.length == S.length) {
          result.push(current);
          return;
      }
      if(S.charAt(i) >= '0' && S.charAt(i) <= '9') {
          current += S.charAt(i);
          dfs(current, i + 1);
      } else {
          dfs(current + S.charAt(i).toLowerCase(), i + 1);
          dfs(current + S.charAt(i).toUpperCase(), i + 1);
      }
  }
  
  return result;
};