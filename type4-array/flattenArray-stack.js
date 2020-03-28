/**
 * 1. 定义执行栈，一个个数据取出来执行
 * 2.1. 执行发现是个数组，还没做完，先扁平化，再整体压回栈中（前后顺序是数组中的顺序不变）
 * 2.2. 执行是个普通数字，直接产出到结果
 * @param {*} arr
 */
function flatten (arr) {
  const result = []
  const stack = [arr]

  while (stack.length > 0) {
    const current = stack.shift()
    if (Array.isArray(current)) {
      stack.unshift(...current)
    } else {
      result.push(current)
    }
  }

  return result
}

console.log(flatten([1, 2, [3, [ 4 ] ] ]))
console.log(flatten([ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, [ 9 ], [11, 12, [12, 13, [14] ] ] ], 10]))

