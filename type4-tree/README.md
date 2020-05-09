# Tree

## basic
* traversal - use stack: 
  * in-order traversal: use stack, add root; get the top node, if there is left node, add to stack, and set left node to null representing it has been visited; or push the node value, and push right node. [94. Binary Tree Inorder Traversal
](https://leetcode.com/problems/binary-tree-inorder-traversal/)
  * pre-order traversal: use stack, add root; get the top node, push the value to result; add right to stack; add left to stack.[144. Binary Tree Preorder Traversal
](https://leetcode.com/problems/binary-tree-preorder-traversal/)
  * post-order traversal: use stack, add root; check the top node, if there is right node and left node, push to the stack.[145. Binary Tree Postorder Traversal
](https://leetcode.com/problems/binary-tree-postorder-traversal/)
* traversal - use queue:
  * level traversal: add root to queue; shift one node from the queue, and add the left and right of this node.
* common algorithms: DFS, BFS, divide&conquer, recursion, stack
  * recursion always make less coding

## cases
* [236. Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/): divide&conquer.
* [653. Two Sum IV - Input is a BST](https://leetcode.com/problems/two-sum-iv-input-is-a-bst/): (1) transfer to array to problem [1. Two Sum
](https://leetcode.com/problems/two-sum/); (2) just like the solution of problem 1, traverse the tree instead of array.
* [669. Trim a Binary Search Tree](https://leetcode.com/problems/trim-a-binary-search-tree/): dfs
* [965. Univalued Binary Tree](https://leetcode.com/problems/univalued-binary-tree/): recursion
