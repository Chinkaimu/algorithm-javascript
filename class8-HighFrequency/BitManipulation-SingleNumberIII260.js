/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
  let diff = 0
  for (let num of nums) {
    diff ^= num
  }
  diff &= -diff

  let res = [0, 0]
  for (let num of nums) {
    // 注意运算优先级
    if ((num & diff) === 0) {
      res[0] ^= num
    } else {
      res[1] ^= num
    }
  }

  return res
};