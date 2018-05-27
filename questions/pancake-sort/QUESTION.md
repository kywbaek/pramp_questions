_Pancake Sort_
==============

Given an array of integers arr:

Write a function flip(arr, k) that reverses the order of the first k elements in the array arr.
Write a function pancakeSort(arr) that sorts and returns the input array. You are allowed to use only the function flip you wrote in the first step in order to make changes in the array.

Example:

```javascript
input:  arr = [1, 5, 4, 3, 2]

output: [1, 2, 3, 4, 5]
// to clarify, this is pancakeSort's output
// Analyze the time and space complexities of your solution.
```

Note: it’s called pancake sort because it resembles sorting pancakes on a plate with a spatula, where you can only use the spatula to flip some of the top pancakes in the plate. To read more about the problem, see the Pancake Sorting Wikipedia page.

Constraints:
- [time limit] 5000ms
- [input] array.integer arr
- [input] integer k
  - 0 ≤ k
- [output] array.integer

Solutions:
- [Java](https://github.com/kywbaek/pramp_questions/blob/master/questions/pancake-sort/solution.java)
- [JavaScript](https://github.com/kywbaek/pramp_questions/blob/master/questions/pancake-sort/solution.js)
- [Python](https://github.com/kywbaek/pramp_questions/blob/master/questions/pancake-sort/solution.py)
