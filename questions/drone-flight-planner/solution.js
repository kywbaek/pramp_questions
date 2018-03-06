function calcDroneMinEnergy(route) {
  let maxH = route[0][2];
  for (let i=1;i<route.length;i++) {
    if (route[i][2] > maxH) {
      maxH = route[i][2];
    }
  }
  return maxH - route[0][2];
}

/*
Time Complexity: O(N). We have a single loop that iterates once over route and conducts a constant number of operations at each iteration.

Space Complexity: O(1). We are using only one auxiliary variable in the algorithm, maxHeight, and it uses a constant amount of space.
*/
