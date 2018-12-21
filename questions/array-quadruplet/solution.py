# O(n^4)
def find_array_quadruplet_bruteForce(arr, s):
  n = len(arr)
  if n < 4:
    return []
  arr.sort()
  for i in xrange(n - 3):
    for j in xrange(i + 1, n - 2):
      for x in xrange(j + 1, n - 1):
        for y in xrange(x + 1, n):
          if arr[i] + arr[j] + arr[x] + arr[y] == s:
            return [arr[i], arr[j], arr[x], arr[y]]
  return []

# O(n^3)


def find_array_quadruplet(arr, s):
  n = len(arr)
  if n < 4:
    return []
  arr.sort()
  for i in xrange(n - 3):
    for j in xrange(i + 1, n - 2):
      r = s - (arr[i] + arr[j])
      low = j + 1
      high = n - 1
      while low < high:
        if (arr[low] + arr[high]) < r:
          low += 1
        elif (arr[low] + arr[high]) > r:
          high -= 1
        else:
          return [arr[i], arr[j], arr[low], arr[high]]
  return []


arr = [2, 7, 4, 0, 9, 5, 1, 3]
s = 20

# Expected output: [0, 4, 7, 9]

print find_array_quadruplet_bruteForce(arr, s)
print find_array_quadruplet(arr, s)
