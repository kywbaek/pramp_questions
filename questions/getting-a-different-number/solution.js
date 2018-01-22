function getDifferentNumberWithSet(arr) {
  const n = arr.length;
  const mySet = new Set(arr);
  for (let i=0;i<n;i++) {
    if (!mySet.has(i)) {
      return i;
    }
  }
  return n
}

function getDifferentNumber(arr) {
  const n = arr.length;
  let temp,temp1
  for (let i=0;i<n;i++) {
    temp = arr[i];
    while (temp<n && temp!=arr[temp]) {
      temp1 = arr[temp];
      arr[temp] = temp;
      temp = temp1;
    }
  }
  for (i=0;i<n;i++) {
    if (i!=arr[i]) {
      return i;
    }
  }
  return n;
}

const arr = [4, 1, 0, 2];
console.log(getDifferentNumber(arr))

/*
Time Complexity: at first glance, one might think that due to the two nested loops (a while loop inside a for loop) that we use to sort the array, the time complexity is O(N^2). However, this is incorrect. The actual time complexity of the two nested loops is linear. The reason is that every number is at most moved once. For those already in their target indices, the while loop will end immediately since the condition arr[temp] != temp isn’t met. In the second part of the code we have another loop whose time complexity is linear. The total time complexity is therefore O(N).

Space Complexity: we use only constant space. Hence the space complexity is O(1).
*/
