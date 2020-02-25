/**
 * https://leetcode.com/problems/linked-list-cycle/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (!head) return false
  let slower = head
  let faster = head.next

  while (true) {
    if (slower === faster) {
      return true
    }
    if (faster === null || faster.next === null) {
      return false
    }

    faster = faster.next.next
    slower = slower.next
  }
};