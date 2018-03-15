class Solution {

  static int calcDroneMinEnergy(int[][] route) {
    int maxH = route[0][2];
    for (int i=1;i<route.length;i++) {
      if (route[i][2] > maxH) {
        maxH = route[i][2];
      }
    }
    return maxH - route[0][2];
  }

  public static void main(String[] args) {
  }
}
