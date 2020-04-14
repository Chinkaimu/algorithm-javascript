/**
 * https://leetcode.com/problems/maximal-rectangle/
 * 遍历上下界，然后将二维数组拍扁
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
  let m = matrix.length;
  if (m === 0) {
    return 0;
  }
  const n = matrix[0].length;
  let result = 0;

  // 上界
  for (let i = 0; i < m; i++) {
    let cols = new Array(n);
    cols.fill(0);
    // 下界
    for (let j = i; j < m; j++) {
      for (let k = 0; k < n; k++) {
        if (matrix[j][k] === '1') {
          cols[k] = cols[k] + Number(matrix[j][k]);
        } else {
          cols[k] = 0;
        }
      }

      let area = largestRectangleArea(cols);
      result = Math.max(result, area);
    }
  }

  return result;
};

function largestRectangleArea (heights) {
  heights.push(0);
  const stack = [[0, -1]];
  let top = 0;

  let result = 0;

  let startIndex;
  heights.forEach((height, index) => {
    startIndex = index;

    while (height < stack[top][0]) {
      const [h, i] = stack.pop();
      startIndex = i;
      result = Math.max(result, (index - i) * h);
      top--;
    }

    if (height > stack[top][0]) {
      // 从上一个比它小 stack[top][0] 小的点开始都算作这个高度
      stack.push([height, startIndex]);
      top++;
    }
  })

  return result;
}