const assert = require('assert').strict;
const solution = require('./227BasicCalculatorII');

/**
 * Test Case
 * 1. +、-、*、/ 单独运算
 * 2. + * 结合
 * 3. + / 结合
 * 4. - * 结合
 * 5. - / 结合
 * 6. / 整除
 * 7. / 不整除
 */
assert.equal(solution("0-2147483647"), -2147483647);
assert.equal(solution("3/2"), 1);


assert.equal(solution("3+2*2"), 7);
assert.equal(solution(" 3+5 / 2 "), 5);
assert.equal(solution("12-3*4"), 0);
assert.equal(solution("12-3/2"), 0);

