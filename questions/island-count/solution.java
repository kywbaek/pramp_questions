import java.util.*;

class Solution {
  static void pushIfValid(Queue q,int row,int col,int x,int y) {
    if (x>=0 && x<row && y>=0 && y<col) {
      q.add(new int[] {x,y});
    }
  }
  static void markIsland(int[][] binaryMatrix,int row,int col,int r,int c) {
    Queue<int []> q = new LinkedList<int []>();
    q.add(new int[] {r,c});
    while (q.peek()!=null) {
      int[] item = q.poll();
      int x = item[0], y = item[1];
      if (binaryMatrix[x][y]==1) {
        binaryMatrix[x][y]=2;
        pushIfValid(q,row,col,x-1,y);
        pushIfValid(q,row,col,x+1,y);
        pushIfValid(q,row,col,x,y-1);
        pushIfValid(q,row,col,x,y+1);
      }
    }
  }

  static int getNumberOfIslands(int[][] binaryMatrix) {
    int islands = 0;
    int row = binaryMatrix.length, col = binaryMatrix[0].length;
    for (int r=0;r<row;r++) {
      for (int c=0;c<col;c++) {
        if (binaryMatrix[r][c]==1) {
          islands++;
          markIsland(binaryMatrix,row,col,r,c);
        }
      }
    }
    return islands;
  }

  public static void main(String[] args) {
    int[][] binaryMatrix = {{0,    1,    0,    1,    0},
                            {0,    0,    1,    1,    1},
                            {1,    0,    0,    1,    0},
                            {0,    1,    1,    0,    0},
                            {1,    0,    1,    0,    1}};
    // Expected output: 6
    // since this is the number of islands in binaryMatrix
    System.out.println(getNumberOfIslands(binaryMatrix));
  }

}
