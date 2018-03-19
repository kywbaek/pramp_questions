import java.util.*;

class Solution {
  static int[] findDuplicates(int[] arr1, int[] arr2) {
    int a = 0, b = 0;
    ArrayList<Integer> arr = new ArrayList<Integer>();
    while (a<arr1.length && b<arr2.length) {
      if (arr1[a]>arr2[b]) {
        b++;
      } else if (arr1[a]<arr2[b]) {
        a++;
      } else {
        arr.add(arr1[a]);
        a++;
        b++;
      }
    }
    int[] result = new int[arr.size()];
    for (int i=0; i < result.length; i++) {
        result[i] = arr.get(i).intValue();
    }

    return result;
  }

  public static void main(String[] args) {
  }
}
