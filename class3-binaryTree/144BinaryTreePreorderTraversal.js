// https://leetcode.com/problems/binary-tree-preorder-traversal/
/**
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


/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  if (!root || !root instanceof TreeNode) return []

  const result = []
  traversal(root, result)
  return result
};

function traversal(root, result) {
  result.push(root.val)

  if (root.left === null && root.right === null) {
    return result
  }

  root.left !== null && traversal(root.left, result)
  root.right !== null && traversal(root.right, result)
}

console.log(preorderTraversal(root))