function decrypt1(word) {
  let secondStep = 1;
  let decryption = "";

  for (let i=0;i<word.length;i++) {
    let newLetterAscii = word[i].charCodeAt();
    newLetterAscii -= secondStep;

    while (newLetterAscii < 'a'.charCodeAt()) {
      newLetterAscii += 26;
    }

    decryption = decryption.concat(String.fromCharCode(newLetterAscii));
    secondStep += newLetterAscii;
  }

  return decryption;
}

function decrypt(word) {
  let oldLetterAscii = 1;
  let decryption = "";

  for (let i=0;i<word.length;i++) {
    const aASCII = 'a'.charCodeAt();
    let newLetterAscii = word[i].charCodeAt() - oldLetterAscii;
    oldLetterAscii = word[i].charCodeAt();

    while (newLetterAscii < aASCII) {
      newLetterAscii += 26;
    }
    decryption = decryption.concat(String.fromCharCode(newLetterAscii));
  }
  return decryption;
}

/*
Time Complexity: the function’s asymptotic time complexity is O(N), where N is the length of the input string. the loop that iterates through the letters in the input is performed N times. In the loop, almost every step is done in O(1), except for the loop that is supposed to move the decrypted letter back to the range of a-z. Theoretically, the secondStep may grow linearly with the size of the input. There are two ways to deal with this:

Instead of secondStep itself, we may only keep its remainder after being divided by 26 (since we add/subtract multiples of 26 anyway, the equation dec[N] = enc[N] - (secondStep[N-1] % 26)- 26M still holds, only for a different M). This way all values in every iteration are kept in a constant range.
Note that since in practice this function is used only for words in the English language, the input is bounded and we therefore may ignore the growth of the secondStep anyway.
Space Complexity: the space usage is also O(N) since the output is the same size of the input, and we only keep the output and the second step in storage.
*/

