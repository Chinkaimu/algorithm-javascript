/**
 * https://leetcode.com/problems/insert-into-a-binary-search-tree/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 思路：比根小左边走，比根大右边走，直到叶子节点
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
  if (!root) return root = new TreeNode(val)

  const originalRoot = root
  while (true) {
    if (val > root.val) {
      if (root.right) {
        root = root.right
      } else {
        root.right = new TreeNode(val)
        break
      }
    }
    if (val < root.val) {
      if (root.left) {
        root = root.left
      } else {
        root.left = new TreeNode(val)
        break
      }
    }
  }

  return originalRoot
};