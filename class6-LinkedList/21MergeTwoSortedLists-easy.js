/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if (!l1) return l2
  if (!l2) return l1

  const dummyHead = new ListNode(0)
  let pre = dummyHead

  while(l1 && l2) {
    if (l1.val <= l2.val) {
      pre.next = l1
      pre = l1
      l1 = l1.next
    } else {
      pre.next = l2
      pre = l2
      l2 = l2.next
    }
  }

  if (l1) {
    pre.next = l1
  }

  if (l2) {
    pre.next = l2
  }

  return dummyHead.next
};

var mergeTwoLists1 = function(l1, l2) {
  if (!l1) return l2
  if (!l2) return l1

  const head = new ListNode(0)
  let pre = head
  head.next = l1

  let temp = null
  let start = null

  while(l1 && l2) {
    if (l2.val <= l1.val) {
      start = l2
      while(l2.next && l2.next.val <= l1.val) {
        l2 = l2.next
      }
      pre.next = start
      pre = l1
      temp = l2.next
      l2.next = l1
  
      l1 = l1.next
      l2 = temp
    } else {
      pre = l1
      l1 = l1.next
    }
  }

  if (l2) {
    pre.next = l2
  }

  return head.next
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * [1]
 * [1,5,6]
 */