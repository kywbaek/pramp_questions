_Sales Path_
============

The car manufacturer Honda holds their distribution system in the form of a tree (not necessarily binary). The root is the company itself, and every node in the tree represents a car distributor that receives cars from the parent node and ships them to its children nodes. The leaf nodes are car dealerships that sell cars direct to consumers. In addition, every node holds an integer that is the cost of shipping a car to it.

Take for example the tree below:

<img src="https://www.pramp.com/img/content/img_01.png" width="400">

A path from Honda’s factory to a car dealership, which is a path from the root to a leaf in the tree, is called a Sales Path. The cost of a Sales Path is the sum of the costs for every node in the path. For example, in the tree above one Sales Path is 0→3→0→10, and its cost is 13 (0+3+0+10).

Honda wishes to find the minimal Sales Path cost in its distribution tree. Given a node rootNode, write an function getCheapestCost that calculates the minimal Sales Path cost in the tree.

Implement your function in the most efficient manner and analyze its time and space complexities.

For example:

Given the rootNode of the tree in diagram above

Your function would return:

7 since it’s the minimal Sales Path cost (there are actually two Sales Paths in the tree whose cost is 7: 0→6→1 and 0→3→2→1→1)

Constraints:
- [time limit] 5000ms
- [input] Node rootNode
  - 0 ≤ rootNode.cost ≤ 100000
- [output] integer

Solutions:
- [Java](https://github.com/kywbaek/pramp_questions/blob/master/questions/sales-path/solution.java)
- [JavaScript](https://github.com/kywbaek/pramp_questions/blob/master/questions/sales-path/solution.js)
- [Python](https://github.com/kywbaek/pramp_questions/blob/master/questions/sales-path/solution.py)
