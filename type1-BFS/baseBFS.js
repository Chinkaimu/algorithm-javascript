// eslint-disable-next-line no-unused-vars
function bfs (root) {
  if (!root) {
    return []
  }

  const results = []
  let queue = [root]

  while (queue.length > 0) {
    const nextLevelValues = []
    const size = queue.length

    for (let i = 0; i < size; i++) {
      const node = queue.shift()
      node.left && nextLevelValues.push(node.left)
      node.right && nextLevelValues.push(node.right)

      results.push(node.val)
    }
    queue = nextLevelValues
  }

  return results
}

function bfs2 (root) {
  if (!root) {
    return []
  }
  // 0. 存储结果
  const results = []
  // 1. 队列存储需要读取的数据
  const queue = [root]
  // 2. 记录接下来需要遍历层次的节点个数
  let nexValueCount = queue.length

  while (queue.length > 0) {
    // 3. 临时变量记录下当前层的个数，因为下一层的个数需要重置了
    let currentLevelCount = nexValueCount
    nexValueCount = 0

    while (currentLevelCount > 0) {
      const node = queue.shift()
      results.push(node.val)

      if (node.left) {
        queue.push(node.left)
        nexValueCount++
      }
      if (node.right) {
        queue.push(node.right)
        nexValueCount++
      }
      currentLevelCount--
    }
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

console.log(bfs2(node1))
