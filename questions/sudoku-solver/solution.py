def getCandidates(board, row, col):
  candidates = []

  for num in xrange(1,10):
    num = str(num)
    collision = False
    for i in xrange(9):
      if (board[row][i] == num) or (board[i][col] == num) or (board[row-(row%3)+(i/3)][col-(col%3)+(i%3)] == num):
        collision = True
        break
    if not collision:
      candidates.append(num)

  return candidates

def sudoku_solve(board):
  row = -1
  col = -1
  candidates = None

  for r in xrange(9):
    for c in xrange(9):
      if (board[r][c] == '.'):
        newCandidates = getCandidates(board, r, c)
        if (candidates == None) or (len(newCandidates) < len(candidates)):
          candidates = newCandidates
          row = r
          col = c
  if candidates == []:
    return False
  if candidates == None:
    return True

  for val in candidates:
      board[row][col] = val
      if (sudoku_solve(board)):
        return True
      board[row][col] = '.'

  return False

print sudoku_solve(
[[".","2","3","4","5","6","7","8","9"],["1",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".","."]])
