_Merging 2 Packages_
====================

Given a package with a weight limit limit and an array arr of item weights, implement a function getIndicesOfItemWeights that finds two items whose sum of weights equals the weight limit limit. Your function should return a pair [i, j] of the indices of the item weights, ordered such that i < j. If such a pair doesn’t exist, return an empty array.

Analyze the time and space complexities of your solution.

Example:

```javascript
input:  arr = [4, 6, 10, 15, 16],  lim = 21

output: [3, 1] // since these are the indices of the
               // weights 6 and 15 whose sum equals to 21
```

Constraints:
- [time limit] 5000ms
- [input] array.integer arr
  - 0 ≤ arr.length ≤ 100
- [input] integer limit
- [output] array.integer
