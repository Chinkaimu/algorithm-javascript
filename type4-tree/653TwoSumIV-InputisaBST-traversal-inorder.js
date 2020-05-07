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
 * time complexity: O(n), two inOrderTranversal
 * capacity complexity: O(n)
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */

var findTarget = function(root, k) {
  const inOrderArray = inOrderTranversal(root);
  let left = 0;
  let right = inOrderArray.length - 1;

  while (left < right) {
    let sum = inOrderArray[left] + inOrderArray[right];
    if (sum === k) {
      return true;
    } if (sum < k) {
      left++;
    } else {
      right--;
    }
  }

  return false;
};

function inOrderTranversal(root) {
  if (!root) return [];

  const stack = [root];
  const result = [];

  while (stack.length > 0) {
    while (stack[stack.length - 1].left !== null) {
      const currentNode = stack[stack.length - 1];
      stack.push(currentNode.left);
      // TODO: left should be null, or it will be calculated again
      currentNode.left = null;
    }

    const node = stack.pop();
    result.push(node.val);

    node.right && stack.push(node.right);
  }

  return result;
}

/**
 * Test case
 */
const buildTree = require('../utils/buildTree');
const root = buildTree([5, 3, 6, 2, 4, null, 7]);
console.log(findTarget(root, 9));