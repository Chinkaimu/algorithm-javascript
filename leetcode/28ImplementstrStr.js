/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (typeof needle != 'string') {
    return -1;
  }

  if (needle.length === 0) {
    return 0;
  }

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      var result = isStr(haystack, needle, i+1);
      if (result !== -1) {
        return result;
      }
    }
  }

  return -1;
};

var isStr = function (haystack, needle, index) {
  for (var i = 1; i < needle.length; i++) {
    if (haystack[index] !== needle[i]) {
      return -1;
    }
    index++;
  }
  return index-needle.length;
}

console.log(strStr("hello", "llo"))