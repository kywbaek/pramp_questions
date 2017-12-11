def k_selection_sort(arr, k):
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

print k_selection_sort(arr, k)
