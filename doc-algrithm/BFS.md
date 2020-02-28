# 广度优先搜索（Breadth-First Search）
* 使用场景
  * 逐层组装结果
  * 分层查找匹配内容

## 具体例子
* 求子集 _ 逐层组装结果
1. [Subsets](https://leetcode.com/problems/subsets/) 每一个节点都是结果：第一层只有 0 个元素，逐层从给定的数组中取出元素添加，每个叶子节点内容添加到结果数组，得到最终结果。查看[代码](https://github.com/zhihuibaobao/algorithm-javascript/blob/master/class1-introduce/78Subsets.js)
2. [Subsets II](https://leetcode.com/problems/subsets-ii/) 每一个节点都是结果：给定结合内容排序，然后在上题 Subsets 的基础上增加筛选条件，不能同前面的元素一样。查看[代码](https://github.com/zhihuibaobao/algorithm-javascript/blob/master/class1-introduce/90Subsets.js)
3. [Letter Case Permutation](https://leetcode.com/problems/letter-case-permutation/) 叶子节点是结果：从第一个元素开始添加结果，如果遇到字母则进行大写字母转换，小写字母转换（同时都做，因为大写做转大写操作依然是大写，小写转小写操作依然是小写，不会有影响），然后再添加后面元素。
经历了一个多余复杂的代码过程，时间效率和代码都差 1 倍：
第 1 题是每层的变化是集合中元素个数，本题变为修改的元素个树，顶层修改元素个数为 0，往下逐层增加 1。规则同第 2 题，第 2 题只能添加后面的元素，本题只能修改在前面已更改元素后面的字母。有个坑跟前面 2 题是有差别的：
  * 其实前面的分析是不对的，这里有个坑就是题目给的集合顺序，字母是从后往前修改的，所以循环需要用倒叙，只能修改上一次修改过位置的前面位置。
  * 数据顺序是一层一层读的，需要一层一层往上返回结果。当层的结果拿到，下一层的结果拿到，然后两者合并进行返回。
教训：只管变化的内容就好，不变化的内容传来传去费劲儿。