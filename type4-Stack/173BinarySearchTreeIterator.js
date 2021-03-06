/**
 * https://leetcode.com/problems/binary-search-tree-iterator/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
  this.stack = []

  this._inOrderLeftTraversal = function (node) {
    while (node) {
      this.stack.push(node)
      node = node.left
    }
  }

  // 把 root 先入栈
  this._inOrderLeftTraversal(root)
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {
  if (this.stack.length === 0) {
    return undefined
  }

  const current = this.stack.pop()
  this._inOrderLeftTraversal(current.right)
  return current.val
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
  return this.stack.length > 0
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */