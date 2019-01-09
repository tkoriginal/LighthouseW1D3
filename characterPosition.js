function countLetters (string) {
  let finalOutput = {};
  stringArray = string.toLowerCase().split('');
  console.log(stringArray);
  stringArray.forEach((letter) => {
    if (!finalOutput[letter]) {
      finalOutput[letter] = 1;
    } else {
      finalOutput[letter]++;
    }
  })
  return finalOutput;
}

console.log(countLetters('THis is a test'));