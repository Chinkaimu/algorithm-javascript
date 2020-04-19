/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 *  design: 11:47 - 11:51（4）
 *    (1) serialize：先序、中序、后序（不能表示唯一序列）； BFS 顺序
 *      data: string
 *      12345678，空节点如何表示？ '#'
 *    (2) deserialize
 *      12345678，组合回去
 *   （3）兼容性考虑，中间逗号分割
 *  coding (35mins): 16:44 - 16:19
 *  debugging（7mins）: 16:19 - 16:26
 */

/**
 * Encodes a tree to a single string.
 * 
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  if (!root) return '';

  const queue = [root];
  let result = '';

  while (queue.length > 0) {
    let size = queue.length;

    while (size-- > 0) {
      let current = queue.shift();
      if (current === null) {
        result += ',#';
        continue;
      }

      result += ',' + current.val;
      queue.push(current.left);
      queue.push(current.right);
    }
  }

  return result;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  if (!data || !data.length) return null;

  const origin = data.split(',');
  origin.shift(); // 去掉第一个逗号
  const root = new TreeNode(origin.shift());
  let queue = [root];

  while (queue.length > 0 && origin.length > 0) {
    let levelSize = queue.length;

    while (levelSize-- > 0 && origin.length > 0) {
      // 这里的 current 已经全部转化成 node
      let current = queue.shift();

      if (current) {
        current.left = getNodeFromOrigin(origin);
        queue.push(current.left);
  
        current.right = getNodeFromOrigin(origin);
        queue.push(current.right);
      }
    }
  }

  return root;
};

function getNodeFromOrigin (origin) {
    // val maybe null or undefined (maybe there is only one item left in array in last loop)
  const val = origin.shift();
  if (val === '#' || val === undefined) {
    return null
  }

  return new TreeNode(val);

}

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
