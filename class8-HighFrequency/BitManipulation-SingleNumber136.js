/**
 * https://leetcode.com/problems/single-number/
 * @param A: An integer array
 * @return: An integer
 */
// 思路：让相同的内容抵消，最后计算结果仅保留差异内容。
// 知识点：位运算，按位异或。（1）相同的数位或运算为 0；（2）与 0 位或为原值；（3）位或运算满足交换律和结合律。
var singleNumber = function(nums) {
  if (nums.length === 0) return null
  
  let n = nums[0]
  for (i = 1; i < nums.length; i++) {
      n = n^nums[i]
  }
  return n
};

console.log(singleNumber([1,1,2,2,3,4,4]))
