def hasAll(arr, str):
  for i in arr:
    if i not in str:
      return False
  return True


def get_shortest_unique_substring(arr, str):
  n = len(arr)
  nStr = len(str)
  S = ""
  if nStr < n or not hasAll(arr, str):
    return ""
  for s in xrange(nStr):
    for e in xrange(s + n, nStr + 1):
      subS = str[s:e]
      if (len(subS) >= len(S)) and (len(S) != 0):
        break
      if (not hasAll(arr, subS)):
        continue
      if len(subS) == n:
        return subS
      S = subS
      break
  return S


arr = ['x', 'y', 'z']
str = "xyyzyzyx"

print get_shortest_unique_substring(arr, str)
