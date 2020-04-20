/**
 * https://leetcode.com/problems/linked-list-cycle-ii/
 * 相遇节点到入口节点的距离的距离 == 头指针到入口节点的距离
 * 相遇节点到头节点的距离 s
 * 环长度为 r 则 2s = s + nr => s = nr
 * a + x = s
 * 推理参考 https://blog.csdn.net/willduan1/article/details/50938210
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
var detectCycle = function(head) {
  let faster = head;
  let slower = head;
  let isCircle = false;
  
  // 结束循环条件：
  /**
   * faster === null || faster.next === null 跳出循环； 存在环退出循环
   * （faster === null || slower === null 直接返回 null，可以被归纳到上一种跳出循环，直接到最后判断无环则直接返回。这样也可以跟 141 更好的对应起来。) 效率提高到了超越 98%
   */
  while (faster && faster.next) {
      faster = faster.next.next;
      slower = slower.next;
      
      if (faster === slower) {
          isCircle = true;
          break;
      }
  }
  
  if (isCircle) {
    while (faster !== head) {
      faster = faster.next;
      head = head.next;
    }
    return head;
  }

  return null;
}


var detectCycle = function(head) {
  if (!head || !head.next) return null;

  let fp = head;
  let sp = head;
  
  // 一定要用 !== null 去比较
  while (fp !== null && fp.next !== null) {
      sp = sp.next;
      fp = fp.next.next;
      
      if (fp === sp) {
          break;
      }
  }
  
  if (!fp || !fp.next) {
      return null;
  }
  
  sp = head;
  while (fp !== sp) {
      fp = fp.next;
      sp = sp.next;    
  }
  
  return sp;
}


var detectCycle = function(head) {
  if (!head || !head.next) return null;

  let slower = head;
  let faster = head.next;

  // 只有刚开始时 faster !== slower 才能用这个循环
  while (slower !== faster) {
    if (!faster || !faster.next) return null;
    slower = slower.next;
    faster = faster.next.next;
  }

  // 因为刚开始的时候 faster 多走了一步，所以这里要跟 faster.next 进行比较
  while (head !== faster.next) {
    head = head.next;
    faster = faster.next;
  }

  return head;
}