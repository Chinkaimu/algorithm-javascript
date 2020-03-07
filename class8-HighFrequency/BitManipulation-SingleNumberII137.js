/**
 * https://leetcode.com/problems/single-number-ii/
 * @param {number[]} nums
 * @return {number}
 */
// 参考：https://www.cnblogs.com/grandyang/p/4263927.html
var singleNumber = function(nums) {
  let res = 0
  for (let i = 0; i < 32; i++) {
    let sum = 0
    for (let j = 0; j < nums.length; j++) {
      sum += (nums[j] >> i) & 1
    }
    res |= (sum % 3) << i
  }
  return res
}

var singleNumber1 = function(nums) {
  let a = 0, b = 0;
 nums.forEach(c => {
     [a,b] = [(~a & b & c) | (a & ~b & ~c), (~a & ~b & c) | (~a & b & ~c)]; 
 })
 return b;
};

var singleNumber2 = function(nums) {
  let a = 0, b = 0;
  for (let i = 0; i < nums.length; i++) {
    b = (b ^ nums[i]) & ~a
    a = (a ^ nums[i]) & ~b
  }
  return b
}