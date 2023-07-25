const { assert } = require("console");

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

const takeUntil = function(array, callback) {
  const results = [];
  // iterate over array
  for (const item of array) {
    //conditional
    if (!callback(item)) {
      results.push(item);
    } else {
      //stop
      break;
    }
  }
  return results;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];

const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


//expected output

// [ 1, 2, 5, 7, 2 ]
// --
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]

const data3 = ['hello', 'world', 'how', 'are', 'you'];
const result3 = takeUntil(data3, word => word === 'hello')
assertArraysEqual(result3,[])

const data4 = [10,20,30,40,50];
const results4 = takeUntil(data4, num => false)
assertArraysEqual(results4,[10,20,30,40,50])

const data5 = []
const results5 = takeUntil(data5,() => false)
assertArraysEqual(results5,[])