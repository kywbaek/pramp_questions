function meetingPlanner(slotsA, slotsB, dur) {
  let a=0;
  let b=0;
  let durS,durE;
  while (a<slotsA.length && b<slotsB.length) {
    durS = Math.max(slotsA[a][0],slotsB[b][0]);
    durE = Math.min(slotsA[a][1],slotsB[b][1]);
    if ((durE-durS)>=dur) {
      return [durS,durS+dur];
    }
    if (slotsA[a][1]<slotsB[b][1]) {
      a++;
    } else {
      b++;
    }
  }
  return [];
}
/*
Time Complexity: we are traversing every input array at most once, hence the time complexity is linear, i.e O(N+M), where N and N are lengths of slotsA and slotsB, respectively.
Space Complexity: it’s O(1). We are using four auxiliary variables, all of which are occupying only a constant amount of space.
*/
