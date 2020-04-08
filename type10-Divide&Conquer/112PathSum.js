/**
 * https://leetcode.com/problems/path-sum/
 * 16:41 - 
 * Divide & Conquer
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
// TODO: 一定要走到叶子节点，A leaf is a node with no children.
// TODO: 节点值可能是负数，不要在中间打断。
var hasPathSum = function(root, sum) {
  // 空树
  if (root === null) return false;
  // 一定要走到叶子节点
  if (root.left === null && root.right === null) return root.val === sum;

  const remainSum = sum - root.val;

  return hasPathSum(root.left, remainSum) || hasPathSum(root.right, remainSum);
};