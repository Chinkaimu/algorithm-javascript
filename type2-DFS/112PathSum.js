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
var hasPathSum = function(root, sum) {
  // 空树
  if (root === null) return false;
  // 一定要走到叶子节点才会有结果返回。
  if (root.left === null && root.right === null) return root.val === sum;

  const remainSum = sum - root.val;

  return hasPathSum(root.left, remainSum) || hasPathSum(root.right, remainSum);
};