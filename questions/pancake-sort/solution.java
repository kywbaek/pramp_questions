import java.util.Arrays;

class Solution {
  static void flip(int[] arr, int k) {
    int lo=0, hi=k-1;
    while (lo<hi) {
      int temp = arr[hi];
      arr[hi] = arr[lo];
      arr[lo] = temp;
      lo++;
      hi--;
    }
  }

  static int getMaxIndex(int[] arr, int k) {
    int maxE = arr[0];
    int maxI = 0;
    for (int i=1;i<k;i++) {
      if (arr[i]>maxE) {
        maxE = arr[i];
        maxI = i;
      }
    }
    return maxI;
  }

  static int[] pancakeSort(int[] arr) {
    int maxInd;
    for (int i=arr.length;i>1;i--) {
      maxInd = getMaxIndex(arr,i);
      flip(arr, maxInd+1);
      flip(arr, i);
    }
    return arr;
  }

  public static void main(String[] args) {
    int[] arr = {1, 5, 4, 3, 2};

    // Expected output: [1, 2, 3, 4, 5]
    System.out.println(Arrays.toString(pancakeSort(arr)));
  }
}
