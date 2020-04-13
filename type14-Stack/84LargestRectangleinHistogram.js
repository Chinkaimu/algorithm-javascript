/**
 * https://leetcode.com/problems/largest-rectangle-in-histogram/
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  heights.push(0)
  let ret = 0
  const stack = [[0, -1]]
  let top = 0
  heights.forEach((height, index) => {
    let memoIndex = index
    while (stack[top][0] > height) {
      const [h, i] = stack.pop()
      ret = Math.max(ret, (index - i) * h)
      memoIndex = i
      top--
    }

    if (stack[top][0] < height) {
      stack.push([height, memoIndex])
      top++
    }
  })
  return ret
};

console.log(largestRectangleArea([2,1,5,6,2,3]))