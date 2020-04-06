/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/
 * 1-1-2-2-3-4-5-6-6-8
 * 3-4-8
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
  const dummyNode = new ListNode();
  let preNode = dummyNode;

  let curNode = head;
  let toDeleteValue;

  while (curNode !== null) {
    if (curNode.next && curNode.next.val === curNode.val) {
      toDeleteValue = curNode.val;
      curNode = curNode.next.next;
      continue;
    }
    
    if (curNode.val === toDeleteValue) {
      curNode = curNode.next;
      continue;
    }

    preNode.next = curNode;
    preNode = preNode.next;
    curNode = curNode.next;
  }

  return dummyNode.next;
};
