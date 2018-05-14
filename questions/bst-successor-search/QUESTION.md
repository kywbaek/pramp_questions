_BST Successor Search_
======================

In a Binary Search Tree (BST), an Inorder Successor of a node is defined as the node with the smallest key greater than the key of the input node (see examples below). Given a node inputNode in a BST, you’re asked to write a function findInOrderSuccessor that returns the Inorder Successor of inputNode. If inputNode has no Inorder Successor, return null.

Explain your solution and analyze its time and space complexities.

<img src="https://www.pramp.com/img/content/img_02.png" width="400">

In this diagram, the inorder successor of 9 is 11 and the inorder successor of 14 is 20.

Example:
In the diagram above, for inputNode whose key = 11

Your function would return:
The Inorder Successor node whose key = 12

Constraints:
- [time limit] 5000ms
- [input] Node inputNode
- [output] Node

Solutions:
- [Java](https://github.com/kywbaek/pramp_questions/blob/master/questions/bst-successor-search/solution.java)
- [JavaScript](https://github.com/kywbaek/pramp_questions/blob/master/questions/bst-successor-search/solution.js)
- [Python](https://github.com/kywbaek/pramp_questions/blob/master/questions/bst-successor-search/solution.py)
