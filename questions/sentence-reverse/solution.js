function reverseWords(arr) {
  let n = arr.length;
  let start = 0;
  reverse(arr, 0, n-1);
  for (i=0;i<n;i++) {
    if (arr[i] === " ") {
      reverse(arr,start,i-1);
      start = i+1;
    } else if (i === n-1) {
      reverse(arr,start,n-1);
    }
  }
  return arr;
}

function reverse(arr, start, end) {
  let temp;
  while (end > start) {
    temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  };
}

const arr = ["a"," "," ","b"];
reverseWords(arr);
console.log(arr);

/*
Time Complexity: traversing the array twice with a constant number of actions for each item is linear O(N).

Space Complexity: using iteration indices and one temp variable takes constant O(1) memory.
*/
