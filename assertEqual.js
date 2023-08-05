// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  // if the values match, print the following: Assertion Passed: [actual] === [expected] (but with the values filled in);
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);

    // Otherwise it should print (console.log) the following: Assertion Failed: [actual] !== [expected] (but with the values filled in)
  } else {
    (console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`));
  }
}
  ;


module.exports = assertEqual;