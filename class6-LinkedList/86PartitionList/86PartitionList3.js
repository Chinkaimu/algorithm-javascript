 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * 
 * https://leetcode.com/problems/partition-list/
 */
 var partition = function(head, x) {
    const dummyleft = new ListNode(0)
    let leftEnd = dummyleft
    const dummyright = new ListNode(0)
    let rightEnd = dummyright
  
    while (head) {
      if (head.val < x) {
        leftEnd.next = head
        leftEnd = head
      } else {
        rightEnd.next = head
        rightEnd = head
      }
      head = head.next
    }
  
    rightEnd.next = null
    leftEnd.next = dummyright.next
    return dummyleft.next
  };