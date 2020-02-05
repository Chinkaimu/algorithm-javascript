/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  const peak = findThePeak(nums)
  const moveNums = nums.length - 1 - findThePeak(nums)
  
  let start = 0
  let end = nums.length - 1
  let mid
  let actualMid

  while (start <= end) {
    mid = parseInt(start + (end - start)/2)
    actualMid = (mid < moveNums) ? (mid + peak + 1) : (mid + peak + 1 - nums.length)
    if (nums[actualMid] === target) {
      return actualMid
    } else if (nums[actualMid] < target){
      start = mid + 1
    } else {
      end = mid - 1
    }
  }

  return -1
};

/**
 * 找到任意一个驼峰的方法需要修改为找唯一的驼峰，需要对两头的比较做处理
 * @param {} nums 
 */
function findThePeak (nums) {
  if (!nums && !nums.length) return -1
  let start = 0
  let end = nums.length - 1
  let mid

  while (start <= end) {
    mid = parseInt(start + (end - start)/2)
    const left = (mid === 0) ? (nums.length - 1) : (mid - 1)
    const right = (mid === nums.length - 1) ? 0 : (mid + 1)
    if (nums[mid] < nums[left] && nums[mid] < nums[right]) {
      return mid
    } else if (nums[mid] > nums[left] && nums[right] > nums[mid]) {
      end = mid - 1
    } else {
      start = mid + 1
    }
  }

  return -1
}


// console.log(search([3,4,5,6,1,2], 2))
// console.log(search([4,5,6,7,0,1,2], 0))
// console.log(search([6,7,1,2,3,4,5], 6))

console.log(findThePeak([6,7,1,2,3,4,5]))