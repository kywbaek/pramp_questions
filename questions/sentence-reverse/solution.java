class Solution {
  static void reverse(char[] arr, int lo, int hi) {
    while (lo<hi) {
      char temp = arr[lo];
      arr[lo] = arr[hi];
      arr[hi] = temp;
      lo++;
      hi--;
    }
  }

  static char[] reverseWords(char[] arr) {
    int n = arr.length;
    reverse(arr,0,n-1);
    int pivot = 0;
    for (int i=0;i<n;i++) {
      if (arr[i]==' ') {
        reverse(arr,pivot,i-1);
        pivot = i+1;
      } else if (i==n-1) {
        reverse(arr,pivot,i);
      }
    }
    return arr;
  }

  public static void main(String[] args) {
    char[] arr = { 'p', 'e', 'r', 'f', 'e', 'c', 't', '  ',
                'm', 'a', 'k', 'e', 's', '  ',
                'p', 'r', 'a', 'c', 't', 'i', 'c', 'e' };
    /* Expected output: [ 'p', 'r', 'a', 'c', 't', 'i', 'c', 'e', '  ',
                          'm', 'a', 'k', 'e', 's', '  ',
                          'p', 'e', 'r', 'f', 'e', 'c', 't' ] */
    char[] output = reverseWords(arr);
    for (char c: output) {
      System.out.print(c);
      System.out.print(" ");
    }
  }
}
