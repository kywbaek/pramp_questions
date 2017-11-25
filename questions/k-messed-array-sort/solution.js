// K-Messed Array Sort

// A simple solution would be to use an efficient sorting algorithm to sort the whole array again. The worst case time complexity of this approach will be O(N⋅log(N)) where N is the size of the input array. This method also do not use the fact that array is k-sorted.

// We can also use insertion sort that will correct the order in just O(N∙K) time. Insertion Sort performs really well for small values of k but it is not recommended for large value of k (use it for k < 12).

// Pseudocode:

function insertionSort(arr):
    for i from 1 to arr.length-1:
        x = arr[i]
        j = i-1

        while (j >= 0 AND arr[j] > x):
            arr[j+1] = arr[j]
            j--
        arr[j+1] = x

    return arr

// However, we can do better than that. If we use min heap, we can get an asymptotically better time complexity. We can solve this problem in O(N⋅log(K)). The idea is to construct a min-heap of size k+1 and insert first k+1 elements into the heap. Then we remove min from the heap and insert next element from the array into the heap and continue the process until both array and heap are exhausted. Each pop operation from the heap should insert the corresponding top element in its correct position in the array.

// Pseudocode:

function sortKMessedArray(arr, k):
    n = arr.length

    // create an empty min-heap
    h = new MinHeap()

    // build the min-heap from the first k+1 elements of arr
    h.buildHeap(arr[0,...,k])

    for i from k+1 to n-1:
        // extract the top element from the min-heap and
        // assign it to the next available array index
        arr[i-(k+1)] = h.extractMin()

        // push the next array element into the min-heap
        h.insert(arr[i])

    // extract all remaining elements from the min-heap
    // and assign them to the next available array index
    for i from 0 to k:
        arr[n-k-1 + i] = h.extractMin()

    return arr

/*
Time Complexity: building a heap takes O(K) time for K+1 elements. Insertion into and extraction from the min-heap take O(log(K)), each. Across all three loops, we do at least one of these actions N times, so the total time complexity is O(N⋅log(K)). if K is substantially smaller than N, then we can consider log(K) constant and argue that the complexity is practically linear.
*/
