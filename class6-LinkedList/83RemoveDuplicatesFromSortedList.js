/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var deleteDuplicatesImproved = function(head) { 
  if (!head || !head.next) return head

  let node = head

  while (node.next !== null) {
    if (node.val === node.next.val ) {
      node.next = node.next.next
    } else {
      node = node.next
    }
  }

  return head
}

var deleteDuplicates = function(head) {
  if (!head || !head.next) return head

  let fast = head.next
  let slow = head

  
  while (fast !== null) {
    while (fast.val === slow.val) {
      fast = fast.next
      slow.next = fast
      // Important: 可能 fast 走到最后了
      if (fast === null) {
        return head
      }
    }
    slow = fast
    fast = fast.next
  }

  return head
};

// Testcase
function ListNode(val) {
  this.val = val;
  this.next = null;
}
const head = new ListNode(1)
const node1 = new ListNode(1)
const node2 = new ListNode(2)

head.next = node1
node1.next = node2

console.log(deleteDuplicates(head))