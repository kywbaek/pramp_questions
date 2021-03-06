class Solution {

  static double root(double x, int n) {
    double lo = 0.0, hi = x, md = (lo+hi)/2.0;
    while ((hi-lo)>=0.002) {
      if (Math.pow(md,n)>x) {
        hi = md;
      } else if (Math.pow(md,n)<x) {
        lo = md;
      } else {
        break;
      }
      md = (lo+hi)/2.0;
    }
    return md;
  }

  public static void main(String[] args) {
    double x = 7;
    int n = 3;
    // Expected output: 1.913
    System.out.println(root(x, n));

    x = 9;
    n = 2;
    // Expected output: 3
    System.out.println(root(x, n));
  }
}
