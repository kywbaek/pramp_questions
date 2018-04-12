class Solution {

  static int[] findArrayQuadruplet(int[] arr, int s) {
    int n = arr.length;
    int[] emptyArr = new int[0];
    if (n<4) {
      return emptyArr;
    }
    int r,lo,hi;
    Arrays.sort(arr);
    for (int i=0;i<n-3;i++) {
      for (int j=i+1;j<n-2;j++) {
        r = s - (arr[i]+arr[j]);
        lo = j+1;
        hi = n-1;
        while (lo<hi) {
          if (arr[lo]+arr[hi]<r) {
            lo++;
          } else if (arr[lo]+arr[hi]>r) {
            hi--;
          } else {
            int[] result = {arr[i],arr[j],arr[lo],arr[hi]};
            return result;
          }
        }
      }
    }
    return emptyArr;
  }

  public static void main(String[] args) {
  }
}
