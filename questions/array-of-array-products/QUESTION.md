_Array of Array Products_
=========================

Given an array of integers arr, you’re asked to calculate for each index i the product of all integers except the integer at that index (i.e. except arr[i]). Implement a function arrayOfArrayProducts that takes an array of integers and returns an array of the products.

Solve without using division and analyze your solution’s time and space complexities.

Examples:

```javascript
input:  arr = [8, 10, 2]
output: [20, 16, 80] // by calculating: [10*2, 8*2, 8*10]

input:  arr = [2, 7, 3, 4]
output: [84, 24, 56, 42] // by calculating: [7*3*4, 2*3*4, 2*7*4, 2*7*3]
```

Constraints:
- [time limit] 5000ms
- [input] array.integer arr
  - 0 ≤ arr.length ≤ 20
- [output] array.integer

Solutions:
- [Java](https://github.com/kywbaek/pramp_questions/blob/master/questions/array-of-array-products/solution.java)
- [JavaScript](https://github.com/kywbaek/pramp_questions/blob/master/questions/array-of-array-products/solution.js)
- [Python](https://github.com/kywbaek/pramp_questions/blob/master/questions/array-of-array-products/solution.py)
