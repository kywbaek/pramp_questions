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
    int[] arr1 = [1, 2, 3, 5, 6, 7];
    int[] arr2 = [3, 6, 7, 8, 20];
    // Expected output: [3, 6, 7] since only these three values are both in arr1 and arr2
    System.out.println(findDuplicates(arr1,arr2));
  }
}
