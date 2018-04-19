class Solution {

  static int[] meetingPlanner(int[][] slotsA, int[][] slotsB, int dur) {
    int ia=0, ib=0;
    int start, end;
    while (ia<slotsA.length && ib<slotsB.length) {
      start = Math.max(slotsA[ia][0], slotsB[ib][0]);
      end = Math.min(slotsA[ia][1], slotsB[ib][1]);

      if (start + dur <= end) {
        return new int[] {start, start+dur};
      }

      if (slotsA[ia][1] < slotsB[ib][1]) {
        ia++;
      } else {
        ib++;
      }
    }
    return new int[] {};
  }

  public static void main(String[] args) {

  }

}
