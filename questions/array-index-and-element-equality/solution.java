class Solution {

  static int indexEqualsValueSearch(int[] arr) {
    int lo=0;
    int hi=arr.length - 1;

    while (lo<=hi) {
      int md= (int) ((lo+hi)/2);
      if (arr[md]<md) {
        lo = md + 1;
      } else if (arr[md]==md && (md==0 || arr[md-1]<(md-1))) {
        return md;
      } else {
        hi = md - 1;
      }
    }
    return -1;
  }

  public static void main(String[] args) {
  }
}
