class Solution {
    static int solution(String str) {
        int open = 0;
        int close = 0;

        for (int i=0;i<str.length();i++) {
            if (str.charAt(i)=="(".charAt(0)) {
                open++;
            } else {
                if (open>0) {
                    open--;
                } else {
                    close++;
                }
            }
        }
        return oepn + close;
    }

    public static void main(String[] args) {
    }
}
