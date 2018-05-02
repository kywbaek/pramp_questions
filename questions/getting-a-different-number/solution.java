import java.util.*;

class Solution {
  static int getDifferentNumber(int[] arr) {
    int n=arr.length;
    Map<Integer,Boolean> map = new HashMap<Integer,Boolean>();
    for (int i=0;i<n;i++) {
      map.put(arr[i],true);
    }
    for (int i=0;i<n;i++) {
      if (map.get(i)==null) {
        return i;
      }
    }
    return n;
  }

  public static void main(String[] args) {
    int[] arr = [0, 1, 2, 3];
    // Expected output: 4
    System.out.println(getDifferentNumber(arr));
  }
}
