/**
 * https://leetcode.com/problems/jump-game-ii/
 * Greedy 每一步走得到最远的地方
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  if (!nums || !nums.length) return;
  if (nums.length === 1) return 0;

  // 1 - nums[0] can just reach by 1 jump
  let farest = nums[0];

  let count = nums[0];
  let jumps = 1;

  // TODO: the first jump should deal first
  if (farest >= nums.length - 1) {
    return jumps;
  }

  let i = 1;
  while(i <= farest) {
    // reach the last index just more jump
    if (i + nums[i] >= nums.length - 1) {
      return jumps + 1;
    }

    farest = Math.max(farest, i + nums[i]);
    count--;
    if (count === 0) {
      jumps++;
      // TODO:the count of next jump, the farest that can reach minus current index.
      count = farest - i;
    }

    i++;
  }
}