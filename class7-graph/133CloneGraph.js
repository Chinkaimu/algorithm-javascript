/**
 * https://leetcode.com/problems/clone-graph/
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */
/**
 * 1. 克隆节点
 * 2. 克隆边
 * @param {Node} node
 * @return {Node}
 */

var cloneGraph = function(node) {
  if (!node) return null

  let nodes = []
  let map = new Map()
  
  nodes.push(node)
  let copyNode = new Node(node.val)
  map.set(node, copyNode)

  let start = 0
  while (start < nodes.length) {
    let root = nodes[start++]

    for (let neighbor of root.neighbors) {
      if (!map.has(neighbor)) {
        nodes.push(neighbor)
        copyNode = new Node(neighbor.val)
        map.set(neighbor, copyNode)  
      }
    }
  }

  start = 0
  for (let oldNode of nodes) {
    let neighbors= oldNode.neighbors
    let copyNode = map.get(oldNode)

    for (let neighbor of neighbors) {
      let newNeighbor = map.get(neighbor)
      
      copyNode.neighbors.push(newNeighbor)
    }
  }

  return map.get(node)
};

var cloneGraph = function(node) {
  if (!node) return null

  let queue = []
  queue.push(node)
  let map = new Map()

  let current = 0
  while (current < queue.length) {
    let currentNode = queue[current]
    let neighbors = currentNode.neighbors

    let copyNode = new Node(currentNode.val)
    map.set(currentNode, copyNode)

    for (let i = 0 ; i < neighbors.length; i++) {
       // 错误点：需要通过 map 来判断有无，就需要在加入 queue 的时候就在 map中也加入对应的映射
      if (!map.has(neighbors[i])) {
        queue.push(neighbors[i])
      }
    }

    current++
  }

  current = 0
  while (current < queue.length) {
    let neighbors= queue[current].neighbors
    let copyNode = map.get(queue[current])

    for (let i = 0; i < neighbors.length - 1; i++) {
      let copyNeighbor = map.get(neighbors[i])
      
      copyNode.neighbors.push(copyNeighbor)
    }

    current++
  }

  return map.get(queue[0])
};



var cloneGraph = function(node) {
  if (!node) return null

  let queue = []
  queue.push(node)
  let current = 0
  let result = null

  while (current < queue.length) {
    let currentNode = queue[current]
    let copyNode = new Node(currentNode.val)
    let neighbors = currentNode.neighbors

    for (let i = 0 ; i < neighbors.length; i++) {
      let isQueued = false

      for (let j = 0; j < queue.length; j++) {
        if (neighbors[i] === queue[j]) {
          isQueued = true
        }
      }
      if (!isQueued) {
        queue.push(neighbors[i])
      }
    }

    neighbors.push(copyNode)
    current++
  }

  current = 0
  while (current < queue.length) {
    let neighbors= queue[current].neighbors
    let copyNode = neighbors[neighbors.length - 1]
    current === 0 && (result = copyNode)

    for (let i = 0; i < neighbors.length - 1; i++) {
      let linkNeighbors = neighbors[i].neighbors
      
      copyNode.neighbors.push(linkNeighbors[linkNeighbors.length - 1])
    }

    current++
  }

  current = 0
  while (current < queue.length) {
    queue[current].neighbors.pop()
  }
  queue = null

  return result
};


var cloneGraph = function(node) {
  if (!node) return null

  let queue = []
  queue.push(node)
  let copyQueue = []

  let current = 0

  while (current < queue.length) {
    let currentNode = queue[current]
    let neighbors = currentNode.neighbors
    const copyNeighbors = []

    for (let i = 0 ; i < neighbors.length; i++) {
      let isQueued = false

      for (let j = 0; j < queue.length; j++) {
        if (neighbors[i] === queue[j]) {
          isQueued = true
          copyNeighbors[i] = j
        }
      }
      if (!isQueued) {
        queue.push(neighbors[i])
        copyNeighbors[i] = queue.length - 1
      }
    }

    let copyNode = new Node(currentNode.val, copyNeighbors)
    copyQueue[current] = copyNode
    current++
  }

  current = 0
  while (current < copyQueue.length) {
    const copyNode = copyQueue[current]
    let neighbors= copyQueue[current].neighbors
    let trueNeighbors = []

    for (let i = 0; i < neighbors.length - 1; i++) {      
      trueNeighbors[i] = copyQueue[neighbors[i]]
    }

    copyNode.neighbors = trueNeighbors
    current++
  }

  queue = null
  return copyQueue[0]
};