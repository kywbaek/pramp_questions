function bracketMatch(text) {
  let oB = 0;
  let cB = 0;
  for (let i=0; i<text.length; i++) {
    if (text[i] === '(') {
      oB++;
    }
    else {
      if (oB > 0) {
        oB--;
      }
      else {
        cB++;
      };
    }
  }

  return oB + cB
}

console.log(bracketMatch("()))("));

/*
Time Complexity: O(N), where N is the length of text. We go through every character of text and for every character we carry out a constant number of steps.
Space Complexity: O(1) since we only used a constant amount of space throughout the algorithm.
*/
