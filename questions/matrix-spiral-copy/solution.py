def spiral_copy(inputMatrix):
  maxCol = len(inputMatrix[0]) - 1
  maxRow = len(inputMatrix) - 1
  minCol = 0
  minRow = 0
  result = []
  while minRow <= maxRow and minCol <= maxCol:
    for j in xrange(minCol,maxCol+1):
      result.append(inputMatrix[minRow][j])
    minRow += 1

    for i in xrange(minRow,maxRow+1):
      result.append(inputMatrix[i][maxCol])
    maxCol -= 1

    if minRow <= maxRow:
      for j in xrange(maxCol,minCol-1,-1):
        result.append(inputMatrix[maxRow][j])
      maxRow -= 1

    if minCol <= maxCol:
      for i in xrange(maxRow,minRow-1,-1):
        result.append(inputMatrix[i][minCol])
      minCol += 1

  return result

print spiral_copy([[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20]])
'''
[[1]]
[[1,2],[3,4]]
[[1],[2]]
[[1,2]]
[[1,2,3,4,5],[6,7,8,9,10]]
[[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20]]
'''
