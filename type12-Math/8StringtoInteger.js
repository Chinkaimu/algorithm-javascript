/**
 * 15:12 - 16:21(1h)
 * question: 2mins
 * design + coding(11): 15:14 - 15:25
 *   solution：（转换成 int 的步骤，其中要筛选掉不合法的字符串）
 *       * 去掉空格
 *       * 读符号最多存在一个
 *       * 读完符号读数据，符号和数字中间不能存在其他字符，否则就不是合法字符串
 *       * 数字就连续读，如果读到其他字符后面就返回了
 *       * 乘法 能够发生隐式转换
 *       (在对各种 非 Number 类型运行除了加法意外的数学运算时，会将非 Number 类型转换为 Number 类型)
 *       * 需要对边界进行判断，数值计算应该是 num = num * 10 + str[i] * 1
 *   result: 0 || number
 * https://leetcode.com/problems/string-to-integer-atoi/
 * @param {string} str
 * @return {number}
 */
const assert = require('assert').strict;
var myAtoi = function(str) {
  if (!str || typeof str !== 'string') return 0;

  let sign = 1; // 1 表示正数； -1 表示负数
  str = str.trim();

  let i = 0;
  if (str[0] === '+') {
    sign = 1;
    i++;
  } else if (str[0] === '-') {
    sign = -1;
    i++;
  } 
  
  // TODO: ' ' >= 0 true，所以不能用 0， 9 去比较
  if (str[i] >= '0' && str[i] <= '9') {
    let num = 0;
    while (i < str.length && str[i] >= '0' && str[i] <= '9' ) {
      // TODO: 字符串加法会转换成字符
      num = num * 10 + str[i] * 1;
      let edgeValue = edge(num, sign) 
      if (edgeValue !== num) {
        return edgeValue;
      }
      i++;
    }
    // TODO: 没有考虑越界的情况
    return num * sign;
  } else {
    // TODO: 去掉标记符后第一个必须是数字。
    return 0;
  }
};

function edge (num, sign) {
  if (sign === -1 && num > Math.pow(2, 31)) {
    return -Math.pow(2, 31);
  }
  if (sign === 1 && num > Math.pow(2, 31) - 1) {
      return Math.pow(2, 31) - 1;
  }

  return num;
}

/**
 * TestCase： 变量组成，控制其他变量不变，其中一个变量枚举所有可能存在的情况
 *   组成富豪：空格、数字（特殊数字 0）、正负号、字母、其他字符
 */
assert.equal(myAtoi('4 2'), 4);
assert.equal(myAtoi('  -4 2'), -4);
assert.equal(myAtoi('+4 2'), 4);
assert.equal(myAtoi('+ 4 2'), 0);
assert.equal(myAtoi('+4a 2'), 4);
assert.equal(myAtoi('+++4a 2'), 0);
assert.equal(myAtoi("words and 987"), 0);
assert.equal(myAtoi('42'), 42);
assert.equal(myAtoi("4402"), 4402);

// TODO: 没有考虑的测试用例
assert.equal(myAtoi("-91283472332"), -2147483648);
assert.equal(myAtoi("91283472332"), 2147483647);








