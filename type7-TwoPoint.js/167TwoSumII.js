/**
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 * 2 个指针分别从 2 头出发向中间靠拢
 */
var twoSum = function(numbers, target) {
  let i = 0 , j = numbers.length - 1;
  while (i < j) {
    if (target === (numbers[i] + numbers[j])) {
      return [i + 1, j + 1];
    } else if (target > (numbers[i] + numbers[j])) {
      i++;
    } else {
      j--;
    }
  }
};