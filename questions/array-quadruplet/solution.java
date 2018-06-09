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
    int [] arr = {2, 7, 4, 0, 9, 5, 1, 3};
    int s = 20;

    // Expected output: [0, 4, 7, 9]
    /*  The ordered quadruplet of (7, 4, 0, 9) whose sum is 20. Notice that there
       are two other quadruplets whose sum is 20: (7, 9, 1, 3) and (2, 4, 9, 5),
       but again you’re asked to return the just one quadruplet (in an ascending order) */
    int [] output = findArrayQuadruplet(arr, s);
    for (int i: output) {
      System.out.print(i+" ");
    }
  }
}
