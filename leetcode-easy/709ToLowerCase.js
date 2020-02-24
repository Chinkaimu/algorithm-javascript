/**
 * 思路： ASCII 码减去 32
 * 这是两个提取字符串字符的安全方法：
 * charAt(position), charCodeAt(position)
 * [] 数组读法不适用于老版本，而且照顾到字符会返回 undefined,但是 charAt 会返回空字符串
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
  const minus = 'a'.charCodeAt() - 'A'.charCodeAt()
  let result = ''

  for (let s of str) {
    let code = s.charCodeAt()
    // important: 解除对 ASCII 具体数值的依赖
    if (code <= 'Z' && code > 'A') {
      result = result.concat(String.fromCharCode(code + minus))
    } else {
      result = result.concat(s)
    }
  }

  return result
};

// 别人的写法
const toLowerCase = (str) => {
  //Calculate Ascii diff from a to A
  const DIFF = ('a'.charCodeAt(0) - 'A'.charCodeAt(0));
  
  return Array
      .from(str)
      .map( ch => ( ch >= 'A' && ch <= 'Z' ) ? String.fromCharCode(ch.charCodeAt(0) + DIFF) : ch )
      .join('');
};

console.log(toLowerCase('hello'))
console.log(toLowerCase('Hello'))
console.log(toLowerCase('HELLO'))