/**
 * https://leetcode.com/problems/3sum-closest/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b);

  let minus = Number.MAX_SAFE_INTEGER;
  let result;

  let sum;

  for (let i = 0; i < nums.length - 2; i++) {
    for (let left = i + 1, right = nums.length - 1; left < right;) {
      sum = nums[i] + nums[left] + nums[right];

      if (sum === target) {
        return sum;
        // TODO: 切记要移动指针
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }

      // TODO: Math.abs() 参数只有一个
      if (Math.abs(sum - target) < minus) {
        minus = Math.abs(sum - target);
        result = sum;
      }
    }
  }

  return result;
};

console.log(threeSumClosest([-1, 2, 1, -4], 1))