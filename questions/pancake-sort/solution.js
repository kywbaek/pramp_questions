function pancakeSort(arr) {
  for (let i=arr.length;i>1;i--) {
    let maxIndex = getMaxIndex(arr, i);
    flip(arr,maxIndex+1);
    flip(arr,i);
  }
  return arr
}

function getMaxIndex(arr, k) {
  let maxIndex = 0;
  for (let i=0; i<k; i++) {
    if (arr[i]>arr[maxIndex]) {
      maxIndex = i
    }
  }
  return maxIndex
}

function flip(arr, k) {
  let pivot = Math.floor((k+1)/ 2)
  for (let i=0; i<pivot; i++) {
    let tmp = arr[i];
    arr[i] = arr[k-i-1];
    arr[k-i-1] = tmp
   }
  return arr
}

const arr = [1, 5, 4, 3, 2];

console.log(pancakeSort(arr))

/*
Time Complexity: let N be the length of the input array. There are N-1 iterations, in each we place one element in its place. Every iteration takes 2 flips to move every member in the array to its place, and each takes O(N) at most. In addition, every iteration we find the maximal element, which is also done in O(N). There are N-1 iterations that take O(N) time thus in total the algorithm takes O(N^2) time.

Space Complexity: the algorithm doesn’t initiate more than a few auxiliary variables, thus it is entirely in place and uses only O(1) space.
*/
