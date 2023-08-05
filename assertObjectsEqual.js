const eqObjects = require('./eqObjects')

// const assertEqual = function(actual, expected) {

//   // if the values match, print the following: Assertion Passed: [actual] === [expected] (but with the values filled in);
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);

//     // Otherwise it should print (console.log) the following: Assertion Failed: [actual] !== [expected] (but with the values filled in)
//   } else {
//     (console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`));
//   }
// };


// const eqArrays = function(arr1, arr2) {
//   if (arr1.length !== arr2.length) {// if array is not equal return false
//     return false;
//   }

//   for (let i = 0; i < arr1.length; i++) {
//     // loop over arrays and then compare the values, return false if not equal
//     if (arr1[i] !== arr2[i])
//       return false;
//   }
//   // return true if equal
//   return true;
// };


// const assertArraysEqual = function(arr1, arr2) {
//   // use eqArrays to compare the arrays
//   if (eqArrays(arr1, arr2)) {
//     // if the arrays are equal
//     console.log(`✅✅ Assertion Passed: [${arr1}] === [${arr2}]`);
//   } else {
//     // if the arrays are not equal
//     console.log(`🛑🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
//   }
// };


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
// const eqObjects = function(object1, object2) {
//   // store keys in vairables for object 1 and object 2
//   const keys1 = Object.keys(object1);
//   const keys2 = Object.keys(object2);

//   //compare length of keys in both objects
//   if (keys1.length !== keys2.length) {
//     return false;
//   }
//   //loop using a for of loop to compare keys 
//   for (const key of keys1) {
//     // store values in variables
//     const value1 = object1[key];
//     const value2 = object2[key];

//     //if value 1 and 2 are arrays
//     if (Array.isArray(value1) && Array.isArray(value2)) {
//       // if the arrays are not equal
//       if (!eqArrays(value1, value2)) {
//         return false;
//       }
//       //if value 1 and 2 are objects
//     } else if (typeof value1 === 'object' && typeof value2 === 'object') {
//       //if nested obects are not equal
//       if (!eqObjects(value1, value2)) {
//         return false;
//       }
//       // if value1 is not equal to value 2
//     } else if (value1 !== value2) {
//       return false;
//     }
//   }
//   return true;
// };



// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {

  const inspect = require('util').inspect;
  //compare objects 
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  };
};


// Example test cases:
const obj1 = { a: '13', b: 52 };
const obj2 = { b: 52, a: '13' };
const obj3 = { a: '1', b: 37 };

assertObjectsEqual(obj1, obj2);
assertObjectsEqual(obj1, obj3);