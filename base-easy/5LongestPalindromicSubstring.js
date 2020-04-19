/**
 * https://leetcode.com/problems/longest-palindromic-substring/
 * @param {string} s
 * @return {string}
 * 方法：循环对称中间轴
 * 关键：循环停止条件，长度计算错误
 */
var longestPalindrome = function (s) {  
  var start = 0,len=0;

  for (let mid = 0; mid < s.length; mid++) {
    var l = mid;
    var r = mid;
    
    // 奇数情况
    while (l >= 0 && r < s.length && s[l] === s[r]) {
        --l;
        ++r;
    }
    if (r-l-1 > len) {
        start = l+1;
        len = r-l-1;
    }
    
    // 偶数情况
    l = mid;
    r = mid+1;
    while (l >= 0 && r < s.length && s[l] === s[r]) {        
        --l;
        ++r;
    }
    if (r-l-1 > len) {
        // 就算 l 变成负数也能加回去
        start = l+1;
        len = r-l-1;
    }
  }

  return s.slice(start,start+len)
}

/**
 * @param {string} s
 * @return {string}
 * 优化：提取子函数
 */
var longestPalindrome1 = function (s) {
  if (!s || s.length === 0) {
      return "";
  }  
    
  var start = 0, len = 0, longest = 0;

  for (let i = 0; i < s.length; i++) {
    len = getPalindromeLength(s, i, i);
    if (len > longest) {
      longest = len;
      start = i - parseInt(len/2);
    }
  
    len = getPalindromeLength(s, i, i+1);
    if (len > longest) {
      longest = len;
      start = i - parseInt(len/2) + 1;
    }
  }

  return s.substring(start,start+longest)
}

// 获取长度，要慎重考虑越界问题
var getPalindromeLength = function (s, left, right) {
  var len = 0;
  while (left >= 0 && right <= s.length) {
      // The condition of stopping loop. No longer a palindrome.
      if (s[left] != s[right]) {
          break;
      }
      // current palindrome length
      len += (right === left) ? 1 : 2;
      left--;
      right++;
  }

  // 
  return len;
}


/**
 * 动态规划 Dynamic programing
 */
var longestPalindrome3 = function (s) {
  if (!s || s.length === 0) {
    return "";
  }

  var marks = [], longest = 0, start = 0;


  // 分组，长度为 0 - length
  for (var len = 0; len < s.length; len++) {
    for (var i = 0; i+len < s.length; i++) {
      if (len === 0) {
        marks[i] = new Array(s.length);
      }

      marks[i][i+len] = isPalindrome(s,i,len,marks);
      if (marks[i][i+len]) {
        longest = len + 1;
        start = i;
      }
    }
  }
  return s.substring(start, start+longest);
}

var isPalindrome = function (s, i, len, marks) {
  if (s[i] !== s[i+len]) return false;
  if (len > 1 && !marks[i+1][i+len-1]) return false;
  return true;
}

console.log('example1', longestPalindrome3('cabad'))
console.log('example2', longestPalindrome3(''))
console.log('example3', longestPalindrome3('vvvv'))