/**
 * https://leetcode.com/problems/binary-tree-maximum-path-sum/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
  const maxSum = maxPathSumHelper(root)

  return maxSum.maxPath
};

function maxPathSumHelper (root) {
  // 截止回归终止条件更好的是叶子节点以下，直接返回不影响结果的数据 0
  if (!root) {
    return {
      maxPath: -Infinity,
      singlePath: 0
    }
  }

  const left = maxPathSumHelper(root.left)
  const right = maxPathSumHelper(root.right)

  let singlePath = Math.max(left.singlePath, right.singlePath) + root.val
  singlePath = Math.max(singlePath, 0)

  let maxPath = Math.max(left.maxPath, right.maxPath)
  maxPath = Math.max(maxPath, left.singlePath + right.singlePath + root.val)

  // single path
  return {
    singlePath,
    maxPath
  }
}


/**TESTCASE */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const root = new TreeNode(1)
const next2 = new TreeNode(2)
const next3 = new TreeNode(3)
root.left = next2
root.right = next3

console.log(maxPathSum(root))