function getNumberOfIslands(binaryMatrix) {
  if (binaryMatrix===[[]] || binaryMatrix===null) {
    return 0;
  }

  const rows = binaryMatrix.length;
  const cols = binaryMatrix[0].length;
  let islands = 0;
  for (let i=0;i<rows;i++) {
    for (let j=0;j<cols;j++) {
      if (binaryMatrix[i][j]===1) {
        islands++;
        markIsland(i,j,rows,cols,binaryMatrix);
      }
    }
  }
  return islands;
}

function markIsland(i,j,rows,cols,binaryMatrix) {
  const q=[];
  let cell,r,c;
  q.push([i,j]);
  while (q.length>0) {
    cell = q.shift();
    r = cell[0];
    c = cell[1];
    if (binaryMatrix[r][c]===1) {
      binaryMatrix[r][c]=2;
      pushIf(q,r+1,c,rows,cols);
      pushIf(q,r-1,c,rows,cols);
      pushIf(q,r,c+1,rows,cols);
      pushIf(q,r,c-1,rows,cols);
    }
  }
}

function pushIf(q,r,c,rows,cols) {
  if (r>=0 && r<rows && c>=0 && c<cols) {
    q.push([r,c]);
  }
}
/*
Time Complexity: let N and M be the numbers of columns and rows in binaryMatrix, respectively. Each cell in binaryMatrix is visited a constant number of times. Once during the iteration and up to 4 times during an island expansion. Therefore, the time complexity is linear in the size of the input, i.e. O(N⋅M).

Space Complexity: since we are allocating a queue in the algorithm, the space complexity is linear O(N⋅M). For instance, consider a matrix that is all 1s.
*/
