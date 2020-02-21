/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/
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

  while (head && head.next && head.next.next) {
    if (head.next.val === head.next.next.val) {
      deleteItem = head.next.val

      // head 点不变，next 内容一步步往后移动，直到找到不等于 deleteItem 的内容，接到 head 之后
      while (head.next && head.next.val === deleteItem) {
        head.next = head.next.next
      }

    } else {
      // Error: 如果没走到上面相等的条件，那么这里的 nextNode 永远不会变化
      head = head.next
    }
  }

  return dummyNode.next
};


var deleteDuplicatesPast = function(head) {
  if (!head || !head.next) return head

  let deleteItem = null

  while (head && head.next) {
    if (head.val === head.next.val) {
      deleteItem = head.val
      while (head && head.val === deleteItem) {
        head = head.next
      }
    } else {
      break
    }
  }

  if (!head) {
    return head
  }

  let slow = head
  let fast = head.next && head.next.next

  while (fast) {
    if (slow.next.val !== fast.val) {
      slow = slow.next
      fast = fast.next
      continue
    }

    while (fast && slow.next.val === fast.val) {
      fast = fast.next
    }
    slow.next = fast
    if (!fast) {
      break
    }
    fast = fast.next
  }

  return head
};


/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicatesWrong = function(head) {
  if (!head || !head.next) return head

  let deleteItem = null

  // 正确
  while (head && head.next) {
    if (head.val === head.next.val) {
      deleteItem = head.val
      while (head && head.val === deleteItem) {
        head = head.next
      }
    } else {
      break
    }
  }

  let node = head
  let nextNode = node.next

  while (node && nextNode && nextNode.next) {
    if (nextNode.val === nextNode.next.val) {
      deleteItem = nextNode.val
      // 不用多写这一步操作，交给循环
      nextNode = node.next.next.next
      while (nextNode && nextNode.val === deleteItem) {
        nextNode = nextNode.next
      }

    } else {
      // Error: 如果没走到上面相等的条件，那么这里的 nextNode 永远不会变化
      // 不要轻易重新定义变量使用
      node = nextNode
    }
  }

  return head
};

/**
 * TC
 * [1,1,2,3]
 * [1,1,1,2,3]
 * [1,2,2,2,3]
 * [1,2,2,3,4,4,4,4]
 * [1,2]
 * [1,1]
 */