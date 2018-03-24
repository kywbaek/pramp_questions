import heapq
# time: O(N logK)   space: O(K)
def sort_k_messed_array(arr, k):
    n = len(arr)
    tempArr = arr[:k + 1]
    heapq.heapify(tempArr)

    for i in xrange(k + 1, n):
        arr[i - (k + 1)] = heapq.heappop(tempArr)
        heapq.heappush(tempArr, arr[i])

    for i in xrange(k + 1):
        arr[n - k - 1 + i] = heapq.heappop(tempArr)

    return arr

# k selection sort
def sort_k_messed_array1(arr, k):
    n = len(arr)
    for i in xrange(n):
        Index = i
        for iInner in xrange(len(arr[i:i + k + 1])):
            if arr[iInner + i] < arr[Index]:
                Index = iInner + i
        if Index != i:
            arr[Index], arr[i] = arr[i], arr[Index]

    return arr


arr = [1, 4, 5, 2, 3, 7, 8, 6, 10, 9]
k = 2

print sort_k_messed_array(arr, k)
