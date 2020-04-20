/**
 * https://leetcode.com/problems/merge-k-sorted-lists/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  if (!lists || !lists.length) return null

  const dummy = new ListNode(0)
  let currNode = dummy
  const heads = new Array(lists.length)
  let count = 0

  for (let i = 0; i < lists.length; i++) {
    heads[i] = lists[i]
  }

  while (count < lists.length) {
    let minPos = null
    let minVal = null

    for (let i = 0; i < lists.length; i++){
      if (!heads[i]) {
        continue
      }
      // 错误：数字不能用 ！判断 ！minsPos . !0 也是 true
      if (minPos === null || (heads[i].val < minVal)) {
        minPos = i
        minVal = heads[i].val
      }
    }
    // 错误：heads[minPos] 可能为 null 或 undefined。 未通过测试用例 []、 [[]]
    if (!heads[minPos]) {
      count++
    } else {
      currNode.next = heads[minPos]
      currNode = currNode.next

      heads[minPos] = heads[minPos].next
    }
  }

  return dummy.next
};

