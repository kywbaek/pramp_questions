class Solution {

  static boolean isMatch(String text, String pattern) {
    return isMatchHelper(text, pattern, 0, 0);
  }

  static boolean isMatchHelper(String text, String pattern, int tInd, int pInd) {
    if (tInd>=text.length()) {
      if (pInd>=pattern.length()) {
        return true;
      } else {
        if (pInd+1<pattern.length() && pattern.charAt(pInd+1)=='*') {
          return isMatchHelper(text, pattern, tInd, pInd+2);
        } else {
          return false;
        }
      }
    } else if (pInd>=pattern.length() && tInd<text.length()) {
      return false;
    } else if (pInd+1<pattern.length() && pattern.charAt(pInd+1)=='*') {
      if (pattern.charAt(pInd)=='.' || text.charAt(tInd)==pattern.charAt(pInd)) {
        return (isMatchHelper(text, pattern, tInd, pInd+2)) || (isMatchHelper(text, pattern, tInd+1, pInd));
      } else {
        return isMatchHelper(text, pattern, tInd, pInd+2);
      }
    } else if (pattern.charAt(pInd)=='.' || pattern.charAt(pInd)==text.charAt(tInd)) {
      return isMatchHelper(text, pattern, tInd+1, pInd+1);
    } else {
      return false;
    }
  }
  public static void main(String[] args) {

  }

}
