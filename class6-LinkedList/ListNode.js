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
