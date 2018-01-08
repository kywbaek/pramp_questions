function indexEqualsValueSearch(arr) {
  let lo = 0;
  let hi = arr.length - 1;

  while (lo<=hi) {
    let md = Math.floor((lo+hi)/2);
    if (arr[md]<md) {
      lo = md + 1;
    } else if ((arr[md]===md) && ((md===0) || (arr[md-1]<(md-1)))) {
      return md;
    } else {
      hi = md - 1;
    }
  }
  return -1;
}

/*
Time Complexity: O(log(N)) since we use a binary search where the input size is reduced in half on each step. Calculating arr[i] - i as the condition instead of arr[i] is done in constant time and has no impact on the asymptotic time complexity.

Space Complexity: it’s O(1) since we’re only a constant amount of memory (i.e. the variables start and end).
*/
