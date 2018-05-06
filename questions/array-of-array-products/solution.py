# Without restriction on Division
# Time Complexity: O(n), Space Complexity: O(n)
def get_product(arr):
  n = len(arr)
  product = 1
  result = []
  zero_index_list = []

  for i in range(n):
    if arr[i]==0:
      zero_index_list.append(i)
    else:
      product*=arr[i]

  if len(zero_index_list)>1:
    return [0]*n
  elif len(zero_index_list)==1:
    for i in range(n):
      if i!=zero_index_list[0]:
        result.append(0)
      else:
        result.append(product)
    return result

  product = 1
  for i in range(n):
    product*=arr[i]

  for i in range(n):
    result.append(product/arr[i])

  return result



arr1= [0,4,2]  # [8, 0, 0]
arr = [4, 2, 1, 4, 8]

print(get_product(arr))



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


# Time Complexity: O(n), Space Complexity: O(n)
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
