_K-Messed Array Sort_
=====================

Given an array of integers arr where each element is at most k places away from its sorted position, code an efficient function sortKMessedArray that sorts arr. For instance, for an input array of size 10 and k = 2, an element belonging to index 6 in the sorted array will be located at either index 4, 5, 6, 7 or 8 in the input array.

Analyze the time and space complexities of your solution.

Example:

```javascript
input:  arr = [1, 4, 5, 2, 3, 7, 8, 6, 10, 9], k = 2

output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

Constraints:
- [time limit] 5000ms
- [input] array.integer arr
  - 1 ≤ arr.length ≤ 100
- [input] integer k
  - 1 ≤ k ≤ 20
- [output] array.integer

Solutions:
- [Java](https://github.com/kywbaek/pramp_questions/blob/master/questions/k-messed-array-sort/solution.java)
- [JavaScript](https://github.com/kywbaek/pramp_questions/blob/master/questions/k-messed-array-sort/solution.js)
- [Python](https://github.com/kywbaek/pramp_questions/blob/master/questions/k-messed-array-sort/solution.py)
