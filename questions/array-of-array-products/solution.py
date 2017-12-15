# Brute Force
def array_of_array_products(arr):
  result = []
  n = len(arr)
  if n <= 1:
    return result
  for i in xrange(n):
    product = 1
    for j in xrange(n):
      if i != j:
        product *= arr[j]
    result.append(product)
  return result


def array_of_array_products(arr):
  n = len(arr)
  if n <= 1:
    return []

  result = []
  product = 1
  for i in xrange(n):
    result.append(product)
    product *= arr[i]

  product = 1
  for i in xrange(n - 1, -1, -1):
    result[i] *= product
    product *= arr[i]

  return result


print array_of_array_products([2, 2])
