
// const results1 = words.map(word => word[0]);
// console.log(results1);


const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
    // console.log('item BEFORE: ', item);
    // console.log('item AFTER: ', callback(item));
    // console.log('---');
  }
  return results;
};
const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
console.log(results1);


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



//Test case 1
// mapping to the last character
// const words = ["ground", "control", "to", "major", "tom"];
const expected = ['d', 'l', 'o', 'r', 'm'];
const resultLastChar = map(words, word => word[word.length - 1]);
assertArraysEqual(resultLastChar,expected)

// test case 2
// to uppercase

const expectedUpperCase = ['GROUND','CONTROL','TO','MAJOR','TOM']
const resultUpperCase = map(words, word => word.toUpperCase())
assertArraysEqual(resultUpperCase,expectedUpperCase)

//test case 3
const expectedLength = [6,7,2,5,3]
const resultLength = map(words, word => word.length)
// console.log(resultLength);
assertArraysEqual(resultLength,expectedLength)
