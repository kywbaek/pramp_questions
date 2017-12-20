# brute force
def reverse_words1(arr):
  string = "".join(arr)
  wordList = string.split(" ")
  wordList.reverse()
  string = " ".join(wordList)
  resultList = list(string)
  return resultList


arr1 = ['p', 'e', 'r', 'f', 'e', 'c', 't', ' ',
        'm', 'a', 'k', 'e', 's', ' ',
        'p', 'r', 'a', 'c', 't', 'i', 'c', 'e']
arr2 = ["a", " ", " ", "b"]


def reverse(arr, start=0, end=None):
  if end == None:
    end = len(arr) - 1
  while start < end:
    arr[start], arr[end] = arr[end], arr[start]
    start += 1
    end -= 1
  return arr

# inplace


def reverse_words2(arr):
  n = len(arr)
  arr = reverse(arr, 0, n - 1)
  start = 0
  for i in xrange(n):
    if arr[i] == " ":
      arr = reverse(arr, start, i - 1)
      start = i + 1
    elif i == n - 1:
      arr = reverse(arr, start, i)
  return arr
