def appendIf(q, row, col, r, c):
  if row >= 0 and row < r and col >= 0 and col < c:
    q.append([row, col])


def getOthersInIsland(i, j, r, c, binaryMatrix):
  q = []
  q.append([i, j])
  while len(q) > 0:
    cell = q.pop(0)
    row = cell[0]
    col = cell[1]
    if binaryMatrix[row][col] == 1:
      binaryMatrix[row][col] = 2
      appendIf(q, row - 1, col, r, c)
      appendIf(q, row + 1, col, r, c)
      appendIf(q, row, col - 1, r, c)
      appendIf(q, row, col + 1, r, c)


def get_number_of_islands(binaryMatrix):
  if binaryMatrix == [[]] or binaryMatrix == None:
    return 0
  islands = 0
  r = len(binaryMatrix)
  c = len(binaryMatrix[0])
  for i in range(r):
    for j in range(c):
      if binaryMatrix[i][j] == 1:
        islands += 1
        getOthersInIsland(i, j, r, c, binaryMatrix)
  return islands


binaryMatrix = [[0, 1, 0, 1, 0],
                [0, 0, 1, 1, 1],
                [1, 0, 0, 1, 0],
                [0, 1, 1, 0, 0],
                [1, 0, 1, 0, 1]]
mat = [[1, 1],
       [1, 1]]

print(get_number_of_islands(binaryMatrix))
print(get_number_of_islands(mat))
