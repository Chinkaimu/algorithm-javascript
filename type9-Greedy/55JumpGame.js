/**
 * TODO: 0405 to repeat again
 * https://leetcode.com/problems/jump-game/
 * @param {number[]} nums
 * @return {boolean}
 */
// 不要双重循环 --- 每一个点能到达的最远
var canJump = function(nums) {
  let farest = nums[0];

  let i = 0;
  // 没有超过可到达最远地址，就可以继续往下走。
  while (i <= farest) {
    if (farest >= nums.length - 1) {
      return true;
    }

    farest = Math.max(nums[i] + i, farest);
    i++;
  }

  // 加减法优先级高于比较运算符，但是加个括号更清晰
  return farest >= (nums.length - 1) ? true : false;
}