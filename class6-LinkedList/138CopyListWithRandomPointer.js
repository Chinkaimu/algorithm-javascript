/**
 * https://leetcode.com/problems/copy-list-with-random-pointer/
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * 复制点，和复制边分开
 * 拆分列表
 * 优化 ——> 不同功能分函数
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  if (!head) return null

  let node = head

  // 复制点，接到原点后面
  while (node) {
    let copyNode = new Node(node.val, node.next, null)
    node.next = copyNode
    node = copyNode.next
  }

  // 复制边
  node = head
  while (node) {
    node.next.random = node.random === null ? null : node.random.next
    node = node.next.next
  }

  // 拆分
  let node = head
  let dummyCopy = new Node(0, null)
  let preCopy = dummyCopy
  while (node) {
    preCopy.next = node.next
    preCopy = node.next

    let temp = node.next.next
    node.next = temp
    node = temp
  }
  preCopy.next = null

  return dummyCopy.next
};
