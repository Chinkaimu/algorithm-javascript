const dayOfYear = require('./1154DayoftheYear');
const assert = require('assert').strict;

assert.equal(dayOfYear("2016-02-29"), 60);
assert.equal(dayOfYear("2003-03-01"), 60);
assert.equal(dayOfYear("2019-01-09"), 9);
