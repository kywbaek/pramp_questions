def find_grants_cap(grantsArray, newBudget):
  n = len(grantsArray)
  grantsArray.sort(reverse=True)
  grantsArray.append(0)
  surplus = sum(grantsArray) - newBudget

  if surplus <= 0:
    return grantsArray[0]

  for i in xrange(n):
    surplus -= (i+1) * (grantsArray[i] - grantsArray[i+1])
    if surplus <= 0:
      return grantsArray[i+1] - (surplus / float(i+1))
