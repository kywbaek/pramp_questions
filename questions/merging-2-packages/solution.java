import java.util.Arrays;

class Solution {

  static int[] getIndicesOfItemWeights(int[] arr, int limit) {
    Map<Integer,Integer> myMap = new HashMap<Integer,Integer>();
    for (int i=0;i<arr.length;i++) {
      if (myMap.containsKey(limit-arr[i])) {
        int[] result = {i, myMap.get(limit-arr[i])};
        return result;
      } else {
        myMap.put(arr[i],i);
      }
    }
    return new int[0];
  }

  public static void main(String[] args) {
    int[] arr = {4, 6, 10, 15, 16};
    int lim = 21;

    // Expected output: [3, 1]
    // since these are the indices of the weights 6 and 15 whose sum equals to 21
    System.out.println(Arrays.toString(getIndicesOfItemWeights(arr, lim)));
  }
}
