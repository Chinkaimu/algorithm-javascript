/**
 * https://leetcode.com/problems/3sum/
 * @param {number[]} nums
 * @return {number[][]}
 * 将 3sum 转化成 2sum 问题。
 * 所有的负数需要对应找到 2 个数之和为正数（这个部分用双指针）
 */
var threeSum = function(nums) {
  nums.sort((a, b) => a - b);

  const result = [];
  let sum;

  // TODO: 需要考虑 === 0 的情况，=== 0 不能退出
  for (let i = 0; i < nums.length && nums[i] <= 0; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    for (let left = i + 1, right = nums.length - 1; left < right;) {
      // TODO: 有结果，和没结果的情况都需要进行指针移动
      sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        // TODO:需要去重
        while (left < right && nums[left + 1] === nums[left]) left++;
        while (left < right && nums[right - 1] === nums[right]) right--;

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]))
console.log(threeSum([-2, 0, 0, 2, 2]))
console.log(threeSum([0, 0, 0]))