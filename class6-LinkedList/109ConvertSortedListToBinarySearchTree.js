/**
 * https://leetcode.com/problems/convert-sorted-list-to-binary-search-tr
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
  if (!head) return null
  // 错误点 important：要返回 TreeNode
  if (!head.next) return new TreeNode(head.val)

  const pivot = findPivot(head)
  let temp = pivot.next
  pivot.next = null
  const root = new TreeNode(pivot.val)

  const left = sortedListToBST(head)
  const right = temp === null ? null : sortedListToBST(temp)
  root.left = left
  root.right = right

  return root
};

// important: 重点需要是偏后面的点，并且好要记录前面一个点，可以将前后子串断开
function findPivot (head) {
  let slower = head
  let preSlower = new ListNode(0)
  preSlower.next = slower

  let faster = head

  while (faster && faster.next) {
    preSlower = preSlower.next
    slower = slower.next
    faster = faster.next.next
  }

  preSlower.next = null
  return slower
}

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function creationList (array) {
  const head = new ListNode(array[0])
  let node = head

  for (let i = 1; i < array.length; i++) {
    node.next = new ListNode(array[i])
    node = node.next
  }

  return head
}

const tree = sortedListToBST(creationList([0,1,2,3,4,5,6,7,8]))
// console.log(findPivot(creationList([-10,-3,0,5,9])))
// console.log(findPivot(creationList([5, 6, 7, 8])))

