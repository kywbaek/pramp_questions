def flip(arr, k):
  mid = k // 2
  for i in range(mid):
    arr[i], arr[k-1-i] = arr[k-1-i], arr[i]
  return arr

def getMax(arr, k):
  maxE = 0
  maxInd = 0
  for i in range(k):
    if arr[i] > maxE:
      maxE = arr[i]
      maxInd = i
  return maxE, maxInd

def pancake_sort(arr):
  n = len(arr)
  while n > 1:
    maxE, maxInd = getMax(arr, n-1)
    if arr[n-1] < maxE:
      flip(arr, maxInd+1)
      flip(arr, n)
    n -= 1
  return arr

arr = [1,5,4,3,2]

print(pancake_sort(arr))
