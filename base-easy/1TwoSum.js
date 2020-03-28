/**
 * 考虑时间复杂度 O(n) 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
}

/**
 * 巧妙地运用了对象的 in 操作
 * 遍历到一个数的时候，查看前面的内容是否有匹配。效率提升了 50%。 in 判断效率比 for 的效率高
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 
 * O(n)
 */
var twoSum2 = function(nums, target) {
  let diction = {}
  for (let i = 0; i < nums.length; i++) {
    if ((target - nums[i]) in diction) {
      return [diction[target - nums[i]], i]
    }
    diction[nums[i]] = i
  }
}

var twoSum = function(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
      const compliment = target - nums[i];
      if (map.has(nums[i])) {
          return [map.get(nums[i]), i];
      } else {
          map.set(compliment, i);
      }
  }
  map = null
};

console.log(twoSum([3,2,4], 6))
console.log(twoSum([2, 7, 11, 15], 9))