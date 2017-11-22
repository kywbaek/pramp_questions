// Pseudocode
function flattenDictionary(dict):
    flatDictionary = {}
    flattenDictionaryHelper("", dict, flatDictionary)

    return flatDictionary


function flattenDictionaryHelper(initialKey, dict, flatDictionary):
    for (key : dict.keyset()):
        value = dict.get(key)

        if (!isDictionary(value)): // the value is of a primitive type
            if (initialKey == null || initialKey == ""):
                flatDictionary.put(key, value)
            else:
                flatDictionary.put(initialKey + "." + key, value)
        else:
            if (initialKey == null || initialKey == "")
                flattenDictionaryHelper(key, value, flatDictionary)
            else:
                flattenDictionaryHelper(initialKey + "." + key, value, flatDictionary)

/*
Time Complexity: O(N), where N is the number of keys in the input dictionary. We visit every key in dictionary only once, hence the linear time complexity.
Space Complexity: O(N) since the output dictionary is asymptotically as big as the input dictionary. We also store recursive calls in the execution stack which in the worst case scenario could be O(N), as well. The total is still O(N).
*/
