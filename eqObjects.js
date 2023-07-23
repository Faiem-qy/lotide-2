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


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
// store keys in vairables for object 1 and object 2
  const keys1 = Object.keys(object1)
  const keys2 = Object.keys(object2)

//compare length of keys in both objects

//loop using a for of loop to compare keys 
  

};


const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false