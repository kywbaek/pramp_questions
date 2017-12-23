# binary search
def BS(arr, num, low=0, high=None):
  if high == None:
    high = len(arr) - 1
  while low <= high:
    mid = (low + high) / 2
    cur = arr[mid]
    if num < cur:
      high = mid - 1
    elif num > cur:
      low = mid + 1
    else:
      return mid
  return -1


def findPivot(arr):
  low = 0
  high = len(arr) - 1
  while high >= low:
    mid = (low + high) / 2
    if arr[mid] < arr[mid - 1] or mid == 0:
      return mid
    if arr[mid] > arr[0]:
      low = mid + 1
    else:
      high = mid - 1
  return 0


def shifted_arr_search(shiftArr, num):
  pivot = findPivot(shiftArr)
  if num == shiftArr[pivot]:
    return pivot
  elif pivot == 0 or num < shiftArr[0]:
    return BS(shiftArr, num, pivot)
  else:
    return BS(shiftArr, num, 0, pivot - 1)


arr1 = [6, 9, 11, 17, 2]
arr2 = [9, 12, 17, 2, 4, 5]
# print shifted_arr_search(arr1, 4)
