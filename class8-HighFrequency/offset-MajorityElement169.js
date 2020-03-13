/**
 * @param {number[]} nums
 * @return {number}
 * theme: try to offset numbers
 * related: Majority Element II; Check If a Number is Majority Element in a Sorted Array
 */
var majorityElement = function(nums) {
  let candidate, count = 0

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      candidate = nums[i]
      count++
    } else {
      if (nums[i] === candidate) {
        count++
      } else {
        count--
      }
    }
  }

  return candidate
};

console.log(majorityElement([3,3,2]))
console.log(majorityElement([2,2,1,1,1,2,2]))