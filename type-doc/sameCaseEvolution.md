## Single Number --> Single NumberII --> Single NumberII
### 136 Single Number
* 思路：让相同的`内容抵消`，最后计算结果仅保留差异内容。通过二进制异或运算完成只有在不想等的情况下才会被保留 1。
* 主要知识点位运算，按位异或也是不进位加法。
  * 相同的数位或运算为 0；
  * 与 0 位或为原值；
  * 位或运算满足交换律和结合律。

## 127 Single NumberII
* 思路：同 136，要让相同的`内容抵消`，差异内容保留。三进制不进位加法。

## Single NumberIII
* 思路：也是需要抵消。但是由于存在 2 个不同的位置，需要将这个问题先转化成 Single Number 的问题。

