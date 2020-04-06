# 分治法

## 思想
* 分开处理
* 合并结果

## 场景
* 归并排序

## 核心代码
```
  const leftResult = func(left);
  const rightResult = func(right);

  merge(leftResult, rightResult);
```

## 与其他算法的区别和联系
* DFS：分治经常与二分的 DFS 联合使用
* DP：分治是从结果向前求证，DP 是从前往后推导。

## leetcode 实例
* [98. Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/) BST，二分查找树。分别求证左边和右边是否二分查找树，比较左边最大值比 root 小，右边最小值比 root 大。最底层 null 的是否返回的是 true。