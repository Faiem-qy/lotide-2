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



// take in a source array and an items to remove array
const without = function(source, itemsToRemove) {
  // return a new array with only the elements from source that are NOT present in the items to remove array
  let newArray = [];

  //loop through elements in source
  for (let i = 0; i < source.length; i++) {
    let remove = false;
    // loop thorough elements in itemsToRemove(nested loop)
    for (let j = 0; j < itemsToRemove.length; j++) {
      // compare source and itemsToRemove elements and if it matches then remove the element
      if (String(source[i]) === String(itemsToRemove[j])) {
        remove = true;
        break;
      }
    }
    // if elements to remove were false add elements from source[i] into the newArray
    if (!remove) {
      newArray.push(source[i]);
    }
  }
  return newArray;
};



assertArraysEqual(without([1, 2, 3], [1])); // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]