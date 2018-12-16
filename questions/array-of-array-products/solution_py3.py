# Without restriction on Division
# Time Complexity: O(n), Space Complexity: O(n)


def array_of_array_products1(arr):
  n = len(arr)
  product = 1
  result = []
  zero_index_list = []

  for i in range(n):
    if arr[i] == 0:
      zero_index_list.append(i)
    else:
      product *= arr[i]

  if len(zero_index_list) > 1:
    return [0] * n
  elif len(zero_index_list) == 1:
    for i in range(n):
      if i != zero_index_list[0]:
        result.append(0)
      else:
        result.append(product)
    return result

  product = 1
  for i in range(n):
    product *= arr[i]

  for i in range(n):
    result.append(product // arr[i])

  return result


# Brute Force
def array_of_array_products2(arr):
  result = []
  n = len(arr)
  if n <= 1:
    return result
  for i in range(n):
    product = 1
    for j in range(n):
      if i != j:
        product *= arr[j]
    result.append(product)
  return result


# Time Complexity: O(n), Space Complexity: O(n)
def array_of_array_products3(arr):
  n = len(arr)
  if n <= 1:
    return []

  result = []
  product = 1
  for i in range(n):
    result.append(product)
    product *= arr[i]

  product = 1
  for i in range(n - 1, -1, -1):
    result[i] *= product
    product *= arr[i]

  return result


arr1 = [0, 4, 2]  # [8, 0, 0]
arr2 = [4, 2, 1, 4, 8]  # [64, 128, 256, 64, 32]
arr3 = [0, 0, 4, 7, 2]  # [0, 0, 0, 0, 0]

print(array_of_array_products1(arr1))
print(array_of_array_products2(arr2))
print(array_of_array_products3(arr3))
