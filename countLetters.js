const assertEqual = require('./assertEqual')



// Take a sentence as a string and then return the count of each of the letters in that sentence
const countLetters = function(inputString) {
  // declare result and return result
  let result = {};
  //  for of loop to loop over letters
  for (const letter of inputString) {
    if (result[letter]) {
      // if there is a letter add
      result[letter] += 1;
       } else {
      result[letter] = 1;
    }
  }
  return result;
};

console.log(countLetters("LHL"));

module.exports = countLetters