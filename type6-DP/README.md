# Dynamic Program

## 核心思想
* 复用上一次的数据计算出下一次的数据

## 分类
* 自底向上的动态规划：先计算出离终点更近的值。
* 自顶向下的动态规划：离终点最远的地方开始计算，一步步走到终点。

## 常见类型
* matrix DP：填表，g[x][y]
* Sequence DP：填数组，f[x]
* Two Sequences： DP
* Backpack：背包问题

## 常见算法复杂度
* O(n^2)
* n + n/2 + n/4 + ... + 1 = 2n - 1

## DP 特点
* 求以下类型之一
  * 1. 最大值或最小值
  * 2. 是/否
  * 3. 个数
* 不可以排序或者交换

## 解题步骤
* 状态 state 定义：通过小状态推断后续的状态
* 方程：如果通过前面的状态计算后续的状态
* 初始化：终点先有值/起点先有值
* 答案
* 注意点：很多时候我们需要增加条件尽快跳出循环，以降低时间复杂度避免超时

## 与贪心算法比较
* DP 是后决策，贪心算法是先决策
* DP 超时的话，可以考虑用贪心算法解决

## leetcode 例子
* OneSequence
  * [easy][55JumpGame](https://leetcode.com/problems/jump-game/submissions/) canReach[i] 表示 i 位置是否能到达（满足 2，求是否）。
  * [45JumpGameII](https://leetcode.com/problems/jump-game-ii/) minSteps[i] 表示能够最小到达的步数（满足 1，求最小值）。