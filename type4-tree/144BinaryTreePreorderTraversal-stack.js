/**
 * https://leetcode.com/problems/binary-tree-preorder-traversal/
 * data: stack
 * wrong solution: stack 实现递归
 *  * stack 中存在则继续循环 // TODO: 数据结构设计的时候要想好存储的内容，否则后面可能会搞乱
 *  * 取 stack 顶层，作为 topNode
 *  * 处理left： 存在 left 则一定要先到 left 底部
 *  * 【TODO: 这一步做的很纠结，需要将 val 设置为 null 标志已经遍历过了。】：处理完 left 要回到 root
 *  * 处理完 right：, 把 right 入栈
 * 
 * right solution: 不需要回溯，根节点出来，right, left 以此入栈，left 会优先出栈被处理。 每个根节点的处理会将 右、左节点替换入栈。
 * 思想：后处理的先入栈
 * 
 * result: [] 序列
 * 
 * coding: 17:38 - 17:47(10mins)
 * debugging: 17:49 - 18:18 （change solution 30mins）
 * @param {TreeNode} root
 * @return {number[]}
 */

const buildTree = require('../utils/buildTree');

var preorderTraversal = function(root) {
  if (!root) return [];

  const stack = [root];
  const result = [];

  while (stack.length > 0) {
    const topNode = stack.pop();
    result.push(topNode.val);

    topNode.right && stack.push(topNode.right);
    topNode.left && stack.push(topNode.left);
  }

  return result;
}

console.log(preorderTraversal(buildTree([1,null,2,3])));