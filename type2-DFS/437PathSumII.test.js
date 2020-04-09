const assert = require('assert').strict;

const pathSum = require('./437PathSumIII');
const buildTree = require('../utils/buildTree');

assert.equal(pathSum(buildTree([10,5,-3,3,2,null,11,3,-2,null,1]), 8), 3)
