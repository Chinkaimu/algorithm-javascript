/**
 * https://leetcode.com/problems/linked-list-cycle/
 * * If there is null point, then there is no cycle.
 * * If there is cycle, faster will always catch slower.
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  let faster = head;
  let slower = head;

  // TODO: 判断  faster.next 是否为 null 要先判断 faster 是否为 null
  // There is no need to judge slower, because faster will go first.
  while (faster && faster.next) {
    faster = faster.next.next;
    slower = slower.next;

    if (slower === faster) {
      return true;
    }
  }
  
  return false;
};

/**
 * TestCase: 
 * 基于可能影响结果的变量 —— 结果： 有环、无环、环的位置在 0 在末，特别考虑边界值、特殊值
 * 考虑代码的写法，faster 跳 2 步
 * 
 * 列出所有的 case，再去删除
 * 0. 测基本功能是否正常，搞一个稍微不那么特别的用例，如[1，2，3，4] 环向 2
 * 1. 无环：null 空指针
 * 2. 无环： 1 个节点
 * 3. 有环： 1 个节点
 * 4. 无环： 2 个节点
 * 4. 有环： 2 个节点
 * 5. 环的位置在 0
 * 6. 环的位置在末尾（自己）
 */