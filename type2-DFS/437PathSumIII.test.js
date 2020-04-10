const assert = require('assert').strict;

const pathSum = require('./437PathSumIII');
const buildTree = require('../utils/buildTree');

assert.equal(pathSum(buildTree([10,5,-3,3,2,null,11,3,-2,null,1]), 8), 3);
assert.equal(pathSum(buildTree([]), 0), 0);
// Failed: paths include one node, and there is no left node
assert.equal(pathSum(buildTree([-2, null, -3]), -2), 1);
assert.equal(pathSum(buildTree([1,-2,-3,1,3,-2,null,-1]), 1), 3);
