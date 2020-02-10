/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function(A, B) {
  if (A.length !== B.length) return false

  let i = 0
  let j = 0
  let start = undefined

  while(i < A.length && j < B.length) {
    // 没有找到第一个数
    if (start === undefined) {
      if (B[j] === A[0]) {
        start = j
        i++
      } else {
        // j 向后寻找 start
        j++
      }
    // 已经找到了第一个数
    } else {
      const index = start + i < B.length ? start + i : (start + i)%(B.length)
      if (B[index] === A[i]) {
        i++
      } else {
        // 出现不相等，重新向后寻找 start
        i = 0
        start = undefined
        j++
        }
    }
  }

  if (i === A.length) {
    return true
  }

  return false
};

console.log(rotateString('abcde', 'cdeab'))
console.log(rotateString('abcde', 'abced'))
console.log(rotateString('', ''))
console.log(rotateString('abcde', 'abcde'))
console.log(rotateString('abcde', 'bcdea'))
