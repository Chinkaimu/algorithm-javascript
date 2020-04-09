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
    const temp = dfs(curNode, sum, 0, 0);
    console.log(temp);
    paths += temp;

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

  const leftPaths = root.left ? dfs(root.left, sum, curSum, curPaths) : 0;
  const rightPaths = root.right ? dfs(root.right, sum, curSum, curPaths) : 0;

  // TODO: add left paths and right paths
  // TOFix: the common path will add twice
  return leftPaths + rightPaths;
}

module.exports = pathSum;