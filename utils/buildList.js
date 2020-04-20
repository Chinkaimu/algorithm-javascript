function buildList (arr) {
  if (!arr || !arr.length) return null;

  const dummyNode = new ListNode();
  let preNode = dummyNode;

  arr.forEach(item => {
    preNode.next = new ListNode(item);
    preNode = preNode.next;
  })

  return dummyNode.next;
}

function ListNode (val) {
  this.val = val;
  this.next = null;
}

function transferListToArray (head) {
  const array = []
  while (head) {
    array.push(head.val)
    head = head.next
  }

  return array
}

module.exports = {
  ListNode,
  buildList,
  transferListToArray
};