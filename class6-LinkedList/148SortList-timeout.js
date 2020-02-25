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
var sortList = function(head) {
  if (!head || !head.next) return head
  const preHead = new ListNode(0)
  preHead.next = head

  sortHelper(preHead)

  return preHead.next
};

function sortHelper (preHead) {
  let head = preHead.next
  const pivot = head
  let node = head
  let sorted = true

  while (node && node.next) {
    if (node.val > node.next.val) {
      sorted = false
      break
    }
    node = node.next
  }

  node = head
  if (!sorted) {
    while (node && node.next) {
      if (node.next.val < pivot.val) {
        let opNode = node.next
        node.next = opNode.next
        preHead.next = opNode
        opNode.next = head
        head = opNode
      }
      node = node.next
    }
  } else {
    return
  }

  pivot.next && sortHelper(pivot)
  sortHelper(preHead)
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