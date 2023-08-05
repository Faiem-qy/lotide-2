const assertArraysEqual = require('./assertArraysEqual')

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


// Test case 1
const result1 = without([1, 2, 3], [1]);
const expected1 = [2, 3];
assertArraysEqual(result1, expected1);

// Test case 2
const result2 = without(["1", "2", "3"], [1, 2, "3"]);
const expected2 = ["1", "2"];
assertArraysEqual(result2, expected2);

module.exports = without