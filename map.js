const eqArrays = require('./eqArrays')
const assertArraysEqual = require('./assertArraysEqual')

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
// console.log(results1);



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

module.exports = map