/**
* Definition for singly-linked list.
* function ListNode(val, next) {
*     this.val = (val===undefined ? 0 : val)
*     this.next = (next===undefined ? null : next)
* }
*/
/**
* @param {ListNode} head
* @param {number} x
* @return {ListNode}
*/
var partition = function(head, x) {
  var dummyHead = new ListNode(0);
  dummyHead.next = head;
  
  var preNode = dummyHead;
  var curNode = head;
  
  var greaterHead = null, greaterEnd = null;
  
  while (curNode != null) {
      if (curNode.val >= x) {
          // Preserve the preNode and link it to the next node.
          // Move out the curNode to be a single node.
          preNode.next = curNode.next;
          curNode.next = null;                                                                                                                                                                                                                                                                                                                                                                                   if (greaterHead == null) {
              greaterHead = curNode;
              greaterEnd = curNode;
          } else {
              // Append the single node and move the end pointer of greater list.
              greaterEnd.next = curNode;
              greaterEnd = greaterEnd.next;
          }            
          
        } else {
            preNode = preNode.next;
        }
      
        curNode = preNode.next;
  }



  preNode.next = greaterHead;
      
  return dummyHead.next;
};