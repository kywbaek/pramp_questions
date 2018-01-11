import string


def word_count_engine(document):
  docList = [s.lower().translate(None, string.punctuation) for s in document.split()]
  docDic = {}
  maxCount = 0
  for s in docList:
    if s in docDic:
      docDic[s] += 1
      if maxCount < docDic[s]:
        maxCount = docDic[s]
    else:
      docDic[s] = 1
  outList = []
  for i in xrange(maxCount, 0, -1):
    for key in docDic:
      if docDic[key] == i:
        outList.append([key, str(docDic[key])])
  return outList


document = "Practice makes perfect. you'll only get Perfect by practice. just practice!"
print word_count_engine(document)
