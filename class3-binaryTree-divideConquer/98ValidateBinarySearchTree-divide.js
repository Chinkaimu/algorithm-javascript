/**
 * https://leetcode.com/problems/validate-binary-search-tree/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 思路： 分治法，求出左右子树的最大值和最小值
 * 关键点：节点存在才去比较，节点不存在则不比较，默认为true
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  if (!root instanceof TreeNode) return false
  if (!root) return true

  const result = validBSTHelper(root)
  return result.isBST
};

function validBSTHelper (root) {
  const left = root.left
  const right = root.right
  let maxVal = root.val
  let minVal = root.val
  let leftValid
  let rightValid

  if (!left) {
    leftValid = true
  } else {
    const bstObj = validBSTHelper(left)
    leftValid = bstObj.isBST && (bstObj.maxVal < root.val)
    minVal = Math.min(bstObj.minVal, left.val)
  }

  if (!right) {
    rightValid = true
  } else {
    const bstObj = validBSTHelper(right)
    rightValid = bstObj.isBST && (bstObj.minVal > root.val)
    maxVal = Math.max(bstObj.maxVal, right.val)
  }

  if (leftValid && rightValid) {
    return {
      isBST: true,
      maxVal,
      minVal
    }
  } else {
    return {
      isBST: false
    }
  }
}