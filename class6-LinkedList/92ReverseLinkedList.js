/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  if (!head || (n - m < 1)) return head

  let normalEnd = null
  let start = null
  let tempPre = null
  let temp = null
  let step = 1

  let node = head

  while (node) {
    if (step === m - 1) {
      normalEnd = node
    }
    if (step === m) {
      start = node
      tempPre = node
    }
    if (step > m && step < n) {
      temp = node.next
      node.next = tempPre
      tempPre = node
      node = temp
      step++
      continue
    }
    if (step === n) {
      start.next = node.next
      node.next = tempPre
      tempPre = node
      normalEnd && (normalEnd.next = node)
      break
    }
    node = node.next
    step++
  }

  // 从头开始翻转
  if (m === 1) {
    head = tempPre
  }

  return head
};