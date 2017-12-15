// Brute Force
function arrayOfArrayProducts1(arr) {
  let result = [];
  let n = arr.length;
  if (n<=1) {
    return result;
  }
  for (let i=0;i<n;i++) {
    let product = 1;
    for (let j=0;j<n;j++) {
      if (i!=j) {
        product*=arr[j];
      }
    }
    result.push(product);
  }
  return result;
}

function arrayOfArrayProducts(arr) {
  let n = arr.length;
  if( n <= 1) {
    return [];
  }

  let result = [];
  let product = 1;
  for (let i=0;i<n;i++) {
      result.push(product);
      product *= arr[i];
  }

  product = 1;
  for (let i=n-1;i>=0;i--) {
      result[i] *= product;
      product *= arr[i];
  }
  return result;
}

/*
Time Complexity: two passes through arr and constant time work for each value in it, bring us to linear O(N) runtime complexity.

Space Complexity: from using an additional array of length n (i.e. result) to hold the products, we get a linear O(N) space complexity.
*/
