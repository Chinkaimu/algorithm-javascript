/**
 * https://leetcode.com/problems/binary-tree-maximum-path-sum/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * maxPath: 至少有一个节点。非法的时候就直接返回 -Infinity
 * singlePath: 可以不含节点
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
  const maxSum = maxPathSumHelper(root)

  return maxSum.maxPath
};

function maxPathSumHelper (root) {
  // 截止回归终止条件更好的是叶子节点以下，直接返回不影响结果的数据 0
  // 数据从最底层开始往上回传
  if (!root) {
    return {
      maxPath: -Infinity,
      singlePath: 0
    }
  }

  const left = maxPathSumHelper(root.left)
  const right = maxPathSumHelper(root.right)

  // singlePath 和 maxPath 分别通过分治的结果拿到最终结果
  // singlePath 只是为了用来求 maxPath
  let singlePath = Math.max(left.singlePath, right.singlePath) + root.val
  singlePath = Math.max(singlePath, 0)

  // 当 singlePath 小于 0 时，直接设置为 0。
  let maxPath = Math.max(left.maxPath, right.maxPath)
  // 叶子节点的 maxPath = root.val
  // 与上一次的 maxPath 比，是否更大，更大则去替换
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