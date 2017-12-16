function getIndicesOfItemWeights(arr, limit) {
  let m = {};
  for (let i=0;i<arr.length;i++) {
      let self = arr[i];
      let complement = limit-self;
      if (m.hasOwnProperty(complement)) {
          return [i, m[complement]];
      }
      else {
          m[self] = i;
      }
  }
    return [];
}

/*
Time Complexity: going over the array only once, performing constant time work for each weight and assuming we have a good hash function with rare collisions, we get a linear O(N) time complexity.

Space Complexity: we used a map as an auxiliary space. In the worst case scenario, the space complexity of that map is O(N).
*/
