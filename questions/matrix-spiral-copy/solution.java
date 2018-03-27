import java.io.*;
import java.util.*;

class Solution {

  static int[] spiralCopy(int[][] inputMatrix) {
    int rows = inputMatrix.length;
    int cols = inputMatrix[0].length;
    int[] result = new int [rows*cols];
    int maxRow=rows-1, maxCol=cols-1, minRow=0, minCol=0;
    int pointer = 0;
    while (minRow<=maxRow && minCol<=maxCol) {
      for (int j=minCol;j<=maxCol;j++) {
        result[pointer] = inputMatrix[minRow][j];
        pointer++;
      }
      minRow++;

      for (int i=minRow;i<=maxRow;i++) {
        result[pointer] = inputMatrix[i][maxCol];
        pointer++;
      }
      maxCol--;

      if (minRow<=maxRow) {
        for (int j=maxCol;j>=minCol;j--) {
          result[pointer] = inputMatrix[maxRow][j];
          pointer++;
        }
        maxRow--;
      }

      if (minCol<=maxCol) {
        for (int i=maxRow;i>=minRow;i--) {
          result[pointer] = inputMatrix[i][minCol];
          pointer++;
        }
        minCol++;
      }
    }
    return result;
  }

  public static void main(String[] args) {
  }
}
