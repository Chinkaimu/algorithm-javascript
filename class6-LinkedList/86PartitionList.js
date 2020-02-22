/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */

 // 使用 left \right 2个 dummyNode 可以简化程序
var partition = function(head, x) {
  const dummyLeft = new ListNode(0)
  let left = dummyLeft
  const dummyRight = new ListNode(0)
  let right = dummyRight

  while (head) {
    if (head.val < x) {
      left.next = head
      left = head
    } else {
      right.next = head
      right = head
    }
    head = head.next
  }

  right.next = null
  left.next = dummyRight.next
  return dummyLeft.next
};

var partition1 = function(head, x) {
  let dummyHead = new ListNode(0)
  dummyHead.next = head
  let node = dummyHead

  let pre = null
  let temp = null

  while (node && node.next) {
    if (!pre && node.next.val >= x) {
      pre = node
      node = node.next
      continue
    } 
    if (pre && node.next.val < x) {
      temp = pre.next
      pre.next = node.next
      node.next = pre.next.next
      pre.next.next = temp
      pre = pre.next
    } else {
      // 出错的地方，只有在没有交换的情况下通过 next 替换 node ，如果出现替换到前面了，那么 node.next 已经自动向后移动了
      node = node.next
    }
  }

  return dummyHead.next
};

// TC
function ListNode(val) {
  this.val = val;
  this.next = null;
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

console.log(partition(creationList([3,1,2]), 3))