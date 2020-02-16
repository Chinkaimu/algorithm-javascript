/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 思路： 中序遍历结果递增。中序遍历思想：根节点出来的时候右节点存在则补充进来，有节点的左节点存在也需要全部补充进来
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  if (!root instanceof TreeNode) return false
  if (!root) return true

  return isInOrder(root)
};

function isInOrder (root) {
  const stack = []
  // It is used to store the result of inOrderTraversal
  const result = []

  while (root) {
    stack.push(root)
    root = root.left
  }

  let lastNode = null
  while (stack.length > 0) {
    let curNode = stack.pop()
    result.push(curNode.val)

    if (lastNode && lastNode.val >= curNode.val) {
      return false
    }
    
    let node = curNode.right
    while (node) {
      stack.push(node)
      node = node.left
    }

    lastNode = curNode
  }

  console.log(result)
  return true
}



// Test Case
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
const root = new TreeNode(4)
const next1 = new TreeNode(2)
const next2 = new TreeNode(6)
const next3 = new TreeNode(1)
const next4 = new TreeNode(3)
const next5 = new TreeNode(5)
const next6 = new TreeNode(7)

root.left = next1
root.right = next2
next1.left = next3
next1.right = next4
next2.left = next5
next2.right = next6
console.log(isInOrder(root))
