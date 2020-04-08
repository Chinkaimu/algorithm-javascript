/**
 * https://leetcode.com/problems/path-sum-ii/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  if (!root) return [];

  const result = [];

  dfs(root, sum, result, []);

  return result;
};

function dfs(root, sum, result, current) {
  const remainSum = sum - root.val;

  if (!root.left && !root.right && remainSum === 0) {
    result.push([...current, root.val]);
  }

  // TODO: current 记得把当前值 push 进去
  if (root.left) {
    dfs(root.left, remainSum, result, [...current, root.val]);
  }

  if (root.right) {
    dfs(root.right, remainSum, result, [...current, root.val]);
  }
}