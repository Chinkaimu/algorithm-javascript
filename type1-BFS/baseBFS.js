// 将数据按层次插入到队列
function bfs1 (root) {
  if (!root) {
    return []
  }
  const results = []
  const queue = [root]

  while (queue.length > 0) {
    const node = queue.shift()
    results.push(node.val)

    if (node.left) {
      queue.push(node.left)
    }
    if (node.right) {
      queue.push(node.right)
    }
  }
  return results
}

// 如果需要分层打印则需要加一个数组存储当前层次的内容
function bfs2 (root) {
  if (!root) {
    return []
  }

  const results = []
  let queue = [root]

  while (queue.length > 0) {
    const currentLevel = []
    const size = queue.length

    for (let i = 0; i < size; i++) {
      const node = queue.shift()
      currentLevel.push(node.val)
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
    
    results.push(currentLevel)
  }

  return results
}

function Node (val, left = null, right = null) {
  this.val = val
  this.left = left
  this.right = right
}

const node1 = new Node(1)
const node2 = new Node(2)
const node3 = new Node(3)
const node4 = new Node(4)
const node5 = new Node(5)

node1.left = node2
node1.right = node3
node3.left = node4
node3.right = node5

console.log(bfs1(node1))
console.log(bfs2(node1))
