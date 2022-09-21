Source: https://leetcode.com/problems/partition-list/

## 知识点

链表的增加、删除。增加有分为尾部添加、插入添加，如果我们尽可能使用尾部添加能减少代码指针的复杂度，提高代码阅读性。

## 技巧
* 添加冗余的节点，使得首节点像普通节点一样操作，不会出现 null reference。
