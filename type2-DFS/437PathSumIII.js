/**
 * https://leetcode.com/problems/path-sum-iii/
 * 
 * BFS + DFS + Divide&Conquer
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
    paths += dfs(curNode, sum, 0, 0);

    curNode.left && queue.push(curNode.left);
    curNode.right && queue.push(curNode.right);
  }

  return paths;
}

function dfs (root, sum, subTotal) {
  // 循环终止的条件
  if (!root) return 0;

  const curPath = root.val + subTotal === sum ? 1 : 0;

  const leftPaths = dfs(root.left, sum, root.val + subTotal);
  const rightPaths = dfs(root.right, sum, root.val + subTotal);

  return curPath + leftPaths + rightPaths;
}

function dfs1 (root, sum, curSum, curPaths) {
  curSum += root.val;
  if (curSum === sum) {
    curPaths++;
  }

  if (!root.left && !root.right) {
    return curPaths;
  }

  const leftPaths = root.left ? dfs(root.left, sum, curSum, curPaths) : 0;
  // TODO:avoid the common path will add twice; there should start with 0 path while there is a left node
  // Optional chaining has higher priority to Logical Operator
  const justedPaths = root.left ? 0 : curPaths;
  const rightPaths = root.right ? dfs(root.right, sum, curSum, justedPaths) : 0;

  // TODO: It's important to return. Add left paths and right paths.
  return leftPaths + rightPaths;
}

module.exports = pathSum;