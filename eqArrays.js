const assertEqual = require('./assertEqual');


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

// Test case 1
const result1 = eqArrays([1, 2, 3], [1, 2, 3]);
assertEqual(result1, true);

// Test case 2
const result2 = eqArrays([1, 2, 3], [1, 2, 4]);
assertEqual(result2, false);


module.exports = eqArrays;