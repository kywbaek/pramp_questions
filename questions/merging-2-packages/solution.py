def get_indices_of_item_wights(arr, limit):
    dic = {}
    for i in xrange(len(arr)):
        if (limit - arr[i]) in dic:
            return [i, dic[limit - arr[i]]]
        else:
            dic[arr[i]] = i
    return []
