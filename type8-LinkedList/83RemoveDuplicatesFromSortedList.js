/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list/
 * 1 -> 1 -> 2
 * 第 2 个 1 跟前面相同，则指针往后
 * 
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
var deleteDuplicates = function(head) {
  if (!head || !head.next) return null;

  let node = head;

  while (node.next !== null) {
    if (node.next.val === node.val) {
      // 跳过一个，指向下一个
      node.next = node.next.next;
    } else {
      node = node.next;
    }
  }

  return head;
}