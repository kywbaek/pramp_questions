function calcDroneMinEnergy(route) {
  let maxH = route[0][2];
  for (let i=1;i<route.length;i++) {
    if (route[i][2] > maxH) {
      maxH = route[i][2];
    }
  }
  return maxH - route[0][2];
}

route = [[0,   2, 10],
        [3,   5,  0],
        [9,  20,  6],
        [10, 12, 15],
        [10, 10,  8]];

// Expected output: 5 #
    /* less than 5 kWh and the drone would crash before the finish line.
      More than `5` kWh and it’d end up with excess energy. */
console.log(calcDroneMinEnergy(route))
/*
Time Complexity: O(N). We have a single loop that iterates once over route and conducts a constant number of operations at each iteration.

Space Complexity: O(1). We are using only one auxiliary variable in the algorithm, maxHeight, and it uses a constant amount of space.
*/
