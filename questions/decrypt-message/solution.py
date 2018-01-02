def decrypt1(word):
  n = len(word)
  word = [ord(l) for l in word]
  for i in xrange(n - 1, -1, -1):
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
  for i in xrange(len(word)):
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
  for i in xrange(len(word)):
    newLetterAscii = ord(word[i]) - oldLetterAscii
    oldLetterAscii = ord(word[i])

    while (newLetterAscii < ord('a')):
      newLetterAscii += 26

    decryption += chr(newLetterAscii)

  return decryption


print decrypt("dnotq")
print decrypt("flgxswdliefy")

'''
step1: convert letter back to ASCII value
step2: add 1, add a[i-1], ...
step3: subtract 26x
step4: convert back to letter

backwards
  convert to ASCII

org = [a[0],a[1],a[2]]
      [a[0]+1,a[1]+a[0]+1,a[2]+a[1]+a[0]+1]
      [subtract 26X]
      convert

mes = [a[0],a[1],a[2]]
      [a[0]-1,a[1]-a[0],a[2]-a[1]]
      [add 26X]       here
      [convert back to letter]

[a[0],a[1],a[2]]
[a[0]-1,a[1]-a[0],a[2]-a[1]]
[add 26X]
[convert back to letter]


input = arr
n = len(arr)
for i from n-1 to 0
  if i !=0:
    arr[i] -= arr[i-1]
  if i == 0:
    arr[i] -= 1

for i from 0 to n-1
  while arr[i] > 122 or arr[i] < 97:
    arr[i] += 26
  arr[i] = chr(arr[i])


90 + 20 - 40
90 - 40 + 20

99 110 111 116 113
99 11   1   5   -3
99

'''
