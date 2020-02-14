/**
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
 * 分治法关键点：
 * 1. 叶子节点或叶子节点以下终止递归的条件：找到 p 或者 q，或者为空
 * 2. 左子树、右子树分别递归：左子树、右子树分别寻找 p、q 的最小共同祖先
 * 3. 子树结果合并：把需要寻找到的正确节点一步步传到第一次调用的结果，如果两者都存在则返回根，如果仅一边存在则返回一边
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  if (!root || root === p || root === q) return root

  const caseL = lowestCommonAncestor(root.left, p, q)
  const caseR = lowestCommonAncestor(root.right, p, q)
  
  return (caseL && caseR) ? root : (caseL || caseR)
};