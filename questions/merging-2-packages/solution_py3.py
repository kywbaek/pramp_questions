def get_indices_of_item_wights(arr, limit):
    dic = {}
    for i in range(len(arr)):
        if (limit - arr[i]) in dic:
            return [i, dic[limit - arr[i]]]
        else:
            dic[arr[i]] = i
    return []


arr = [4, 6, 10, 15, 16]
lim = 21

# Expected output: [3, 1]
print(get_indices_of_item_wights(arr, lim))
