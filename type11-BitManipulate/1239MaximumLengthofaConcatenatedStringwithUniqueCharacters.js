/**
 * https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/
 * 最长 26
 * 所有组合的长度进行比较
 * 技巧：位与运算判断是否相同/不同；位或运算进行求和。
 * 时间复杂度： O(2^n)
 * 空间复杂度： O(n)
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function(arr) {
  let maxLen = 0;
  const a = [];

  for (let s of arr) {
    let mask = 0;

    for (let i = 0; i < s.length; i++) {
      // 左移 x - 'a' 位
      mask |= 1 << (s.charCodeAt(i) - 'a'.charCodeAt(0));
    }
    if (popcount(mask) === s.length) {
      a.push(mask);
    }
  }
  dfs (0, 0);

  function dfs (currentMask, place) {
    maxLen = Math.max(maxLen, popcount(currentMask));

    for (let i = place; i < a.length; i++) {
      // 没有重复位
      if ((a[i] & currentMask) === 0) {
        dfs(currentMask | a[i], i + 1);
      }
    }

  }

  return maxLen;
};

function popcount(val) {
  let count = 0;

  while (val) {
    if (val & 1 !== 0) {
      count++;
    }
    val >>= 1;
  }
  return count;
}

console.log(maxLength(["un","iq","ue"]));