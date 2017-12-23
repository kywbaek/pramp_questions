function shiftedArrSearch(shiftArr, num) {
  const pivot = findPivot(shiftArr);
  if (num === shiftArr[pivot]) {
    return pivot;
  } else if (pivot===0 || num<shiftArr[0]) {
    return binarySearch(shiftArr, num, pivot+1);
  } else {
    return binarySearch(shiftArr, num, 0, pivot-1);
  }
}

function binarySearch(arr, num, low=0, high=null) {
  high = high || arr.length - 1
  while (low<=high) {
    let mid = Math.floor((low+high)/2);
    if (arr[mid]<num) {
      low = mid + 1;
    }
    else if (arr[mid]>num) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

function findPivot(arr) {
  let low = 0;
  let high = arr.length-1;
  while (low<=high) {
    let pivot = Math.floor((low+high)/2);
    if (pivot === 0 || arr[pivot] < arr[pivot-1]) {
      return pivot;
    } else if (arr[0]<arr[pivot]) {
      low = pivot + 1;
    } else {
      high = pivot - 1;
    }
  }
}

const arr = [9, 12, 17, 2, 4, 5];
let result = findPivot(arr);
console.log(result);

/*
Time Complexity: the time complexity of findPivotPoint is O(log((N)) since it’s essentially a slightly modified version of the binary search algorithm. The time complexity of binarySearch is obviously O(log((N)) as well. The total time complexity is therefore O(log((N)).

Space Complexity: throughout the entire algorithm we used only a constant amount of space, hence the space complexity is O(1).
*/
