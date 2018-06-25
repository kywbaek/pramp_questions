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
    int[][] slotsA = {{10, 50}, {60, 120}, {140, 210}};
    int[][] slotsB = {{0, 15}, {60, 70}};
    int dur = 8;
    // Expected output: [60, 68]
    int[] output = meetingPlanner(slotsA, slotsB, dur);
    for (int i: output) {
      System.out.print(i+" ");
    }

    slotsA = {{10, 50}, {60, 120}, {140, 210}};
    slotsB = {{0, 15}, {60, 70}};
    dur = 12;
    // Expected output: []
    // since there is no common slot whose duration is 12
    output = meetingPlanner(slotsA, slotsB, dur);
    for (int i: output) {
      System.out.print(i+" ");
    }
  }

}
