const middle = require('../middle');
// const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;



// assertArraysEqual(middle([]), []);
// assertArraysEqual(middle([1]), []);
// assertArraysEqual(middle([1, 2]), []);;
// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

describe('#middle', () => {
  it("should return an empty array for an empty array", () => {
    assert.deepEqual(middle([]), []);
  });
  it("should return an empty array if the array has only one element", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("should return an empty array if the array has two elements", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it("should return the middle element for an array with an odd length", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("should return the middle element if the array is an odd length", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it("should return the two middle elmenets for an array which is even in length", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("should return the two middle elmenets for an array which is even in length", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});