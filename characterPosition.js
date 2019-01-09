function countLetters (string) {
  let finalOutput = {};
  stringArray = string.toLowerCase().split('');
  stringArray.forEach((letter, i) => {
    if (!finalOutput[letter]) {
      finalOutput[letter] = [i];
    } else {
      finalOutput[letter].push(i)
    }
  })
  return finalOutput;
}

console.log(countLetters('THis is a test'));