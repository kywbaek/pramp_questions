_Award Budget Cuts_
===================

The awards committee of your alma mater (i.e. your college/university) asked for your assistance with a budget allocation problem they’re facing. Originally, the committee planned to give N research grants this year. However, due to spending cutbacks, the budget was reduced to newBudget dollars and now they need to reallocate the grants. The committee made a decision that they’d like to impact as few grant recipients as possible by applying a maximum cap on all grants. Every grant initially planned to be higher than cap will now be exactly cap dollars. Grants less or equal to cap, obviously, won’t be impacted.

Given an array grantsArray of the original grants and the reduced budget newBudget, write a function findGrantsCap that finds in the most efficient manner a cap such that the least number of recipients is impacted and that the new budget constraint is met (i.e. sum of the N reallocated grants equals to newBudget).

Analyze the time and space complexities of your solution.

Example:

```javascript
input:  grantsArray = [2, 100, 50, 120, 1000]
        newBudget = 190

output: 47 // and given this cap the new grants array would be
           // [2, 47, 47, 47, 47]. Notice that the sum of the
           // new grants is indeed 190
```

Constraints:
- [time limit] 5000ms
- [input] array.double grantsArray
  - 0 ≤ grantsArray.length ≤ 20
  - 0 ≤ grantsArray[i]
- [input] double newBudget
- [output] double

Solutions:
- [Java](https://github.com/kywbaek/pramp_questions/blob/master/questions/award-budget-cuts/solution.java)
- [JavaScript](https://github.com/kywbaek/pramp_questions/blob/master/questions/award-budget-cuts/solution.js)
- [Python](https://github.com/kywbaek/pramp_questions/blob/master/questions/award-budget-cuts/solution.py)
