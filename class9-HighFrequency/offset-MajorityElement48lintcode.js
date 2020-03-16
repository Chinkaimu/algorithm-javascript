/**
 * https://www.lintcode.com/problem/majority-number-iii/description
 * @param nums: A list of integers
 * @param k: An integer
 * @return: The majority number
 */
/**
 * map 相关属性： 成员总数 size
 *     相关方法： set(key, value); get(key); has(key); delete(key); clear();
 *     遍历方法： keys(); values(); entries(); forEach()
 * @param {*} nums 
 * @param {*} k 
 */
const majorityNumber = function (nums, k) {
  // write your code here
  const map = new Map()
  let max = 0
  let result

  nums.forEach(item => {
    // 只需要加数
    if (map.has(item)) {
      let count = map.get(item)
      map.set(item, ++count)
      if (count > max) {
        max = count
        result = item
      }
    } else {
      map.set(item, 1)
      if (max === 0) {
        max = 1
        result = item
      }
    }
  })

  return result
}

console.log(majorityNumber([2,2,5,1], 3))
console.log(majorityNumber([3,1,2,3,2,3,3,4,4,4], 3))
console.log(majorityNumber([6,2,3,4,5,1,6,6,1,1,6], 3))
console.log(majorityNumber([7,1,7,7,61,61,61,10,10,10,61], 3))