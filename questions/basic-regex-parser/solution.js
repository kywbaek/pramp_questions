function isMatch(text, pattern) {
  const pLen = pattern.length;
  const tLen = text.length;

  function isMatchWithIndex(text, pattern, tInd, pInd) {
    if (pInd>=pLen) {
      if (tInd>=tLen) {
        return true;
      } else {
        return false;
      }
    } else {
      if (pInd<(pLen-1) && (pattern[pInd+1]==='*')) {
        if (pattern[pInd] != '.') {
          while (tInd<tLen && text[tInd]===pattern[pInd]) {
            tInd++;
          };
          return isMatchWithIndex(text, pattern, tInd, pInd+2);
        } else {
          if ((pInd<pLen-2) && (pattern[pInd+2]===text[tInd])) {
            return isMatchWithIndex(text, pattern, tInd+1, pInd+2);
          } else {
            while (tInd < tLen && text[tInd+1] === text[tInd]) {
              tInd++;
            };
            return isMatchWithIndex(text, pattern, tInd+1, pInd+2);
          }
        }
      } else {
        if ((pattern[pInd] === '.') || (pattern[pInd] === text[tInd])) {
          return isMatchWithIndex(text, pattern, tInd+1, pInd+1);
        } else {
          return false;
        }
      }
    }
  };

  return isMatchWithIndex(text, pattern, 0,0);
}

/*
Time Complexity: in the worst case, the solution above runs in time exponential in the size of the pattern. Patterns that take the most time, are the ones with multiple '*' symbols, that may provoke an exponential number of recursion calls: For example, for the text “bbbbbbbb” and the pattern “.*.*.*.*a”, this function will open a new recursive call to itself for every single way to divide the text in four (the number of “.*”).

Space Complexity: the space required is also exponential because of the number of recursion calls filling up the stack. There are, in fact, algorithms that solve the matching problem in polynomial time and space. They are based on Nondeterministic Finite State Machines, which we didn’t provide here due to the fact that it requires more knowledge in theoretical computer science.
*/
