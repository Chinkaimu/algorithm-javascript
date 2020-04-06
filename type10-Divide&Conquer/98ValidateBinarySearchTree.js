/**
 * https://leetcode.com/problems/validate-binary-search-tree/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 分治：左边所有的数都要小于 root，右边所有的数都要大于 root
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  if (!root) return true;

  const result = validBSTHelper(root);

  return result.isValidBST;
}

function validBSTHelper (root) {
  if (!root) return {
    isValidBST: true
  }

  let isValidBST, maxVal, minVal;
  const leftResult = validBSTHelper(root.left);
  const rightResult = validBSTHelper(root.right);

  if (leftResult.isValidBST && rightResult.isValidBST && (leftResult.maxVal < root.val || undefined === leftResult.maxVal) && (rightResult.minVal > root.val || undefined === rightResult.minVal)) {
    isValidBST = true;
    maxVal = rightResult.maxVal ? rightResult.maxVal : root.val;
    minVal = leftResult.minVal ? leftResult.minVal : root.val;
  } else {
    isValidBST = false;
  }

  return {
    isValidBST,
    maxVal,
    minVal
  }
}
