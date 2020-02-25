/**
 * https://leetcode.com/problems/reorder-list/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 1. 找中点
 * 2. 翻转右边部分
 * 3. 合并
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  if (!head || !head.next) return head

  const pivot = findPivot(head)
  const temp = pivot.next
  pivot.next = null
  const right = reverseList(temp)
  return merge(head, right)
};

function findPivot (head) {
  let slower = head
  let faster = head.next

  while (faster && faster.next) {
    slower = slower.next
    faster = faster.next.next
  }

  return slower
}

function reverseList (head) {
  let newHead = null

  while (head) {
    let temp = head.next
    head.next = newHead
    newHead = head
    head = temp
  }

  return newHead
}

function merge (head0, head1) {
  const dummy = new ListNode(0)
  let preHead = dummy
  let listNum = 0

  while (head0 && head1) {
    if (listNum === 0) {
      preHead.next = head0
      head0 = head0.next
      listNum = 1
    } else {
      preHead.next = head1
      head1 = head1.next
      listNum = 0
    }
    preHead = preHead.next
  }

  if (head0) {
    preHead.next = head0
  }

  if (head1) {
    preHead.next = head1
  }

  return dummy.next
}