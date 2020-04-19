/**
 * // TODO: 思路有点乱，参考
 * https://leetcode.com/problems/binary-tree-inorder-traversal/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  if (!root) return [];

  const stack = [root];
  const result = [];
  
  let current;
  while (stack.length > 0) {
    current = stack.pop();

    if (current.right === null && current.left === null) {
      result.push(current);
      continue;
    }

    if (current.right) {
      stack.push(current.right);
      current.right = null;
    }

    // 把中间的 push 回去
    stack.push(current);

    if (current.left) {
      stack.push(current.left);
      current.left = null;
    }
  }
};