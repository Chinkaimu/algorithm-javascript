/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  let flag = false
  if (!Array.isArray(s)) {
    // s = [...s] is working too. String has [Symbol.iterator] interface.
    s = s.split('')
    flag = true
  }
  let start = 0
  let end = s.length - 1

  while (start < end) {
    const temp = s[start]
    s[start] = s[end]
    s[end] = temp
    ++start
    --end
  }

  return flag ? s.join('') : s
};

console.log(reverseString(["h","e","l","l","o"]))
console.log(reverseString("hello"))