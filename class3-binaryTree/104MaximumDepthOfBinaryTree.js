/**
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const root = new TreeNode(1)
const next1 = new TreeNode(null)
const next2 = new TreeNode(2)
const next3 = new TreeNode(3)
next2.left = next3
root.right = next2

const root1 = new TreeNode(4)

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  let depth = 0

  if (root === null) {
    return depth
  }

  const leftDepth = maxDepth(root.left)
  const rightDepth = maxDepth(root.right)
  depth = (leftDepth > rightDepth ? leftDepth : rightDepth) + 1
  // depth = Math.max(leftDepth, rightDepth) + 1

  return depth
};

console.log(maxDepth(root))
console.log(maxDepth(root1))