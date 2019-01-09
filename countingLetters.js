function countLetters (string) {
  let finalOutput = {};
  stringArray = string.split(' ').join('').toLowerCase().split('');
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
