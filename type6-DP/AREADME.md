# Dynamic Program

## 核心思想
* 复用上一次的数据计算出下一次的数据

## 分类
* 自底向上的动态规划：先计算出离终点更近的值。
* 自顶向下的动态规划：离终点最远的地方开始计算，一步步走到终点。

## 常见类型(以原始数据类型分类)
* Sequence DP：一纬数组处理，f[x]
* Two Sequences： 二维数组处理 g[x][y]
* matrix DP：二维数组处理，g[x][y]
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

## 参考模板代码
```
  var jump = function(nums) {
    // 定义和初始化
    result = [0];

    // 外循环，长度
    for (let i = 1; i < nums.length; i++) {
      for (let j = 0; j < i; j++) {
        // 方程：i 位置的结果通过前面 j 位置经过 f 计算得到
        result[i] = f(result[j])
      }
    }

    // 结果
    return result[nums.length - 1];
  }
```

## 与贪心算法比较
* DP 是后决策，贪心算法是先决策
* DP 超时的话，可以考虑用贪心算法解决。例如 [55JumpGame](https://leetcode.com/problems/jump-game/submissions/)，[45JumpGameII](https://leetcode.com/problems/jump-game-ii/)

## leetcode 例子
* OneSequence
  * [55JumpGame](https://leetcode.com/problems/jump-game/submissions/) canReach[i] 表示 i 位置是否能到达（定义，满足 2，求是否）, canReach[i] = true（方程）, 如果通过前面是否存在，即 j + nums[j] >= i。
  * [45JumpGameII](https://leetcode.com/problems/jump-game-ii/) minSteps[i] 表示能够最小到达的步数（定义，满足 1，求最小值）, nums[i] = nums[j] + 1（方程）, 如果通过能达到 j 的 i 点，即 j + nums[j] > i。
  * [132PalindromePartitioningII](https://leetcode.com/problems/palindrome-partitioning-ii/) p[i] 表示 i 位置最少个数的回文串，分割数是 p[i] - 1（定义，满足 1，求最小值）。p[i] = p[j] + 1（方程）, 如果 （j + 1） -> i 是回文串。注意：这里判断回文串还可以增加一个 matrix DP。
  * [70ClimbingStairs](https://leetcode.com/problems/climbing-stairs/) ways[i] 表示到达 i 步可以有的方式（定义，满足条件3，求个数），ways[i] = ways[i - 2] + ways[i - 1] (方程)，即 ways[i] 是 ways[i - 1] 一步上来 或者 ways[i - 2] 跨 2 步上来。只用到前 2 步的数据，所以可以不用数组，用 2 个变量保存即可。
  * [300LongestIncreasingSubsequence](https://leetcode.com/problems/longest-increasing-subsequence/submissions/) lens[i] 表示 i 位置最长的增长子序列， lens[i] = nums[j] + 1， 如果前面找到 j 使得 nums[j] < nums[i]。方程思想同 45 等，maxLen 记录最大值，用于输出。这一点同下面的 120。
* Matrix
  * [62UniquePaths](https://leetcode.com/problems/unique-paths/) paths[i][j] 表示能到达[i,j]的路径数目（满足 3，求个数）, paths[i][j] = paths[i - 1][j] + paths[i][j - 1]，与 70 同理，有 2 条路可以过来，每条路算作 1。
  * [63UniquePaths](https://leetcode.com/problems/unique-paths-ii/) 在 62 的基础上增加了障碍，那么求值的方程需要做一个判断是否能到达。
  * [64MinimumPathSum](https://leetcode.com/problems/minimum-path-sum/) miniSum[i][j] 表示到达[i, j]路径和的最小值（满足 1，求最小值），minSum[i][j] = Math.min(minSum[i - 1][j], minSum[i][j - 1]) + value。
  * [120Triangle](https://leetcode.com/problems/triangle/) sums[i][j] 表示到达[i, j]路径和的最小值（满足 1，求最小值），min[i][j] = Math.min(sums[i - 1][y], sums[i - 1][y - 1]) + value。需要注意的是(1) 判断节点是否存在；（2）返回值是最后一行的最小值，而不是最后一个值；（3）undefined 判断通过 === 判断，不要偷懒。其他解法：Divide&Conquer
  * [72EditDistance](https://leetcode.com/problems/edit-distance/) minEdit[x][y] 表示 word1 的 0 - (x - 1) 改为 word2 的 0 -> (y - 1) 所需要进行的最小修改。 思想不变，主要在于方程推导。考虑一下 x - 1, y - 1, x, y 的组合。需要注意的是，x, y 在 words 中坐标要减 1。
* TwoSequences (OneSequence * 2)
  * [1143](https://leetcode.com/problems/longest-common-subsequence/submissions/) result[x][y] 表示从 text1 的 0 - x 与 text2 的 0 - y 的最长匹配。result[x][y] = text1[x] === text2[y] ? result[x - 1][y - 1] + 1 : Math.max(result[x - 1][y], result[x][y - 1])。