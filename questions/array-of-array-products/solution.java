import java.io.*;
import java.util.*;

class Solution {

  static int[] arrayOfArrayProducts(int[] arr) {
    if (arr.length<=1) {
      return new int[0];
    }
    int product = 1;
    int[] result = new int[arr.length];
    result[0]=1;
    for (int i=1;i<arr.length;i++) {
      product*=arr[i-1];
      result[i] = product;
    }
    product = 1;
    for (int i=arr.length-2;i>=0;i--) {
      product*=arr[i+1];
      result[i]*=product;
    }
    return result;
  }

  public static void main(String[] args) {
  }
}
