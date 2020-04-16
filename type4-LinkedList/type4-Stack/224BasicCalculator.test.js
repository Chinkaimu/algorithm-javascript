const assert = require('assert').strict;
const solution = require('./224BasicCalculator');

assert.equal(solution('1 + 1'), 2)
assert.equal(solution('2 - 1 + 2'), 3)
assert.equal(solution("(1+(4+5+2)-3)+(6+8)"), 23)