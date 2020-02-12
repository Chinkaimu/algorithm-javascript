// https://leetcode.com/problems/binary-tree-preorder-traversal/
/**
 * 思想：分治法，左右结果都拿到以后一起合并
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
  const result = []

  if (root === null) {
    return result
  }

  const left = preorderTraversal(root.left)
  const right = preorderTraversal(root.right)
  result.push(root.val)
  result.push(...left)
  result.push(...right)

  return result
}

console.log(preorderTraversal(root))