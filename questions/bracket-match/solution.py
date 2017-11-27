def bracket_match(text):
  oB, cB = 0, 0
  for chr in text:
    if chr == '(':
      oB += 1
    else:
      if oB > 0:
        oB -= 1
      else:
        cB += 1

  return oB + cB


text = "(()"
print bracket_match(text)
text = "(())"
print bracket_match(text)
text = "())("
print bracket_match(text)
