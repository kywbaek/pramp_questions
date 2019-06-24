# time - O(n*logn), space - O(1)
def get_different_number(arr):
  arr.sort()
  n = len(arr)
  for i in xrange(n):
    if arr[i] != i:
      return i
  return n

# time - O(n), space - O(n)


def get_different_number1(arr):
  n = len(arr)
  dic = {}
  for i in xrange(n):
    dic[arr[i]] = True
  for i in xrange(n):
    if i not in dic:
      return i
  return n


arr = [0, 1, 2, 3]
# Expected output: 4
print(get_different_number1(arr))

arr = [5, 1, 0, 3]
# Expected output: 2
print(get_different_number1(arr))
