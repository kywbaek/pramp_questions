function wordCountEngine(document) {
  const wordMap = {};
  const wordList = document.split(' ');
  let maxCount = 0;
  for (let i=0;i<wordList.length;i++) {
    let word = wordList[i].toLowerCase();
    const charArray = [];
    for (let j=0;j<word.length;j++) {
      if (word[j]>='a' && word[j]<='z') {
        charArray.push(word[j]);
      }
    }

    let cleanWord = charArray.join('');
    if (cleanWord.length < 1) {
      continue;
    }

    let count = 0;
    if (cleanWord in wordMap) {
      count = wordMap[cleanWord];
      count++;
    } else {
      count = 1;
    }
    if (count > maxCount) {
      maxCount = count;
    }
    wordMap[cleanWord] = count;
  }
  const resultBucket = new Array(maxCount);
  for (let i=0;i<maxCount;i++) {
    resultBucket[i] = null;
  }

  for (const word in wordMap) {
    count = wordMap[word];
    let wordCountList = resultBucket[count-1]
    if (wordCountList == null) {
      wordCountList = [];
    }
    wordCountList.push(word);
    resultBucket[count-1] = wordCountList;
  }

  const result = [];
  for (let i=maxCount-1;i>=0;i--) {
    wordCountList = resultBucket[i];
    if (wordCountList === null) {
      continue;
    }
    for (let j=0;j<wordCountList.length;j++) {
      result.push([wordCountList[j],(i+1).toString()]);
    }
  }
  return result;
}

wordCountEngine("Practice makes perfect. you'll only get Perfect by practice. just practice!")

/*
Time Complexity: let N be the number of words in document and M the number of unique words in it (M ≤ N). Iterating over all words, cleaning them and inserting them into a map takes O(N). The sorting step takes O(M) since notice that in the second loop, every word gets visited only once. The total time complexity is therefore O(N + M), which is O(N).

Space Complexity: wordMap takes O(M) space and the array of strings array, counterList, takes another O(M). So, in total, the space complexity is O(M).
*/
