class Solution {
    static int solution(String str) {
        int open = 0;
        int close = 0;

        for (int i=0;i<str.length();i++) {
            if (str.charAt(i)=='(') {
                open++;
            } else {
                if (open>0) {
                    open--;
                } else {
                    close++;
                }
            }
        }
        return open + close;
    }

    public static void main(String[] args) {
        String text = "(()";
        // Expected output: 1
        System.out.println(solution(text));

        text = "(())";
        // Expected output: 0
        System.out.println(solution(text));

        text = "())(";
        // Expected output: 2
        System.out.println(solution(text));
    }
}
