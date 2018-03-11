// when two arrays are of similar size
function findDuplicates(arr1, arr2) {
  const arr = [];
  let a = 0, b = 0;

  while (a<arr1.length && b<arr2.length) {
    if (arr1[a]<arr2[b]) {
      a++
    } else if (arr1[a]>arr2[b]) {
      b++
    } else {
      arr.push(arr1[a])
      a++
      b++
    }
  }
  return arr;
}

/*
Time Complexity: O(N+M) since in the worst case scenario we traverse both arrays once. Note that O(N+M) is a linear time complexity because the input size is O(N+M) as well.

Space Complexity: the variable duplicates is the only dynamic auxiliary space we’re using in the algorithm. In the worst case scenario, the size of duplicates is going to be as big as big as the smaller input array. For instance, when the smaller array is fully contained within the bigger one. The space complexity is therefore O(N), where N ≤ M.
*/


// when one arr is significantly larger than the other
function binarySearch(arr, x) {
  let lo = 0, hi = arr.length - 1, md;

  while (lo<=hi) {
    md = Math.floor((lo+hi)/2);
    if (arr[md]>x) {
      hi = md - 1;
    } else if (arr[md]<x) {
      lo = md + 1;
    } else {
      return md;
    }
  }
  return -1;
}

function findDuplicates(arr1, arr2) {
  if (arr1.length<arr2.length) {
    return findDuplicates(arr2,arr1);
  }

  const arr = [];
  for (let i=0;i<arr2.length;i++) {
    if (binarySearch(arr1,arr2[i])>-1) {
      arr.push(arr2[i]);
    }
  }
  return arr;
}
/*
Time Complexity: we running a binary search on arr2 N times. Hence the time complexity is O(N⋅log(M)). So why is this algorithm better than the previous one when M ≫ N? To demonstrate that let’s analyze the case that M = N^C, where C is a constant such that C 2. In this case, the time complexity of the second algorithm is: O(N⋅log(M)) = O(N⋅log(N^C)) = O(C⋅N⋅log(N)) = O(N⋅log(N)) And the time complexity of the first algorithm is: O(N + M) = O(N + N^C) = O(N^C) As we all know O(N^C) > O(N⋅log(N)).

Space Complexity: the variable duplicates is the only dynamic auxiliary space we’re using in the algorithm. In the worst case scenario, the size of duplicates is going to be as big as big as the smaller input array. For instance, when the smaller array is fully contained within the bigger one. The space complexity is therefore O(N), where N ≤ M.
*/
