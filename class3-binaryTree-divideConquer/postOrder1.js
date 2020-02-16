function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const root = new TreeNode(1)
const root1 = new TreeNode(1)
const next1 = new TreeNode(null)
const next2 = new TreeNode(2)
const next3 = new TreeNode(3)
const next4 = new TreeNode(4)
root.right = next2
next2.left = next3

root1.left = next2
root1.right = next3


/**
 * 思想：
 *    1. 后读取但先遍历的节点先存储到栈中
 *    2. 需要读取的节点也先 push 到栈中
 *    3. 循环终止条件是栈中没有剩余节点
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  if (!root || ! root instanceof TreeNode) return []
  const stack = []
  const result = []

  stack.push(root)
  while (stack.length > 0) {
    const root = stack[stack.length - 1]
    const right = root.right
    const left = root.left

    if (!left && !right) {
      result.push(stack.pop())
    }

    if (left) {
      stack.push(left)
      root.left = null
      continue
    }

    if (right) {
      stack.push(right)
      root.right = null
    }
  }

  return result
}

console.log(postorderTraversal(root))