/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/
 * 1-1-2-2-3-4-5-6-6-8
 * 3-4-8
 * 考虑重复在前、中、后位置
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
  if (!head || !head.next) return head

  const dummyNode = new ListNode(0)
  dummyNode.next = head
  // Important
  head = dummyNode

  // 保留 3 个位置，后面 2 个位置进行数值比较，相等的话则一直往后走到不相等。
  while (head && head.next && head.next.next) {
    if (head.next.val === head.next.next.val) {
      deleteItem = head.next.val

      // head 点不变，next 内容一步步往后移动，直到找到不等于 deleteItem 的内容，接到 head 之后
      while (head.next && head.next.val === deleteItem) {
        head.next = head.next.next
      }

    } else {
      head = head.next
    }
  }

  return dummyNode.next
};

var deleteDuplicates = function(head) {
  const dummyNode = new ListNode();
  let preNode = dummyNode;

  let curNode = head;
  let toDeleteValue;

  while (curNode !== null) {
    if (curNode.next && curNode.next.val === curNode.val) {
      toDeleteValue = curNode.val;
      // TODO: 不要直接跳到下一个的下一个，因为下下个可能是 null
      curNode = curNode.next;
      continue;
    }
    
    if (curNode.val === toDeleteValue) {
      // TODO: 如果下一个是 null 的话，要直接拼接上
      if (curNode.next === null) {
        preNode.next = null;
        break;
      }
      curNode = curNode.next;
      continue;
    }

    preNode.next = curNode;
    preNode = preNode.next;
    curNode = curNode.next;
  }

  return dummyNode.next;
};
