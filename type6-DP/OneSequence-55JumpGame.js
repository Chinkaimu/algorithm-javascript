/**
 * TODO: 0405 to repeat again
 * https://leetcode.com/problems/jump-game/
 * @param {number[]} nums
 * @return {boolean}
 */
// 不要双重循环 --- Greedy，参考 greddy 部分

// 双重循环：前面能够到达的点，主动推导出后面能到达的点。
// 能更快地到达终点，并不需要所有数据进行计算
 var canJump = function(nums) {
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

// 双重循环：后面的结果由前面结果推导
var canJump1 = function(nums) {
  const canReach = [true];

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (canReach[j] && (nums[j] + j >= i)) {
        canReach[i] = true;
        break;
      }
    }
  }

  return canReach[nums.length - 1] ? true : false;
}

console.log(canJump([0]))