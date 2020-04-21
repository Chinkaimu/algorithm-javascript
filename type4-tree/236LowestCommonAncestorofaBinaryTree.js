/**
 * 11:39 - 11:52(13mins)
 * solution:
 *    从上往下查找，如果是 LCA 再继续往下查找，否则就不查找了。
 *    可以 p/q 节点一层层向上走，相遇的地方就是 LCA。
 *    left --> p, right is ancestor to q, then the root is the ancestor of p,q
 * Divide & conquer
 *      【返回值】dfs 找到 p 或 q 或者 null 不存在 就 return 这 3 个值;
 *      【结果合并】左右都不是 null，则 root 就是 LCA； 左边或右边一个 null，一个非 null，则返回非 null 值。
 * 
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
  if (!root || root === p || root === q) return root;

  const leftResult = lowestCommonAncestor(root.left, p, q);
  const rightResult = lowestCommonAncestor(root.right, p, q);

  // TODO: 返回只有 3 种情况，p/q/null， 如果左右结果都存在，那么返回 root 即可。向上的分支左右结果都会是存在的，也会返回 root。不要去判断具体的数值。
  // p/q 在同一条分支上的话注定有一节点是在 root。
  return (leftResult && rightResult) ? root : (leftResult || rightResult);
};