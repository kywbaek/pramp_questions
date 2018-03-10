# when two arrays are of similar size
def find_duplicates1(arr1, arr2):
  arr = []
  a = b = 0
  while a<len(arr1) and b<len(arr2):
    if arr1[a]>arr2[b]:
      b+=1
    elif arr1[a]<arr2[b]:
      a+=1
    else:
      arr.append(arr1[a])
      a+=1
      b+=1
  return arr

def binarySearch(arr, x):
  lo = 0
  hi = len(arr)-1
  while lo<=hi:
    md = (lo+hi)/2
    if arr[md]<x:
      lo = md + 1
    elif arr[md]>x:
      hi = md - 1
    else:
      return md
  return -1

# when one arr is significantly larger than the other
def find_duplicates(arr1, arr2):
  if len(arr1)<len(arr2):
    return find_duplicates(arr2, arr1)
  arr = []
  for i in arr2:
    if binarySearch(arr1, i)>-1:
      arr.append(i)
  return arr


arr1 = [1, 2, 3, 5, 6, 7]
arr2 = [3, 6, 7, 8, 20]
