function root(x, n) {
  if (x === 0) {
    return 0;
  }
  let hi = Math.max(1,x);
  let lo = 0;
  let md = (hi+lo)/2;

  while(md-lo>=0.001) {
    if (Math.pow(md,n)<x) {
      lo = md;
    } else if (Math.pow(md,n)>x) {
      hi = md;
    } else {
      break;
    }
    md = (hi+lo)/2;
  }
  return parseFloat(md.toFixed(3));
}

/*
Time Complexity: notice that every loop iteration is done in O(1), under the assumption that the power function takes a constant time. The initial error is x, and the error is multiplied by 0.5 in every iteration. Thus the number of iterations is the minimal k such that: 2^(-k) x<0.001 i.e. 2^(-k)<(0.001 / x) k >log(x) + 3log(10) = O(log(x)) The number of iterations is therefore O(log(x)), meaning the total runtime is O(log(x)) if we refer to the value stored in x, or O(x) if we refer to the number of bits required to represent x (since it takes Log(x) in average bits to represent a number x).

Space Complexity: O(1), since we only need a constant number of variables for the algorithm.
*/
