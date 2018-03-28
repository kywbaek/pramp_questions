import java.util.*;

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
  }
}
