# O(n^4)
def find_array_quadruplet_bruteForce(arr, s):
  n = len(arr)
  if n < 4:
    return []
  arr.sort()
  for i in range(n - 3):
    for j in range(i + 1, n - 2):
      for x in range(j + 1, n - 1):
        for y in range(x + 1, n):
          if arr[i] + arr[j] + arr[x] + arr[y] == s:
            return [arr[i], arr[j], arr[x], arr[y]]
  return []


def find_array_quadruplet(arr, s):
  # O(n^3)
  n = len(arr)
  if n < 4:
    return []
  arr.sort()
  for i in range(n - 3):
    for j in range(i + 1, n - 2):
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
'''
The ordered quadruplet of (7, 4, 0, 9) whose sum is 20. Notice that there
are two other quadruplets whose sum is 20: (7, 9, 1, 3) and (2, 4, 9, 5),
but again you’re asked to return the just one quadruplet (in an ascending order)
'''
print(find_array_quadruplet_bruteForce(arr, s))
print(find_array_quadruplet(arr, s))
