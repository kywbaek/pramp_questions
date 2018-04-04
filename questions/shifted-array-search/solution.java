class Solution {
  static int BS(int[] arr, int lo, int hi, int num) {
    int md;
    while(lo<=hi) {
      md = (lo+hi)/2;
      if (arr[md]<num) {
        lo = md + 1;
      } else if (arr[md]>num) {
        hi = md - 1;
      } else {
        return md;
      }
    }
    return -1;
  }

  static int findPivot(int[] arr) {
    int md, lo=0, hi=arr.length-1;
    while(lo<=hi) {
      md = (lo+hi)/2;
      if (md==0 || arr[md]<arr[md-1]) {
        return md;
      }
      if (arr[md]>arr[0]) {
        lo = md + 1;
      } else {
        hi = md - 1;
      }
    }
    return 0;
  }

  static int shiftedArrSearch(int[] shiftArr, int num) {
    int pivot = findPivot(shiftArr);
    if (pivot==0 || num < shiftArr[0]) {
      return BS(shiftArr, pivot, shiftArr.length-1, num);
    } else {
      return BS(shiftArr, 0, pivot-1, num);
    }
  }

  public static void main(String[] args) {
  }
}
