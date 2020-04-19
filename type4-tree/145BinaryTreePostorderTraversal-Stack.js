/**
 * https://leetcode.com/problems/binary-tree-postorder-traversal/
 * design: 20:13 - 20:18(5mins)
 * data:
 *    stack
 * solution（TODO:会改变原来节点，可以增加访问标记符）:
 *   关键点，最先拿到了 root ，但 root 是最后出栈的。
 *   root 入栈，栈顶判断，当栈顶左右节点为 null 时，出栈入结果。
 *   判断存在 right 则入栈，存在 left 入栈，并且标记 left, right 为 null。

 * result: []
 * coding(5mins): 20:19 - 20:24(wrong)
 * debuging(6mins): 20:26 - 20:32
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
const buildTree = require('../utils/buildTree');
var postorderTraversal = function(root) {
  if (!root) return [];

  const stack = [root];
  const result = [];

  while (stack.length > 0) {
    const topNode = stack[stack.length - 1];

    // TODO: 直接判断要不要出栈，否则前面 2 个 if 把这个条件都设置为 true 了。
    if (!topNode.left && !topNode.right) {
      stack.pop();
      result.push(topNode.val);
    }

    if (topNode.right) {
      stack.push(topNode.right);
      topNode.right = null;
    }

    if (topNode.left) {
      stack.push(topNode.left);
      topNode.left = null;
    }


  }

  return result;
};

console.log(postorderTraversal(buildTree([1,null,2,3])))