/**
 * 如果是数组，则需要继续 flatten (其实也就是栈顶加了一个 flatten 先执行返回，合并到当前的结果，核心思想跟栈实现是一致的)
 * 优化写法：通过 array.reducer 将结果一次次合并
 */
function flatten1 (arr) {
  const result = []

  for (const item of arr) {
    if (Array.isArray(item)) {
      // flatten return array, spread here
      result.push(...flatten1(item))
    } else {
      result.push(item)
    }
  }

  return result
}
console.log('flatten1', flatten1([1, [2, 3], [4, [5]]]))

function flatten2 (arr) {
  // array.reduce receive two params, the callback reducer and init value of accumulator
  // reducer's params: accumulator, current value, index, source array
  return arr.reduce((accumulator, current) => {
    return Array.isArray(current)
      ? [...accumulator, ...flatten2(current)]
      : [...accumulator, current]
  }, [])
}
console.log('flatten2', flatten2([1, [2, 3], [4, [5]]]))

