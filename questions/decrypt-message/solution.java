class Solution {
  static String decrypt(String word) {
    String s = "";
    int oldValue = 1, newValue;
    int a = (int) 'a';

    for (int i=0;i<word.length();i++) {
      newValue = (int) (word.charAt(i)) - oldValue;
      oldValue = (int) (word.charAt(i));

      while(newValue<a) {
        newValue+=26;
      }
      s = s + (char) newValue;
    }
    return s;
  }

  public static void main(String[] args) {
  }
}
