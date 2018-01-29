function findArrayQuadruplet(arr, s) {
  const n = arr.length
  if (n<4) {
    return [];
  }
  arr.sort((a,b)=>a-b);
  console.log(arr)
  let i,j,r,lo,hi;
  for (i=0;i<n-3;i++) {
    for (j=i+1;j<n-2;j++) {
      r = s - (arr[i]+arr[j]);
      lo = j+1;
      hi = n-1;
      while (lo<hi) {
        if ((arr[lo]+arr[hi])<r) {
          lo++;
        } else if ((arr[lo]+arr[hi])>r) {
          hi--;
        } else {
          return [arr[i],arr[j],arr[lo],arr[hi]];
        }
      }
    }
  }
  return [];
}

let arr = [1,2,3,4,5,9,19,12,12,19]
console.log(findArrayQuadruplet(arr, 40))
/*
Time Complexity: we have three nested loops whose combined time complexity is O(N^3), where N is the size of arr. We also using sorting in the beginning and that’s additional O(N⋅log(N)). The total time complexity is still O(N^3) because O(N⋅log(N)) gets thrown away since in the asymptotic calculation it’s not material.
Space Complexity: O(1) as we used only a constant amount of space throughout the algorithm.
*/
