/**
 * Build a tree from an array.
 * Import a currentLevelQueue, shift next value in array to assign left and right.
 * When there is no more values in the array, it returns undefined, and we should assign null to left and right.
 * @param {*} val 
 */
function TreeNode (val) {
  this.val = val;
  this.left = this.right = null;
}

function getNodeFromArray (arr) {
  // val maybe null or undefined (maybe there is only one item left in array in last loop)
  const val = arr.shift();
  const node = val ? new TreeNode(val) : null;

  return node;
}

function buildTree (arr) {
  if (!arr || !arr.length ) return null;

  const root = new TreeNode(arr.shift());
  const currentLevelQueue = [root];

  while (currentLevelQueue.length > 0 && arr.length > 0) {
    let levelCount = currentLevelQueue.length;

    while (levelCount-- > 0 && arr.length > 0){
      const current = currentLevelQueue.shift();
      if (current) {
        current.left = getNodeFromArray(arr);
        currentLevelQueue.push(current.left);

        current.right = getNodeFromArray(arr);
        currentLevelQueue.push(current.right);
      }
    }
  }

  return root;
}

module.exports = buildTree;