def flatten_dictionary(dictionary):
  flatCount = 0
  for key in dictionary.keys():
    if type(dictionary[key]) == dict:
      oldDict = dictionary[key]
      flatCount += 1
      for keyIn in dictionary[key].keys():
        if (key != "") and (keyIn != ""):
          dictionary[key + "." + keyIn] = dictionary[key][keyIn]
        else:
          dictionary[key + keyIn] = dictionary[key][keyIn]
      if dictionary[key] == oldDict:
        del dictionary[key]
      break
  if flatCount == 0:
    return dictionary
  else:
    return flatten_dictionary(dictionary)


dic = {'key1': "1",
       'key2': {"a": "2", "b": "3", "c": {"d": "3", "e": "1"}}}
dic1 = {"a": {"b": {"c": {"d": {"e": {"f": {"": "pramp"}}}}}}}
print(flatten_dictionary(dic))
print(flatten_dictionary(dic1))
