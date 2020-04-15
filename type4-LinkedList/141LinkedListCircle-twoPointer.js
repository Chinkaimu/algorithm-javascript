/**
 * https://leetcode.com/problems/linked-list-cycle/
 * * If there is null point, then there is no cycle.
 * * If there is cycle, faster will always catch slower.
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
  let faster = head;
  let slower = head;

  // TODO: 判断  faster.next 是否为 null 要先判断 faster 是否为 null
  // There is no need to judge slower, because faster will go first.
  while (faster && faster.next) {
    faster = faster.next.next;
    slower = slower.next;

    if (slower === faster) {
      return true;
    }
  }
  
  return false;
};