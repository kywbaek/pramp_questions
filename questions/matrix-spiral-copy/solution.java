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
    int[][] inputMatrix  = {{1, 2, 3, 4, 5},
                           {6, 7, 8, 9, 10},
                           {11, 12, 13, 14, 15},
                           {16, 17, 18, 19, 20}};
    // Expected output: {1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12}
    int [] output = spiralCopy(inputMatrix);
    for (int i:output) {
      System.out.print(i+" ");
    }
  }
}
