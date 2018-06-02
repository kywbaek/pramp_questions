_Sudoku Solver_
===============

Write the function sudokuSolve that checks whether a given sudoku board (i.e. sudoku puzzle) is solvable. If so, the function will returns true. Otherwise (i.e. there is no valid solution to the given sudoku board), returns false.

In sudoku, the objective is to fill a 9x9 board with digits so that each column, each row, and each of the nine 3x3 sub-boards that compose the board contains all of the digits from 1 to 9. The board setter provides a partially completed board, which for a well-posed board has a unique solution. As explained above, for this problem, it suffices to calculate whether a given sudoku board has a solution. No need to return the actual numbers that make up a solution.

A sudoku board is represented as a two-dimensional 9x9 array of the characters ‘1’,‘2’,…,‘9’ and the '.' character, which represents a blank space. The function should fill the blank spaces with characters such that the following rules apply:

In every row of the array, all characters ‘1’,‘2’,…,‘9’ appear exactly once.
In every column of the array, all characters ‘1’,‘2’,…,‘9’ appear exactly once.
In every 3x3 sub-board that is illustrated below, all characters ‘1’,‘2’,…,‘9’ appear exactly once.
A solved sudoku is a board with no blank spaces, i.e. all blank spaces are filled with characters that abide to the constraints above. If the function succeeds in solving the sudoku board, it’ll return true (false, otherwise).

Example (more examples can be found [here](http://www.sudokukingdom.com/)):

![alt text](https://upload.wikimedia.org/wikipedia/commons/f/ff/Sudoku-by-L2G-20050714.svg "A typical Sudoku board setter")
![alt text](https://upload.wikimedia.org/wikipedia/commons/3/31/Sudoku-by-L2G-20050714_solution.svg "The same board with solution numbers marked in red")

Write a readable an efficient code, explain how it is built and why you chose to build it that way.

Solutions:
- [Java](https://github.com/kywbaek/pramp_questions/blob/master/questions/sudoku-solver/solution.java)
- [JavaScript](https://github.com/kywbaek/pramp_questions/blob/master/questions/sudoku-solver/solution.js)
- [Python](https://github.com/kywbaek/pramp_questions/blob/master/questions/sudoku-solver/solution.py)
