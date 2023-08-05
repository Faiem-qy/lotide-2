const assertArraysEqual = require('./assertArraysEqual')

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



// Test for 'hello' string
const result = letterPositions("hello")

const expected = {
  h: [0],
  e: [1],
  l: [2, 3],
  o: [4]
}

assertArraysEqual(result.h, expected.h);
assertArraysEqual(result.e, expected.e);
assertArraysEqual(result.l, expected.l);
assertArraysEqual(result.o, expected.o);
assertArraysEqual(letterPositions("hello").e, [1]);

module.exports = letterPositions