function findGrantsCap(grantsArray, newBudget) {
  const n = grantsArray.length;
  grantsArray.sort((a,b) => b-a);
  grantsArray.push(0);
  let surplus = grantsArray.reduce((a,b) => a+b) - newBudget;

  if (surplus <= 0) {
    return grantsArray[0];
  }

  for (let i=0;i<n;i++) {
    surplus -= (i+1) * (grantsArray[i] - grantsArray[i+1]);
    if (surplus <= 0) {
      return grantsArray[i+1] - (surplus/(i+1));
    }
  }
}

console.log(findGrantsCap([2, 100, 50, 120, 1000], 190));

/*
Time Complexity: sorting the grants array takes O(N⋅log(N)), calculating the surplus is O(N) due to the grants summation, and finally the for loop takes another O(N). In total, the time complexity is O(N⋅log(N)) before sorting and O(N) after sorting.

Space Complexity: throughout the algorithm we used only a constant amount of auxiliary space. The space complexity is therefore O(1).
*/
