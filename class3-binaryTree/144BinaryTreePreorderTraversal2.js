// https://leetcode.com/problems/binary-tree-preorder-traversal/
/**
 * 思路：通过 stack 存放待读取的节点，当根节点 push 出来后将它的子节点先右后左 push 进去，直到 stack 中没有需要读取的节点
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
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
next2.left = next3
root.right = next2

root1.left = next2
root1.right = next3
next2.left = next4


/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  const stack = []
  const preorder = []
  if (!root || !root instanceof TreeNode) return preorder

  stack.push(root)
  while(stack.length > 0) {
    root = stack.pop()
    preorder.push(root.val)

    if (root.right !== null) {
      stack.push(root.right)
    }

    if (root.left !== null) {
      stack.push(root.left)
    }
  }

  return preorder
}

// console.log(preorderTraversal(root))
console.log(preorderTraversal(root1))
/**
 * test case
 * [] => []
 * [1,2,3,4] => [1,2,4,3] 第一次测试用例失败
 * [1,2,3,4,5,6] => [1,2,4,5,3,6]
 * [1,null,2,3] => [1,2,3]
 */