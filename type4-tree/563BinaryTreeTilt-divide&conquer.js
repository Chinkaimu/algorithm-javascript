/**
 * https://leetcode.com/problems/binary-tree-tilt/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findTilt = function(root) {
  if (!root) return 0;

  const leftResult = getSumAndTilt(root.left);
  const rightResult = getSumAndTilt(root.right);

  // leftTilt + rightTilt + rootTilt
  return leftResult.tilt + rightResult.tilt + Math.abs(leftResult.sum - rightResult.sum);
};

function getSumAndTilt (root) {
  if (!root) return {
    tilt: 0,
    sum: 0
  }

  const leftSum = getSumAndTilt(root.left).sum;
  const rightSum = getSumAndTilt(root.right).sum;
  
  return {
    sum: root.val + leftSum + rightSum,
    tilt: leftResult.tilt + rightResult.tilt + Math.abs(leftResult.sum - rightResult.sum)
  }
}


// TODO: Merge
var findTilt1 = function(root) {
  return getSumAndTilt(root).tilt;
};