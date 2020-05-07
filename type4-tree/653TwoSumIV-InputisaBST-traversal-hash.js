/**
 * https://leetcode.com/problems/two-sum-iv-input-is-a-bst/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * transfer to array, than use two point
 * time complexity: < O(n), one inOrderTranversal
 * capacity complexity: O(n)
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
  if (!root) return false;

  const set = new Set();
  const queue = [root];

  while (queue.length > 0) {
    const node = queue.shift();
    if (set.has(k - node.val)) {
      return true;
    } else {
      set.add(node.val);
    }

    node.left && queue.push(node.left);
    node.right && queue.push(node.right);
  }

  return false;
}

const buildTree = require('../utils/buildTree');
const root = buildTree([5, 3, 6, 2, 4, null, 7]);
console.log(findTarget(root, 9));