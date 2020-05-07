/**
 * https://leetcode.com/problems/univalued-binary-tree/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function(root) {
  if (!root) return true;

  let val = root.val;
  const queue = [root];

  while (queue.length > 0) {
    const node = queue.shift();
    if (node.val !== val) {
      return false;
    }
    node.left && queue.push(node.left);
    node.right && queue.push(node.right);
  }

  return true;
};