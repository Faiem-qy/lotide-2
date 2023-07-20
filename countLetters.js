// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  // if the values match, print the following: Assertion Passed: [actual] === [expected] (but with the values filled in);
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);

    // Otherwise it should print (console.log) the following: Assertion Failed: [actual] !== [expected] (but with the values filled in)
  } else {
    (console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`));
  }
}
  ;

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);




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