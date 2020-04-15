/**
 * https://leetcode.com/problems/add-two-numbers/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 测试用例要考虑全面，例如最后以为只剩得 carry
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const dummyNode = new ListNode();
  let preNode = dummyNode;

  let sum = 0;
  let currentVal = 0;
  let carry = 0;
  let currentNode = null;
  while (l1 || l2) {
    if (l1 && l2) {
      sum = l1.val + l2.val + carry;
    } else if (!l1 && l2) {
      sum = l2.val + carry;
    } else if (l1 && !l2) {
      sum = l1.val + carry;
    }
    currentVal = sum%10;
    carry = Math.floor(sum/10);

    currentNode = new ListNode(currentVal);
    preNode.next = currentNode;
    preNode = preNode.next;

    // TODO: 需要判空
    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
  }

  // TODO: 考虑最后还有一个进位。
  if (carry) {
    preNode.next = new ListNode(carry);
  }

  return dummyNode.next;
};