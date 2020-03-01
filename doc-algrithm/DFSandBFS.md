# 深度优先搜索（Depth-First Search）
* 使用场景
  * 求子序列、求子集
  * 找所有可能的解决方案，逐层组装结果（跟第一种没太大差别）

## 具体例子 —— 深度优先，一直往下搜索到最终结果后返回
### 逐层组装结果到最深一层：求子集、求序列
1. [Subsets](https://leetcode.com/problems/subsets/) 每个节点路径都是结果：第一层只有 0 个元素，逐层从给定的数组中取出元素添加，每个节点都作为结果添加到数组中，直到根节点。查看[代码](https://github.com/zhihuibaobao/algorithm-javascript/blob/master/class1-introduce/78Subsets.js)
2. [Subsets II](https://leetcode.com/problems/subsets-ii/) 每个节点路径都是结果：给定结合内容排序，然后在上题 Subsets 的基础上增加筛选条件，不能同前面的元素一样。查看[代码](https://github.com/zhihuibaobao/algorithm-javascript/blob/master/class1-introduce/90Subsets.js)
3. [Letter Case Permutation](https://leetcode.com/problems/letter-case-permutation/) 叶子节点是结果：从第一个元素开始添加结果，如果遇到字母则进行大写字母转换，小写字母转换（同时都做，因为大写做转大写操作依然是大写，小写转小写操作依然是小写，不会有影响），然后再添加后面元素。查看[代码](https://github.com/zhihuibaobao/algorithm-javascript/blob/master/leetcode-medium/46permutations.js)
<br/>经历了一个多余复杂的代码过程，时间效率和代码都差 1 倍：
第 1 题是每层的变化是集合中元素个数，本题变为修改的元素个树，顶层修改元素个数为 0，往下逐层增加 1。规则同第 2 题，第 2 题只能添加后面的元素，本题只能修改在前面已更改元素后面的字母。有个坑跟前面 2 题是有差别的：
  * 其实前面的分析是不对的，这里有个坑就是题目给的集合顺序，字母是从后往前修改的，所以循环需要用倒叙，只能修改上一次修改过位置的前面位置。
  * 数据顺序是一层一层读的，需要一层一层往上返回结果。当层的结果拿到，下一层的结果拿到，然后两者合并进行返回。
教训：只管变化的内容就好，不变化的内容传来传去费劲儿。

4. [Permutations](https://leetcode.com/problems/permutations/) 叶子节点是结果：每一层在上一层的基础上增加一个前面没有使用过的元素。查看[代码](https://github.com/zhihuibaobao/algorithm-javascript/tree/master/leetcode-medium)

### 找所有可能的解决方案
1. [N-Queens](https://leetcode.com/problems/n-queens/) 叶子节点是结果：下一个节点需要考虑前面的节点没有在冲突位置。挑战点：斜角的冲突位置计算，可以通过横纵坐标差或者和来判断，因为 [x - minus, y - minus] 以及 [x + minus, y - minus] 的两种位置会与当前要存放的 [x,y] 节点冲突。查看[代码](https://github.com/zhihuibaobao/algorithm-javascript/tree/master/leetcode-hard)
2. [Palindrome Partitioning](https://leetcode.com/problems/palindrome-partitioning/) : 
* 方法1: 回文串内容作为节点。
* 方法2: 分割线作为节点，部分节点路径都是结果。需要关注的是结果分析，（1）只有部分节点路径是结果，筛选条件需要判断，前后分割都是回文串；（2）DFS 筛选条件：前面分割已经是回文串的才有必要继续深入搜索。（3）0 分割线问题需要单独处理。
* 查看[代码](https://github.com/zhihuibaobao/algorithm-javascript/blob/master/class7-graph-search/131PalindromePartitioning.js)
3. [Combination Sum](https://leetcode.com/problems/combination-sum/)：套用模板即可，不过需要注意 sum 的回溯。查看[代码](https://github.com/zhihuibaobao/algorithm-javascript/blob/master/class7-graph-search/39CombinationSum.js)
4. [Combination SumII](https://leetcode.com/problems/combination-sum-ii/submissions/): 在3题的基础上增加排序，以及筛选掉重复元素。` i !== pos && candidates[i] === candidates[i - 1]` 时候直接下一个函数。查看[代码](https://github.com/zhihuibaobao/algorithm-javascript/blob/master/class7-graph-search/40CombinationSumII.js)

## DFS 分析步骤总结(先画图构建搜索树)
1. 「解决方案」确定能否用 DFS：常见子序列、子集合、求所有解决方案用 DFS
2. 「节点」确定节点，先看看输出结果最小单位内容能不能作为节点，如果不能，找一个转换方式
3. 「扩展筛选条件」哪些节点是可以继续搜索的
4. 「节点扩展」如何从上一层节点扩展到下一层
5. 「结果分析」什么时候产出结果，停止继续搜索。分析结果是每个节点，还是每个节点路径，还是叶子节点，还有可能是部分节点、部分节点路径，如果是部分，则需要增加筛选条件。
6. 「结果转化」节点可能需要转化成其他形式，成为题目所需要的结果。可以在结果阶段统一转换，也可以在加入结果时一步步进行转化。
7. 套代码模板

## DFS 代码基础模板总结
```
  function func (originData) {
    // 存储最终结果
    const result = []
    // 深度优先搜索，搜索节点
    dfs([])

    // 必须入参为前一个节点数值，初始化值是根节点，以空字符串或者空数组为主
    // 视情况而定如参：如增加筛选条件的下标
    function dfs (current)) {
      // 如果结果是所有节点，则直接将 target 加入到结果中。
      // 注意1: 如果是对象，最好重新构造一个，避免对存储结构中的数据造成影响：可以在加入时重建，也可以在传参时进行。
      // 注意2: 如果结果是叶子节点或者其他条件，结果增加筛选项目，也可以在回调前增加筛选项目。
      // 注意3: 可能存在结果需要转化的，特别是整体结果转化的放在这里。单个转化的建议放在传参部分。
      result.push(new Array(current))

      for (let i = 0; i < originData.length; i++) {
        // 注意3: 这里可能需要进行数据转化，单个转化建议放在此处，如果是全部转化
        // 注意4: 这里传给 DFS 的所有结果都要回溯，因为 originData[i + 1] 也是在 current 基础上进行的。包括与 current 相关的结果已经把当前节点加进去的也要回溯
        current.push(originData[i])
        dfs(current)
        current.pop()
        // 避免回溯的简单写法如下
        // dfs([...current, originData[i]])
      }
    }

    return result
  }
```

## 可能挑战点分析
* 节点分析，节点可能需要通过现象看本质，不单单是简单给的数字，例如回文串分割节点是分割线
* 节点间演算条件，要考虑充分，避免遗漏，例如 N 皇后问题斜角也不能放置，这里的斜角代码还有点小技巧

# 宽度优先搜索（Breadth-First Search）
* 算法自始自终一直通过已找到和未找到定点之间的边界向外扩展，也就是说算法先搜索和 s 距离为 k 的所有顶点，然后再去搜索和 s 距离为 k+l 的其他顶点。
