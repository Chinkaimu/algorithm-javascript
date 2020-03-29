/**
 * 找出每一步往下走能走到的点，加入到队列
 * 走到已经走过的点了就结束不往下走
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
  if (!arr || !arr.length) return false

  // 也可以直接修改 arr 为负数，标记已经走过了
  const visited = []
  const queue = [start]

  while (queue.length > 0) {
    const index = queue.shift()
    // deal result
    if (arr[index] === 0) {
      return true
    }

    // get more data
    visited[index] = true
    const left = index - arr[index]
    const right = index + arr[index]

    if (left >= 0 && !visited[left]){
      queue.push(left)
    }

    if (right < arr.length && !visited[right]) {
      queue.push(right)
    }
  }

  return false
};

console.log(canReach([3, 0, 2, 1, 2], 2))

