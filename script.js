//your JS code here. If required.
function mapLetters(word) {
  const letterMap = {};

  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    
    if (!letterMap[letter]) {
      letterMap[letter] = [];
    }

    letterMap[letter].push(i);
  }

  return letterMap;
}
console.log(mapLetters("dodo"));    

console.log(mapLetters("froggy"));  

console.log(mapLetters("grapes"));