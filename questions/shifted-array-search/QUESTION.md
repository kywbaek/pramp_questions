_Shifted Array Search_
======================

A sorted array of distinct integers shiftArr is shifted to the left by an unknown offset and you don’t have a pre-shifted copy of it. For instance, the sequence 1, 2, 3, 4, 5 becomes 3, 4, 5, 1, 2, after shifting it twice to the left.

Given shiftArr and an integer num, implement a function shiftedArrSearch that finds and returns the index of num in shiftArr. If num isn’t in shiftArr, return -1.

Explain your solution and analyze its time and space complexities.

Example:

```javascript
input:  shiftArr = [9, 12, 17, 2, 4, 5], num = 2 // shiftArr is the
                                                 // outcome of shifting
                                                 // [2, 4, 5, 9, 12, 17]
                                                 // three times to the left

output: 3 // since it’s the index of 2 in arr
```

Constraints:
- [time limit] 5000ms
- [input] array.integer arr
- [input] integer num
- [output] integer

Solutions:
- [Java](https://github.com/kywbaek/pramp_questions/blob/master/questions/shifted-array-search/solution.java)
- [JavaScript](https://github.com/kywbaek/pramp_questions/blob/master/questions/shifted-array-search/solution.js)
- [Python](https://github.com/kywbaek/pramp_questions/blob/master/questions/shifted-array-search/solution.py)
