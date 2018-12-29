def find_grants_cap(grantsArray, newBudget):
  n = len(grantsArray)
  grantsArray.sort(reverse=True)
  grantsArray.append(0)
  surplus = sum(grantsArray) - newBudget

  if surplus <= 0:
    return grantsArray[0]

  for i in range(n):
    surplus -= (i + 1) * (grantsArray[i] - grantsArray[i + 1])
    if surplus <= 0:
      return grantsArray[i + 1] - (surplus / (i + 1))


grantsArray = [2, 100, 50, 120, 1000]
newBudget = 190

# Expected output: 47
"""
 and given this cap the new grants array would be [2, 47, 47, 47, 47].
    Notice that the sum of the new grants is indeed 190
"""
print(find_grants_cap(grantsArray, newBudget))
