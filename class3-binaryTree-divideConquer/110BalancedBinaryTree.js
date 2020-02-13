/**
 * https://leetcode.com/problems/balanced-binary-tree/
 * isBalanced 的条件是左右子树都是平衡树，并且左右子树高度小于等于 1
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  const depth = getDepth(root)

  return depth !== -1
};

function getDepth (root) {
  let depth = 0

  if (root === null) {
    return depth
  }

  const leftDepth = getDepth(root.left)
  const rightDepth = getDepth(root.right)
  if (leftDepth === -1 || rightDepth === -1) {
    return -1
  }
  depth = Math.abs(leftDepth - rightDepth) > 1 ? -1 : (Math.max(leftDepth, rightDepth) + 1)

  return depth
}

// testcase
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const root = new TreeNode(1)
const next1 = new TreeNode(4)
const next2 = new TreeNode(2)
const next3 = new TreeNode(3)
next2.left = next3
root.right = next2
root.left = next1

console.log(isBalanced(root))