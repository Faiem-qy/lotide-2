const assertArraysEqual = require('./assertArraysEqual')

const flatten = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      return arr.flat();
    }
  }
  return arr;
};

const expectedFlattened = [1, 2, 3, 4, 5, 6]
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), expectedFlattened)

module.exports = flatten