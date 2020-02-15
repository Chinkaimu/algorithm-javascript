/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root || !root instanceof TreeNode) return []
  const result = []
  const queue = []

  queue.push(root)

  while (queue.length > 0) {
    const currentLayerLength = queue.length
    let currentLayerNodes = []
    // 把当前层的节点的下一层节点全部找出来插入，并且将当前层的节点push出来
    // queue 每次只存储一层的数据
    for (let i = 0; i < currentLayerLength; i++) {
      const currentNode = queue.shift()
      if (currentNode.left) {
        queue.push(currentNode.left)
      }
      if (currentNode.right) {
        queue.push(currentNode.right)
      }
      currentLayerNodes.push(currentNode.val)
    }

    result.push(currentLayerNodes)
  }

  return result
};