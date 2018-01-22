# time/space - O(n)
def get_different_number1(arr):
  mySet = set(arr)
  for i in xrange(len(arr)):
    if i not in mySet:
      return i
  return len(arr)

# time - O(n), space - O(1)


def get_different_number(arr):
  n = len(arr)
  for i in xrange(n):
    temp = arr[i]
    while (temp < n and arr[temp] != temp):
      temp1 = arr[temp]
      arr[temp] = temp
      temp = temp1
  for i in xrange(n):
    if arr[i] != i:
      return i
  return n


print get_different_number1([1, 3, 0, 2])
