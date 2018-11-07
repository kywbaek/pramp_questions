import java.util.Arrays;

class Solution {
  // insertionSort
  static int[] sortKMessedArray(int[] arr, int k) {
    for (int i=1;i<arr.length;i++) {
      int x = arr[i];
      int j = i-1;

      while (j>=0 && arr[j]>x) {
        arr[j+1] = arr[j];
        j--;
      }
      arr[j+1]=x;
    }
    return arr;
  }

  public static void main(String[] args) {
    int[] arr = {1, 4, 5, 2, 3, 7, 8, 6, 10, 9};
    int k = 2;
    // Expected output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    // since this is the number of islands in binaryMatrix
    System.out.println(Arrays.toString(sortKMessedArray(arr, k)));
  }
}
