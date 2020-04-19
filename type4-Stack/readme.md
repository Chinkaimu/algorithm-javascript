# 栈

## 核心思想
* 把栈顶内容取出，计算后 push 入需要入栈的内容（可能包括本身），然后一个个取出，符合条件的进行计算。

## Leetcode 实例
* [84.Largest Rectangle Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram/) 将前面的高度用后面的高度去代替，修改 index 值。数组前后增加 0 高度做辅助。
* [94.Binary Tree Inorder Traversal](https://leetcode.com/problems/binary-tree-inorder-traversal/) stack 存储根节点，判断栈顶，left 不存在则出栈进结果；再处理 right。
* [155. Min Stack](https://leetcode.com/problems/min-stack/) 使用变量 min 记录到本节点位置的最小内容。