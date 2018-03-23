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
  }
}
