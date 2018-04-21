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
    int[] arr1 = [8, 10, 2];
    // Expected output: [20, 16, 80] by calculating [10*2, 8*2, 8*10]
    System.out.println(arrayOfArrayProducts(arr1));

    int[] arr2 = [2, 7, 3, 4];
    // Expected output: [84, 24, 56, 42] by calculating [7*3*4, 2*3*4, 2*7*4, 2*7*3]
    System.out.println(arrayOfArrayProducts(arr2));
  }
}
