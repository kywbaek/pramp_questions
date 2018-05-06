_Array Index & Element Equality_
================================

Given a sorted array arr of distinct integers, write a function indexEqualsValueSearch that returns the lowest index i for which arr[i] == i. Return -1 if there is no such index. Analyze the time and space complexities of your solution and explain its correctness.

Examples:

```javascript
input: arr = [-8,0,2,5]
output: 2 // since arr[2] == 2

input: arr = [-1,0,3,6]
output: -1 // since no index in arr satisfies arr[i] == i.
```

Constraints:
- [time limit] 5000ms
- [input] array.integer arr
  - 1 ≤ arr.length ≤ 100
- [output] integer

Solutions:
- [Java](https://github.com/kywbaek/pramp_questions/blob/master/questions/array-index-and-element-equality/solution.java)
- [JavaScript](https://github.com/kywbaek/pramp_questions/blob/master/questions/array-index-and-element-equality/solution.js)
- [Python](https://github.com/kywbaek/pramp_questions/blob/master/questions/array-index-and-element-equality/solution.py)

