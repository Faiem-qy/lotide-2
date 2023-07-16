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

const middle = function(arr) {
  // return empty array if the length is less than or equal to 2 elements
  if (arr.length <= 2) {
    return [];
  }

  // return array if the lenght of the array is odd
  if (arr.length % 2 === 1) {
    // use Math.floor to to round to the nearest interger 
    return [arr[Math.floor(arr.length / 2)]];
  }

  // return array with two elements if the array is even
  if (arr.length % 2 === 0) {
    return [arr[(arr.length / 2) - 1], arr[(arr.length / 2)]];
  }
  return [];
};

assertArraysEqual(middle([1]));
assertArraysEqual(middle([1, 2]));
assertArraysEqual(middle([1, 2, 3]));
assertArraysEqual(middle([1, 2, 3, 4, 5]));
assertArraysEqual(middle([1, 2, 3, 4]));
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]));