def is_match(text, pattern):
  pLen = len(pattern)
  tLen = len(text)

  def is_match_with_index(text, pattern, tInd, pInd):
    if pInd >= pLen:
      if tInd >= tLen:
        return True
      else:
        return False
    else:
      if pInd < (pLen - 1) and pattern[pInd + 1] == '*':
        if pattern[pInd] != '.':
          while tInd < tLen and text[tInd] == pattern[pInd]:
            tInd += 1
          return is_match_with_index(text, pattern, tInd, pInd + 2)
        else:
          if (pInd < pLen - 2) and (pattern[pInd + 2] == text[tInd]):
            return is_match_with_index(text, pattern, tInd + 1, pInd + 2)
          else:
            while tInd < tLen and text[tInd + 1] == text[tInd]:
              tInd += 1
            return is_match_with_index(text, pattern, tInd + 1, pInd + 2)
      else:
        if (pattern[pInd] == '.') or (pattern[pInd] == text[tInd]):
          return is_match_with_index(text, pattern, tInd + 1, pInd + 1)
        else:
          return False

  return is_match_with_index(text, pattern, 0, 0)


print(is_match("", "a*"))
