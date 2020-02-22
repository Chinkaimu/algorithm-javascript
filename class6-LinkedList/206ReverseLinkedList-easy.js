/**
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
var reverseList = function(head) {
  if (!head || !head.next) return head

  let node = head.next
  let temp = null
  head.next = null

  while (node) {
    temp = node.next
    node.next = head
    head = node
    node = temp
  }
  
  return head
}


/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseListOutMemory = function(head) {
  if (!head || !head.next) return head
  const stack = []
  
  while (head !== null) {
    stack.push(head)
    head = head.next
  }

  head = stack.pop()

  let node = head
  while (stack.length > 0) {
    node.next = stack.pop()
    node = node.next
  }

  return head
};

// Testcase
function ListNode(val) {
  this.val = val;
  this.next = null;
}
const head = new ListNode(0)
const node1 = new ListNode(1)
const node2 = new ListNode(2)

head.next = node1
node1.next = node2

console.log(reverseList(head))