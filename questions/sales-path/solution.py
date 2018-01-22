def get_cheapest_cost(rootNode):
  n = len(rootNode.children)

  if n == 0:
    return rootNode.cost
  else:
    cheapestCost = 100000
    for i in xrange(n):
      pathCost = get_cheapest_cost(rootNode.children[i])
      if pathCost < cheapestCost:
        cheapestCost = pathCost

  return cheapestCost + rootNode.cost


##########################################
# Use the helper code below to implement #
# and test your function above           #
##########################################

# A node


class Node:

    # Constructor to create a new node
  def __init__(self, cost):
    self.cost = cost
    self.children = []
    self.parent = None

  def addChildren(self, children):
    self.children += children
    for child in children:
      child.parent = self


rootNode = Node(0)

node1 = Node(5)
node2 = Node(3)
node3 = Node(6)
rootNode.addChildren([node1, node2, node3])

node4 = Node(4)
node1.addChildren([node4])

node5 = Node(2)
node6 = Node(0)
node2.addChildren([node5, node6])

node7 = Node(1)
node8 = Node(5)
node3.addChildren([node7, node8])

node9 = Node(1)
node5.addChildren([node9])

node10 = Node(10)
node6.addChildren([node10])

node11 = Node(1)
node9.addChildren([node11])

print get_cheapest_cost(rootNode)
