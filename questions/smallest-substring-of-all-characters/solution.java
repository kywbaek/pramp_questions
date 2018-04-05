import java.util.*;

class Solution {

  static String getShortestUniqueSubstring(char[] arr, String str) {
    int headIndex = 0;
    String result = "";
    int uniqueCounter = 0;
    Map<Character, Integer> countMap = new HashMap<Character, Integer>();

    for (int i=0;i<arr.length;i++) {
      countMap.put(arr[i], 0);
    }
    for (int tailIndex=0;tailIndex<str.length();tailIndex++) {
      char tailChar = str.charAt(tailIndex);

      if (!countMap.containsKey(tailChar)) {
        continue;
      }

      int tailCount = countMap.get(tailChar);
      if (tailCount == 0) {
        uniqueCounter++;
      }

      countMap.put(tailChar, tailCount+1);

      while (uniqueCounter == arr.length) {
        int tempLength = tailIndex - headIndex + 1;
        if (tempLength == arr.length) {
          return str.substring(headIndex, tailIndex+1);
        }

        if (result == "" || tempLength < result.length()) {
          result = str.substring(headIndex, tailIndex+1);
        }

        char headChar = str.charAt(headIndex);

        if (countMap.containsKey(headChar)) {
          int headCount = countMap.get(headChar)-1;
          if (headCount == 0) {
            uniqueCounter--;
          }
          countMap.put(headChar, headCount);
        }

        headIndex++;
      }
    }
    return result;
  }

  public static void main(String[] args) {
  }
}
