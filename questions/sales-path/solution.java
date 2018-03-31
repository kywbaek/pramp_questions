class Solution {

  static class Node {

    int key;
    Node[] children;
    Node parent;

    Node(int cost) {
      this.cost = cost;
      children = null;
      parent = null;
    }
  }

  static class SalesPath {

    int getCheapestCost(Node rootNode) {
      if (rootNode.children==null) {
        return rootNode.cost;
      }

      int minCost = 100000;
      int cost;
      for (Node n:rootNode.children) {
        cost = getCheapestCost(n);
        if (cost<minCost) {
          minCost = cost;
        }
      }

      return minCost + rootNode.cost;
    }
  }

  public static void main(String[] args) {
  }
}
