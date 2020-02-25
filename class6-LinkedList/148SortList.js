/**
 * https://leetcode.com/problems/sort-list/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 1. 找中点
 * 2. 拆分
 * 3. 排序
 * 4. 合并
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
  if (!head || !head.next) return head
  // 找中点
  const pivot = findPivot(head)
  if (pivot.next === head) {
    return head
  }
  
  let temp = pivot.next
  pivot.next = null
  // 拆分
  const left = sortList(head)
  const right = sortList(temp)
  // 合并
  return mergeHealper(left, right)
}

function findPivot(head) {
  let faster = head.next
  let slower = head

  while (faster && faster.next) {
    slower = slower.next
    faster = faster.next.next
  }
  // 要使得 left 的结尾为 pivot，这样能够将其尾巴设置为 null
  return slower
}

function findPivot1(head) {
  let faster = head
  let slower = new ListNode(0)
  slower.next = head

  while(faster && faster.next) {
    slower = slower.next
    faster = faster.next.next
  }

  return slower
}

function mergeHealper (head1, head2) {
  const dummyNode = new ListNode(0)
  let preNode = dummyNode

  while (head1 && head2) {
    if (head1.val < head2.val) {
      preNode.next = head1
      head1 = head1.next
    } else {
      preNode.next = head2
      head2 = head2.next
    }
    preNode = preNode.next
  }

  if (head1) {
    preNode.next = head1
  }

  if (head2) {
    preNode.next = head2
  }

  return dummyNode.next
}

// TC
function ListNode(val) {
  this.val = val;
  this.next = null;
}

function creationList (array) {
  const head = new ListNode(array[0])
  let node = head

  for (let i = 1; i < array.length; i++) {
    node.next = new ListNode(array[i])
    node = node.next
  }

  return head
}

function transferListToArray (head) {
  const array = []
  while (head) {
    array.push(head.val)
    head = head.next
  }

  return array
}

const head1 = creationList([3, 4, 1])
const head2 = creationList([-1, 5, 3, 4, 0])

console.log(transferListToArray(sortList(head1)))
console.log(transferListToArray(sortList(head2)))