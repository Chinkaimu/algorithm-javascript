# 双指针

## 主要思想
* 快慢指针之间的区域作为结果，移动快慢指针得到下一次结果与前面的结果进行比较

## 类别
* 快慢指针
* 左右区间指针

## 解题步骤
* 指针定义
* 指针移动的条件

## Leetcode 实例
* 快慢指针
  * [209. Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/) 其他解法：二分搜索。
* 左右区间指针
  * [167. Two Sum II - Input array is sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/) 左右指针 i, j。当和小于 target，则 i 往后走 i++，和小于 target 则 j 往前走 j--。算法复杂度：O(n)。
  * [159. 3 sum](https://leetcode.com/problems/3sum/) 先取出负数，负数的右边部分进行 2 sum 类似指针的前后移动。需要注意的是，（1）考虑 0 的情况，（2）找到答案也需要继续移动指针往下找；（3）需要去重。算法复杂度：O(n^2)。
  * [16. 3Sum Closest](https://leetcode.com/problems/3sum-closest/) 与 159 不同的是第一个数取值范围是 0 -> length-2。算法复杂度：O(n^2)。