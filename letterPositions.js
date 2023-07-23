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

const assertEqual = function(actual, expected) {

  // if the values match, print the following: Assertion Passed: [actual] === [expected] (but with the values filled in);
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);

    // Otherwise it should print (console.log) the following: Assertion Failed: [actual] !== [expected] (but with the values filled in)
  } else {
    (console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`));
  }
};


const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {// if array is not equal return false
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    // loop over arrays and then compare the values, return false if not equal
    if (arr1[i] !== arr2[i])
      return false;
  }
  // return true if equal
  return true;
};


const assertArraysEqual = function(arr1, arr2) {
  // use eqArrays to compare the arrays
  if (eqArrays(arr1, arr2)) {
    // if the arrays are equal
    console.log(`✅✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    // if the arrays are not equal
    console.log(`🛑🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
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