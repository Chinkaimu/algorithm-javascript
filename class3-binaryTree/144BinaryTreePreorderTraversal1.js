// https://leetcode.com/problems/binary-tree-preorder-traversal/
/**
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
  if (!root || !root instanceof TreeNode) return []

  const result = []
  const preRootStack = []

  while (1) {
    // 右边没有节点的情况下，push 出来的前置节点会走到这里
    root.val&&result.push(root.val)

    // 当左边遍历到最深处时，将存储的节点一个个push出来，直接找右边节点
    if (root.left === null && root.right === null) {
      if (preRootStack.length > 0) {
        root = preRootStack.pop()
        root.left = null
        root.val = null
      } else {
        return result
      }
    }

    // 左侧的需要回溯，将上一个节点存储到 stack 中
    if (root.left !== null) {
      preRootStack.push(root)
      root = root.left
      // 左侧分支没走完，不走右侧，直接循环
      continue
    }

    if (root.right !== null) {
      root = root.right
    }
  }
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
