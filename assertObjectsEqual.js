const eqObjects = require('./eqObjects')



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

module.exports = assertObjectsEqual