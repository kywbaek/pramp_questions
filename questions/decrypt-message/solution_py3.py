def decrypt1(word):
  n = len(word)
  word = [ord(l) for l in word]
  for i in range(n - 1, -1, -1):
    if i != 0:
      word[i] -= word[i - 1]
    else:
      word[i] -= 1
    while word[i] < ord('a'):
      word[i] += 26
    word[i] = chr(word[i])

  return "".join(word)


def decrypt2(word):
  secondStep = 1
  decryption = ""
  for i in range(len(word)):
    newLetterAscii = ord(word[i])
    newLetterAscii -= secondStep

    while (newLetterAscii < ord('a')):
      newLetterAscii += 26

    decryption += chr(newLetterAscii)
    secondStep += newLetterAscii

  return decryption


def decrypt(word):
  oldLetterAscii = 1
  decryption = ""
  for i in range(len(word)):
    newLetterAscii = ord(word[i]) - oldLetterAscii
    oldLetterAscii = ord(word[i])

    while (newLetterAscii < ord('a')):
      newLetterAscii += 26

    decryption += chr(newLetterAscii)

  return decryption


print(decrypt("dnotq"))
print(decrypt("flgxswdliefy"))
