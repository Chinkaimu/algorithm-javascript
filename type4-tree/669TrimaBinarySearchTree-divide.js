/**
 * https://leetcode.com/problems/trim-a-binary-search-tree/
 * complexity: 1 traversal
 * Definition for a binary tree node.
 * 
 * trim left and trim right
 * 
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */
var trimBST = function(root, L, R) {
  if (L > R) return;
  if (root.val < L) {
    return trimBST(root.right, L, R);
  }
  if (root.val > R) {
    return trimBST(root.left, L, R);
  }

  if (root.val === L) {
    root.left = null;
  } else if (root.val === R) {
    root.right = null;
  }
  trimLeft(root, L);
  trimRight(root, R);

  return root;
};

function trimLeft(root, L) {
  const leftNode = root.left;

  if (!leftNode) return;

  if (leftNode.val === L) {
    leftNode.left = null;
    // leftNode.right = null;
    return;
  } else if (leftNode.val > L) {
    // continue to find next left until leftNode.val === L
    return trimLeft(leftNode, L);
  } else if (leftNode.val < L) {
    // append the bigger Node(right of the leftNode) to root
    root.left = leftNode.right;
    return trimLeft(root, L);
  }
}

function trimRight(root, R) {
  const rightNode = root.right;
  if (!rightNode) return;

  if (rightNode.val === R) {
    rightNode.right = null;
    return;
  } else if (rightNode.val < R) {
    // continue to find next right until rightNode.val === R
    return trimRight(rightNode, R);
  } else if (rightNode.val > R) {
    // append the left of rightNode to the root
    root.right = rightNode.left;
    return trimRight(root, R);
  }
}

/**
 * Failed Test Case
 *  1. L = R = root.val
 *  2. L, R in one side
 *     (1) in one side of subtree
 *  3. L, R in two side
 *     (1) in two side of subtree
 */

