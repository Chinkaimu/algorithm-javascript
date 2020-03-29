# BFS 

## 主要思想
  * 先将问题构建成树或者图
  * 借助队列一层一层搜索

## 使用场景
  * 二叉树分层打印
  * 图搜索
  * 树结构往下寻找结果，可能在上一层次存在重复节点需要删除的时候用 BFS。需要增加 visited 检查。

## 数据结构
  * 队列 queue： 按顺序将节点数据加入 queue，从 queue 中逐个取出节点数据做相应计算到结果。将当前节点数据的下一层数据 push 到队列中
  * 当前层和下一层的节点个数 currentLevelCount, nextLevelCount： 用于划分队列中的层次，一层层读取

## 处理步骤
  * 初始化： 
    * queue 初始化为根节点，第一层的数据；
  * 外层循环：queue 中还有数据则取出放到结果，并且把它的下一层数据加入到 queue 中

## 模板代码
```
function bfs (root) {
  const result = []
  const queue = [root]

  // 循环条件：队列内还有内容
  while (queue.length > 0) {
    // 从队列中取数据 push 到结果
    const node = queue.shift()
    result.push(node.val)

    // 左右节点入队列
    node.left && queue.push(node.left)
    node.right && queue.push(node.right)
  }

  return result
}
```

## LeetCode 实例
  * 1306 Jump Game III，在上述 base BFS 基础上增加是否已访问的判断
  * 1162 As Far From Land As Possible ，0 步，1 步一层层往下寻找