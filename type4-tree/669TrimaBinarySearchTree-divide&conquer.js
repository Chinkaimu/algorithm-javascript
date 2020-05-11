/**
 * https://leetcode.com/problems/trim-a-binary-search-tree/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */
var trimBST = function(root, L, R) {
  if (!root) return root;
  
  // 2. When meet the trimming conditions, use the child node result instead the node
  if (root.val < L) {
    return trimBST(root.right, L, R);
  } else if (root.val > R) {
    return trimBST(root.left, L, R);
  }
  
  // 1. trim left tree and trim right tree
  root.left = trimBST(root.left, L, R);
  root.right = trimBST(root.right, L, R);

  return root;
};