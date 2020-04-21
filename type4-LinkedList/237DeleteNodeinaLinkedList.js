/**
 * https://leetcode.com/problems/delete-node-in-a-linked-list/
 * TODO: pass the next node's value to prenode.
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
  node.val = node.next.val;
  node.next = node.next.next;
};

/**
 * Test Case (已知至少 2 个节点)
 * 1. 删除第一个节点（增加 dummyNode 辅助，记得要断开 dummyNode）
 * 2. 删除最后一个节点（不存在）
 * 3. 删除中间节点
 */