function buildList (arr, pos) {
  if (!Array.isArray(arr)) {
    throw new Error('arr is not an array!')
  }
  if (!arr || !arr.length) return null;

  const dummyNode = new ListNode();
  let preNode = dummyNode;
  let circleNode = null;

  arr.forEach((item, index) => {
    const node = new ListNode(item);
    if (pos >= 0 && pos < arr.length && index === pos) {
      circleNode = node;
    }
    preNode.next = node;
    preNode = preNode.next;
  })

  if (circleNode) {
    preNode.next = circleNode;
  }

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