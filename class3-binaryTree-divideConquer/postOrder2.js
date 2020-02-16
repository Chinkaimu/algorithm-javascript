/**
 * 思想：
 *    1. 后读取但先遍历的节点先存储到栈中，一直要保存到第一个读取的节点位置
 *    2. 需要读取的节点也先 push 到栈中再 pop 出来，替换下一个需要读取的节点
 *    3. 外循环终止条件是栈中没有剩余节点。 内部循环，右边节点需要将左节点全部 push 到栈中读取
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  if (!root || ! root instanceof TreeNode) return []
  const stack = []
  const result = []

  while (root) {
    stack.push(root)
    root = root.left
  }

  let lastNode = null
  while (stack.length > 0) {
    let node = stack[stack.length - 1]
    if (node.right&& node.right !== lastNode) {
      node = node.right
      while (node) {
        stack.push(node)
        node = node.left
      }
    }

    lastNode = stack.pop()
    result.push(lastNode.val)
  }

  return result
}


//Test case
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const root = new TreeNode(0)
const next1 = new TreeNode(1)
const next2 = new TreeNode(2)
const next3 = new TreeNode(3)
const next4 = new TreeNode(4)
const next5 = new TreeNode(5)
const next6 = new TreeNode(6)

root.left = next1
root.right = next2
next1.left = next3
next1.right = next4
next2.left = next5
next2.right = next6

console.log(postorderTraversal(root))