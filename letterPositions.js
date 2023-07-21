const letterPositions = function(sentence) {
  const results = {};

  //convert all letters to lowercase and split it into an array of characters
  const letters = sentence.toLowerCase().split('');

  // Iterate through each character in the sentence
  for (let i = 0; i < letters.length; i++) {
    const letter = letters[i];
    // if space skip this character
    if (letter === ' ') {
      continue;
      // if result already contains letter, Add to current index i
    } else if (results[letter]) {
      results[letter].push(i);
      // else create new key in result with an array containing the current index i
    } else {
      results[letter] = [i];
    }
  }

  return results;
};

console.log(letterPositions("lighthouse in the house"));