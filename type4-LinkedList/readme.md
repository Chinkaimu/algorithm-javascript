# LinkedList

## 基本操作
* 复制
* 反转
* 插入
* 删除
* 合并
* 找中点
* 循环

## Leetcode 实例
* 复制
  * [138. Copy List with Random Pointer](https://leetcode.com/problems/copy-list-with-random-pointer/) 复制节点，接到原节点后面；复制接在原节点后 node.next 的 random 节点为 node 的 random 节点的 next 节点，因为 random 节点的 next 节点才是复制后的节点；拆分链表将 copy 的内容取出。
* 反转
* 删除节点
  * [83. Remove Duplicates from Sorted List](https://leetcode.com/problems/remove-duplicates-from-sorted-list/) 后一个节点的值与当前节点相同，则跳过下一个节点直接指向后一个节点。
  * [82. Remove Duplicates from Sorted List II](https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/) 需要考虑头指针就存在相同的情况，跳过所有相同的节点指向下一个节点。
* 合并
  * [2. Add Two Numbers](https://leetcode.com/problems/add-two-numbers/) 取链表数据逐个相加。
* 循环
  * [141. Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/) 快慢指针结合，存在 cycle 则快指针一定会赶上慢指针。如果遇到 null 节点，那么快指针一定不存在。
  * [142. Linked List CycleII](https://leetcode.com/problems/linked-list-cycle-ii/) 在 141 找到相遇点的基础上，head 点从开始点出发，faster 点从相遇点出发，以 1 的步伐向前走。相遇的时候即是入口。