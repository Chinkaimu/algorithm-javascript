/**
 * https://leetcode.com/problems/path-sum-iii/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
const pathSum = (root, sum) => {
  if (!root) return 0;

  const queue = [root];
  let paths = 0;

  let curNode;
  while (queue.length > 0) {
    curNode = queue.shift();
    paths += dfs(root, sum, 0, 0);

    curNode.left && queue.push(curNode.left);
    curNode.right && queue.push(curNode.right);
  }

  return paths;
}

function dfs (root, sum, curSum, curPaths) {
  curSum += root.val;
  (curSum === sum) && curPaths++;

  if (!root.left && !root.right) {
    return curPaths;
  }

  root.left && dfs(root.left, sum, curSum, curPaths);
  root.right && dfs(root.right, sum, curSum, curPaths);
}

module.exports = pathSum;