import java.util.*;

class Solution {
  static ArrayList<Character> getCandidates(char[][] board, int row, int col) {
    ArrayList<Character> candidates = new ArrayList<Character>();

    char[] numbers = {'1','2','3','4','5','6','7','8','9'};
    for (char n: numbers) {
      boolean collision = false;
      for (int i=0;i<9;i++) {
        if (board[row][i]==n ||
            board[i][col]==n ||
            board[(row-row%3)+(int)(i/3)][(col-col%3)+i%3]==n) {
          collision = true;
          break;
        }
      }
      if (!collision) {
        candidates.add(n);
      }
    }
    return candidates;
  }

  static boolean sudokuSolve(char[][] board) {
    int row=-1, col=-1;
    ArrayList<Character> candidates = null;

    for (int r=0;r<9;r++) {
      for (int c=0;c<9;c++) {
        if (board[r][c]=='.') {
          ArrayList<Character> newCandidates = getCandidates(board,r,c);
          if (candidates == null || newCandidates.size() < candidates.size()) {
            candidates = newCandidates;
            row = r;
            col = c;
          }
        }
      }
    }

    if (candidates == null) {
      return true;
    }

    for (char val:candidates) {
      board[row][col] = val;
      if (sudokuSolve(board)) {
        return true;
      }

      board[row][col] = '.';
    }

    return false;
  }

  public static void main(String[] args) {
  }
}
