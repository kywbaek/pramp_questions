function spiralCopy(inputMatrix) {
  let minRow = 0;
  let minCol = 0;
  let maxRow = inputMatrix.length-1;
  let maxCol = inputMatrix[0].length-1;

  const result = [];

  while (minRow <= maxRow && minCol <= maxCol) {
    for (let i=minCol;i<=maxCol;i++) {
      result.push(inputMatrix[minRow][i]);
    }
    minRow++;

    for (let i=minRow;i<=maxRow;i++) {
      result.push(inputMatrix[i][maxCol]);
    }
    maxCol--;

    if (minRow <= maxRow) {
      for (let i=maxCol;i>=minCol;i--) {
        result.push(inputMatrix[maxRow][i]);
      }
      maxRow--;
    }

    if (minCol <= maxCol) {
      for (let i=maxRow;i>=minRow;i--) {
        result.push(inputMatrix[i][minCol]);
      }
      minCol++;
    }
  }
  return result;
}

/*
Time Complexity: iterating over N∙M cells, where N is the number of rows and M the number of columns, and copying them into any array takes O(N∙M). Note that this is a linear time complexity since the size of the input is O(N∙M).

Space Complexity: we used an auxiliary array of size N∙M as a return value, hence the space complexity is O(N∙M). This is a linear space complexity since the size of the input is O(N∙M) as well.
*/
