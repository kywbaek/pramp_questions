function getCheapestCost(rootNode) {
  const n = rootNode.children.length;

  if (n===0) {
    return rootNode.cost;
  }
  else {
    let cheapestCost = 10000;
    for (let i=0;i<n;i++) {
      let pathCost = getCheapestCost(rootNode.children[i]);
      if (pathCost < cheapestCost) {
        cheapestCost = pathCost;
      }
    }
    return cheapestCost + rootNode.cost;
  }
}

/******************************************
 * Use the helper code below to implement *
 * and test your function above           *
 ******************************************/

// Constructor to create a new Node
function Node(cost) {
  this.cost = cost;
  this.children = [];
}
function addChildren(node, children) {
  node.children = node.children.concat(children)
}

let root = new Node(0)

let node1 = new Node(5)
let node2 = new Node(3)
let node3 = new Node(6)
addChildren(root,[node1, node2, node3])

let node4 = new Node(4)
addChildren(node1,[node4])

let node5 = new Node(2)
let node6 = new Node(0)
addChildren(node2,[node5, node6])

let node7 = new Node(1)
let node8 = new Node(5)
addChildren(node3,[node7, node8])

let node9 = new Node(1)
addChildren(node5,[node9])

let node10 = new Node(10)
addChildren(node6,[node10])

let node11 = new Node(1)
addChildren(node9,[node11])

console.log(getCheapestCost(root));

/*
Time Complexity: let N be the number of nodes in the tree. Notice that getCheapestCost is applied to every node exactly once. Therefore, there are overall O(N) calls to getCheapestCost.

Space Complexity: every time the function recurses, it consumes only a constant amount of space. However, due to the nature of the recursion we used, the stack call holds N instances of getCheapestCost which makes the total space complexity to be O(N).
*/
