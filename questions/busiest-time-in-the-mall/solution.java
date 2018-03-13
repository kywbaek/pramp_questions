class Solution {

  static int findBusiestPeriod(int[][] data) {
    int maxV = 0, curV = 0, time = 0, n = data.length;
    for (int i=0;i<n;i++) {
      if (data[i][2]==1) {
        curV+=data[i][1];
      } else {
        curV-=data[i][1];
      }
      if (i==n-1 || data[i][0]!=data[i+1][0]) {
        if (curV > maxV) {
          maxV = curV;
          time = data[i][0];
        }
      }
    }
    return time;
  }

  public static void main(String[] args) {
  }
}
