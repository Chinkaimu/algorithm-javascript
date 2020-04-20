/**
 * 16:34 - 
 * solution(16:34 - 16:46 12mins):
 *    （1）每次循环列表取头拿到最小值，k 次，总个数 k * m，复杂度 O(k^2*m) O(k^3)
 *    （2）两两归并，(k/2 + k/4 + k/8 + ...) => O(k) 循环； 2 个列表合并的复杂度 2 * m  O(km)
 *           存储问题：合并以后存在哪里，list 存放待合并的数组，mergedList 存放合并好的数组。list 合并完以后通过 mergedList 赋值继续合并，直到 list.length = 1 完成
 *           结果： list 仅剩下的一条记录
 * data: head 头指针，将结果根到这里
 * coding: 16:46 - 16:59(13mins)
 * debugging: 17:00 - 17:19 (19mins) TODO:i 应该跳 2 个，不然就死循环了。
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

const ListNode = require('../utils/buildList').ListNode;
const buildList = require('../utils/buildList').buildList;
const transferArray = require('../utils/buildList').transferListToArray;

var mergeKLists = function(lists) {
  if (!lists || !lists.length) return null;

  let mergedList = [];
  while (lists.length > 1) {
    mergedList = [];
    for (let i = 0; i < lists.length;) {
      if (i === lists.length - 1) {
        mergedList.push(lists[i]);
      } else {
        mergedList.push(mergeTwoList(lists[i], lists[i + 1]));
      }
      // TODO: i 跳 2 个。
      i += 2;
    }

    lists = mergedList;
  }

  return lists[0];
};

function mergeTwoList (head1, head2) {
  if (!head1) return head2;
  if (!head2) return head1;

  const dummyHead = new ListNode();
  let preNode = dummyHead;

  while (head1 && head2) {
    if (head1.val <= head2.val) {
      preNode.next = head1;
      head1 = head1.next;
    } else {
      preNode.next = head2;
      head2 = head2.next;
    }
    preNode = preNode.next;
  }

  if (head1) {
    preNode.next = head1;
  }

  if (head2) {
    preNode.next = head2;
  }

  return dummyHead.next;
}

const list1 = buildList([1,4,5]);
const list2 = buildList([1,3,4]);
const list3 = buildList([2,5]);

console.log(transferArray(mergeKLists([list1, list2, list3])))