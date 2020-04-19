/**
 * https://leetcode.com/problems/binary-tree-inorder-traversal/
 * data: 
 *    stack 存储根节点
 * solution:
 *    栈顶如果存在左节点，则左节点入栈，left 标记为 null
 *    如果栈顶不存在 left，则出栈，到结果。
 *    判断出栈的栈顶是否存在 right ，如果存在则入栈。
 * result: []
 *
 * design(4mins): 19:50 - 19:54
 * coding(3mins): 19:54 - 19:57(wrong)
 * debuging(2mins): 19:57 - 19:59
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

  const result = [];
  const stack = [root];

  while (stack.length > 0) {
    const topNode = stack[stack.length - 1];

    if (topNode.left !== null) {
      stack.push(topNode.left);
      topNode.left = null;
    } else {
      result.push(topNode.val);
      stack.pop();
      topNode.right && stack.push(topNode.right);
    }
  }

  return result;
};