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

function buildTree (arr) {
  if (!arr || !arr.length ) return null;

  const root = new TreeNode(arr.shift());
  const currentLevelQueue = [root];

  while (currentLevelQueue.length > 0) {
    let levelCount = currentLevelQueue.length;

    while (levelCount-- > 0){
      const current = currentLevelQueue.shift();
      if (current) {
        let val = arr.shift();
        let node = val ? new TreeNode(val) : null;
        current.left = node;
        if (val !== undefined) {
          currentLevelQueue.push(node);
        }

        val = arr.shift();
        node = val ? new TreeNode(val) : null;
        current.right = node;
        if (val !== undefined) {
          currentLevelQueue.push(node);
        }
      }
    }
  }

  return root;
}

console.log(buildTree([10,5,-3,3,2,null,11,3,-2,null,1]))