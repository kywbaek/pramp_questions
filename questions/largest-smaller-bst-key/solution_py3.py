##########################################################
# CODE INSTRUCTIONS:                                     #
# 1) The method findLargestSmallerKey you're asked       #
#    to implement is located at line 30.                 #
# 2) Use the helper code below to implement it.          #
# 3) In a nutshell, the helper code allows you to        #
#    to build a Binary Search Tree.                      #
# 4) Jump to line 71 to see an example for how the       #
#    helper code is used to test findLargestSmallerKey.  #
##########################################################


# A node
class Node:

  # Constructor to create a new node
  def __init__(self, key):
    self.key = key
    self.left = None
    self.right = None
    self.parent = None

# A binary search tree


class BinarySearchTree(object):

  # Constructor to create a new BST
  def __init__(self):
    self.root = None

  def find_largest_smaller_key(self, num):
    result = -1
    node = self.root
    while node:
      if node.key < num:
        result = node.key
        node = node.right
      else:
        node = node.left

    return result

  # Given a binary search tree and a number, inserts a
  # new node with the given number in the correct place
  # in the tree. Returns the new root pointer which the
  # caller should then use(the standard trick to avoid
  # using reference parameters)
  def insert(self, key):

      # 1) If tree is empty, create the root
    if not self.root:
      self.root = Node(key)
      return

    # 2) Otherwise, create a node with the key
    #    and traverse down the tree to find where to
    #    to insert the new node
    currentNode = self.root
    newNode = Node(key)

    while currentNode:
      if key < currentNode.key:
        if not currentNode.left:
          currentNode.left = newNode
          newNode.parent = currentNode
          break
        else:
          currentNode = currentNode.left
      else:
        if not currentNode.right:
          currentNode.right = newNode
          newNode.parent = currentNode
          break
        else:
          currentNode = currentNode.right

#########################################
# Driver program to test above function #
#########################################


bst = BinarySearchTree()

# Create the tree given in the above diagram
bst.insert(20)
bst.insert(9)
bst.insert(25)
bst.insert(5)
bst.insert(12)
bst.insert(11)
bst.insert(14)

result = bst.find_largest_smaller_key(10)

print(result)
