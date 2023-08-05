// const { assert } = require("console");
const assertArraysEqual = require('./assertArraysEqual')

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
assertArraysEqual(results1,[])
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2,[])

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


module.exports = takeUntil