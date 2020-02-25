/**
 * https://leetcode.com/problems/linked-list-cycle-ii/
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
var detectCycle = function(head) {
  if (!head || !head.next) return null
  let slower = head
  let faster = head.next

  while (true) {
    if (slower === faster) {
      slower = head
      while (slower) {
        if (slower === faster.next) {
          return slower
        }
        slower = slower.next
        faster = faster.next
      }
    }

    if (slower === null || faster === null || faster.next === null) {
      return null
    }

    slower = slower.next
    faster = faster.next.next
  }
};

var detectCycle = function(head) {
  if (!head || !head.next) return null
  let slower = head
  let faster = head.next

  while (slower !== faster) {
    if (!faster || !faster.next) {
      return null
    }
    slower = slower.next
    faster = faster.next.next
  }

  while (head !== faster.next) {
    head = head.next
    faster = faster.next
  }
  return head
};