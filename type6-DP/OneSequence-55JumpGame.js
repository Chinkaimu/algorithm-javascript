/**
 * TODO: 0405 to repeat again
 * https://leetcode.com/problems/jump-game/
 * @param {number[]} nums
 * @return {boolean}
 */
// 不要双重循环
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


 // 双重循环增加跳出条件，减少循环次数
var canJump2 = function(nums) {
  // 定义 + 初始化，canReach 能到达的点
  const canReach = [true];

  for (let i = 0; i < nums.length; i++) {
    if (canReach[i]) {
      // 需要从 0 开始，因为数字可能只有 1 个值
      for (let j = 0; j <= nums[i]; j++) {
        if ((i + j) >= (nums.length - 1)) {
          return true;
        }
        canReach[i + j] = true
      }
    }
  }

  return false;
};

console.log(canJump([0]))

// 双重循环
var canJump1 = function(nums) {
  // 定义 + 初始化，canReach 能到达的点
  const canReach = [true];

  for (let i = 0; i < nums.length; i++) {
    if (canReach[i]) {
      for (let j = 1; j <= nums[i]; j++) {
        canReach[i + j] = true;
      }
    }
  }

  // TODO: canReach[nums.length - 1] 可能为 undefined ，所以要增加判断是否存在，存在且为 true 时才是 true； 否则为 false
  return canReach[nums.length - 1] ? true : false;
};